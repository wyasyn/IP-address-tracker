import { IpData, IpDataContext } from "@/context/IpDataContext";
import axios from "axios";
import { ReactNode, useState, useEffect, useCallback } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

interface IpDataProviderProps {
  children: ReactNode;
}

export const IpDataProvider: React.FC<IpDataProviderProps> = ({ children }) => {
  if (!API_KEY) {
    console.log("API key not loaded");
  }

  const [ipData, setIpData] = useState<IpData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Determine if input is an IP address or domain
  const isIpAddress = (input: string) => {
    const ipPattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return ipPattern.test(input);
  };

  // Fetch IP data based on IP address or domain name, using useCallback
  const fetchIpData = useCallback(async (input: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<IpData>(`https://geo.ipify.org/api/v1`, {
        params: {
          apiKey: API_KEY,
          [isIpAddress(input) ? "ipAddress" : "domain"]: input,
        },
      });
      setIpData(response.data);
    } catch (err) {
      console.log(err);
      setError("Failed to fetch IP data.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Get user's current IP on initial load and fetch its data
  useEffect(() => {
    const fetchDefaultIpData = async () => {
      setLoading(true);
      try {
        const ipResponse = await axios.get(
          "https://api64.ipify.org?format=json"
        );
        const userIp = ipResponse.data.ip;
        await fetchIpData(userIp);
      } catch (err) {
        console.log("Failed to load default IP data:", err);
        setError("Could not load data for your IP address.");
      } finally {
        setLoading(false);
      }
    };

    fetchDefaultIpData();
  }, [fetchIpData]);

  return (
    <IpDataContext.Provider value={{ ipData, fetchIpData, loading, error }}>
      {children}
    </IpDataContext.Provider>
  );
};
