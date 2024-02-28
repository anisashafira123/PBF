import Image from "next/image";
import Profile from "../components/profile";

export default function Home() {
  return (
    <div>
    <h1 className="text-center font-bold">Ilmuwan yang luar biasa</h1>
    <div className="grid grid-cols-3 gap-8 justify-center">
      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
    </div>
    </div>
  );
}


