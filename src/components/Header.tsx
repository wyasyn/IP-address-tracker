import IpInfo from "./IpInfo";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-hero-pattern-mobile sm:bg-hero-pattern-desktop min-h-[250px] bg-cover bg-no-repeat flex flex-col w-full items-center justify-center pt-12 gap-8 sm:justify-start ">
      <h1 className="text-3xl text-center text-white ">IP Address Tracker</h1>
      <SearchBar />
      <IpInfo />
    </header>
  );
}
