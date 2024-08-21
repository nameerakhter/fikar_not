import Wallet from "@/components/Wallet";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
// import './global.css';


export default function Home() {
  return (
    <div className="min-h-screen bg-background-wallet bg-[#070b1d] bg-cover bg-no-repeat text-white ">
      <Navbar />
      <Header />
      <Wallet />
    </div>
  );
}
