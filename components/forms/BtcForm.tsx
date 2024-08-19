import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { Card, CardContent } from '../ui/card';

const BtcForm = () => {
  const form = useForm({
    defaultValues: {
      username: '', // You can set default values here
    },
  });
  return (
    <div className='text-white flex items-center justify-center gap-[2rem] rounded-2xl overflow-hidden  h-[40rem]'>
      {/* Wrap form elements in the Form component */}
      <Card className='wallet-card rounded-2xl overflow-hidden gap-y-[2rem]'>
        <h1 className='text-4xl'>Bitcoin Wallet</h1>
        <div className='flex flex-col items-center gap-y-[2rem] w-[45rem]'>
        <h2>Your Public Key</h2>
        <div className='bg-black text-white rounded-lg w-[45rem] border h-[7rem] text-wrap p-[1rem]'>
          <p className='break-words'>FpmbnYN5WPbfcWLVzrdqawtawRzK5CfRUHse5DLi1tZ5AJQ63cL3ietuNTv8cMTpmMuwGKwZJoZ7Ae6Bv9V59h7Y5YriTGi3MrHNML7SN3YWiMfEQC8QjKGtvxrNL4D87qFH65cWJrc1Ass8VWZoc1TdFi8W5YPEbQiMypccHbVRNjRk</p>
        </div>

        </div>
        <div className='flex flex-col items-center gap-y-[2rem] w-[45rem]'>
        <h2>Your Private Key</h2>
        <div className='bg-black text-white rounded-lg w-[45rem] border h-[7rem] text-wrap p-[1rem]'>
          <p className='break-words'>FpmbnYN5WPbfcWLVzrdqawtawRzK5CfRUHse5DLi1tZ5AJQ63cL3ietuNTv8cMTpmMuwGKwZJoZ7Ae6Bv9V59h7Y5YriTGi3MrHNML7SN3YWiMfEQC8QjKGtvxrNL4D87qFH65cWJrc1Ass8VWZoc1TdFi8W5YPEbQiMypccHbVRNjRk</p>
        </div>

        </div>
        
        
      </Card>
    </div>
  );
};

export default BtcForm