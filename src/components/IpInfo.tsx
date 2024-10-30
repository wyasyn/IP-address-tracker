import { IpDataContext } from "@/context/IpDataContext";
import React, { useContext } from "react";
import InfoCard from "./InfoCard";
import { Loader } from "lucide-react";

const IpInfo: React.FC = () => {
  const { ipData, loading, error } = useContext(IpDataContext)!;

  if (loading)
    return (
      <p className="text-muted-foreground ">
        <Loader size={50} className="animate-spin" />
      </p>
    );
  if (error)
    return <p className="text-destructive text-lg text-center">{error}</p>;
  if (!ipData) return null;

  const { ip, location, isp } = ipData;
  const data = [
    { title: "IP Address", value: ip },
    {
      title: "Location",
      value: `${location.city}, ${location.region} ${location.postalCode}`,
    },
    { title: "Timezone", value: `UTC ${location.timezone}` },
    { title: "ISP", value: isp },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-fit bg-white py-8 px-12 rounded-xl shadow-lg gap-8 sm:items-start relative z-50 -mb-[50%] md:gap-12">
      {data.map(({ title, value }) => (
        <InfoCard title={title} value={value} key={title} />
      ))}
    </div>
  );
};

export default IpInfo;
