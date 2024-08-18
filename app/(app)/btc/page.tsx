'use client'
import React, { useState, useEffect } from 'react';
import { generateMnemonic } from 'bip39';
import Btc from '@/components/Links/Btc';
import { Button } from '@/components/ui/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BtcForm from '@/components/forms/BtcForm';


// Ensure the component name starts with an uppercase letter
const Page = () => {
  const [mnemonicArr, setMnemonicArr] = useState<string[]>([]);

  useEffect(() => {
    // Generate a 12-word mnemonic on the client side
    const mnemonic = generateMnemonic();
    const mnemonicArray = mnemonic.split(' ');
    setMnemonicArr(mnemonicArray);
    console.log('Generated Mnemonic:', mnemonicArray);
  }, []);

  const copyMnemonics = () => {
    let copyText = mnemonicArr.join(' ');
    navigator.clipboard.writeText(copyText);
    toast.success('Copied to Clipboard!')
  };

  return (
    <div className='text-black font-extrabold'>
      <div className='flex items-center justify-center m-[2rem]'>
        <Btc />
      </div>
      <div className='flex items-center justify-center'>
      <section className='w-1/2'>
      <div className='rounded-xl p-[2rem] mx-[2rem] w-[800px]'>
        <div className='grid grid-cols-4 gap-4 h-[300px]'>
          {mnemonicArr.map((word, index) => (
            <div className='bg-[#97dc22] flex items-center justify-center  gap-2 rounded-xl' key={index}>
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
          
          theme="dark"/>
      </div>
      </section>
      <section className='w-1/2 p-[2rem]'><BtcForm /></section>
      </div>
    </div>
  );
};

export default Page;
