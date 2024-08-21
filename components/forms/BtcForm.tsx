import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '../ui/card';
import { FaEyeSlash } from "react-icons/fa";
import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
import { derivePath } from "ed25519-hd-key";
import { Keypair, PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";

const BtcForm = ({mnemonic}: {mnemonic: string}) => {
  const [walletPublicSecret, setWalletPublicSecret] = useState<string>('');
  const [walletPrivateSecret, setWalletPrivateSecret] = useState<string>('');
  useEffect(() => {
    if (mnemonic) {
      const seed = mnemonicToSeedSync(mnemonic);
      for (let i = 0; i < 4; i++) {
        const path = `m/44'/501'/${i}'/0'`; // Derivation path
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        setWalletPrivateSecret(Buffer.from(secret).toString('hex'));
        const walletSecret = Keypair.fromSecretKey(secret).publicKey.toBase58();
        setWalletPublicSecret(walletSecret);
      }
    }
  }, [mnemonic]);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  const handleEyeClick = () => {
    setIsContentVisible(!isContentVisible); // Toggle content visibility
    setIsTransparent(!isTransparent); // Toggle overlay opacity
  };
  // const form = useForm({
  //   defaultValues: {
  //     username: '', // You can set default values here
  //   },
  // });
  return (
    <div className='text-white px-[1rem] flex items-center justify-center gap-[2rem] rounded-2xl overflow-hidden  h-[40rem] relative'>
      <Card className='wallet-card rounded-2xl overflow-hidden gap-y-[2rem] '>
        <h1 className='text-4xl'>Bitcoin Wallet</h1>
        <div className='flex flex-col items-center gap-y-[2rem] w-[45rem]'>
        <h2>Your Public Key</h2>
        <div className='bg-[#1235ec] text-white rounded-xl w-[43rem] border-4 h-[7rem] text-wrap p-[1rem]'>
          <p className='break-words'>{walletPublicSecret ? walletPublicSecret : 'Generating Public Key...'}</p>
        </div>

        </div>
        <div className='flex flex-col items-center gap-y-[2rem] w-[45rem]'>
        <h2>Your Private Key</h2>
        <div className='bg-[#1235ec] text-white rounded-xl w-[43rem] border-4 h-[7rem] text-wrap p-[1rem]'>
          
          <p className='break-words selection:bg-black'>{walletPrivateSecret ? walletPrivateSecret : 'Generating Private Key...'}</p>
        </div>
        <div className={`absolute bottom-0 left-0 h-[40rem] w-[52rem] blur-sm bg-[#1235ec]/100 rounded-xl transition-opacity duration-500 ${isTransparent ? 'opacity-0' : 'bg-transparent'}`}>
        <div className='absolute inset-0 blur-sm bg-transparent '></div>
      </div>
      <FaEyeSlash
        className={`absolute h-8 w-8 text-white cursor-pointer m-4 {isTransparent?:'visible':'invisible'}`}
        onClick={handleEyeClick}
      />

        </div>
        
        
      </Card>
      <div></div>
     
    </div>
  );
};

export default BtcForm