import { createContext } from "react";

export interface Location {
  city: string;
  region: string;
  postalCode: string;
  timezone: string;
  lat: number;
  lng: number;
}

export interface IpData {
  ip: string;
  location: Location;
  isp: string;
}

export interface IpDataContextType {
  ipData: IpData | null;
  fetchIpData: (ip: string) => void;
  loading: boolean;
  error: string | null;
}

export const IpDataContext = createContext<IpDataContextType | undefined>(
  undefined
);
