'use client'
import React, { useState, useEffect } from 'react';
import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
import { derivePath } from "ed25519-hd-key";
import { Keypair, PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";
import Btc from '@/components/Links/Btc';
import { Button } from '@/components/ui/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BtcForm from '@/components/forms/BtcForm';
import { Checkbox } from "@/components/ui/checkbox"



// Ensure the component name starts with an uppercase letter
const Page = () => {
  const [mnemonicArr, setMnemonicArr] = useState<string[]>([]);
  const [mnemonic, setMnemonic] = useState<string>('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useEffect(() => {
    // Generate a 12-word mnemonic on the client side
    const generatedMnemonic = generateMnemonic();
    const mnemonicArray = generatedMnemonic.split(' ');
    setMnemonicArr(mnemonicArray);
    setMnemonic(generatedMnemonic); 
  }, []);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const copyMnemonics = () => {
    let copyText = mnemonicArr.join(' ');
    navigator.clipboard.writeText(copyText);
    toast.success('Copied to Clipboard!')
  };

  return (
    <div className='text-black bg-[#070b1d] bg-background-wallet bg-cover font-extrabold'>
      <div className='flex items-center justify-center p-[2rem]'>
        <Btc />
      </div>
      <div className='flex items-center justify-center'>
        <section className='w-1/2'>
          <div className='rounded-xl p-[2rem] mx-[2rem] w-[800px]'>
            <div className='grid grid-cols-4 gap-4 h-[300px]'>
              {mnemonicArr.map((word, index) => (
                <div className='bg-[#1235ec] text-white flex items-center justify-center  gap-2 rounded-xl' key={index}>
                  <div>{index + 1}.&nbsp;{word}</div>
                </div>
              ))}
            </div>
            <Button
              className='bg-white text-black text-lg w-full my-[2rem] hover:bg-white hover:opacity-70 font-bold'
              onClick={copyMnemonics}
            >
              Copy
            </Button>
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss

              theme="dark" />
              <div className='flex items-center gap-[1rem]'>
              <Checkbox className='bg-white'  onCheckedChange={handleCheckboxChange} /><div className="grid gap-1.5 leading-none text-white">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I have saved my secret recovery phrase
              </label>
            </div>
              </div>
            
          </div>
        </section>
        {isCheckboxChecked && (
          <section className='w-1/2 p-[2rem]'>
            <BtcForm mnemonic={mnemonic}/>
          </section>
        )}
      </div>
    </div>
  );
};

export default Page;
