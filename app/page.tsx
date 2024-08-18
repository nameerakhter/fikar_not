import Wallet from "@/components/Wallet";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import BtcForm from "@/components/forms/BtcForm";
// import './global.css';


export default function Home() {
  return (
    <div className="min-h-screen bg-black bg-background bg-cover bg-no-repeat text-white   ">
      <Navbar />
      <Header />
      <Wallet />
    </div>
  );
}
