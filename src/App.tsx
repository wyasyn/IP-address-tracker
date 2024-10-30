import Header from "./components/Header";
import Map from "./components/Map";

import { IpDataProvider } from "./providers/IpDataProvider";

export default function App() {
  return (
    <IpDataProvider>
      <div className="min-h-dvh flex flex-col">
        <Header />
        <Map />
      </div>
    </IpDataProvider>
  );
}
