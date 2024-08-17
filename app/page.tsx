import Wallet from "@/components/Wallet";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white  bg-cover ">
      <Navbar />
      <Wallet />
    </div>
  );
}
