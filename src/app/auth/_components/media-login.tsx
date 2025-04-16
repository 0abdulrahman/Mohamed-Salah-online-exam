'use client';
import Image from "next/image";
import google from "../../../../public/assets/images/google.png"
import apple from "../../../../public/assets/images/apple.png"
import facebook from "../../../../public/assets/images/facebook.png"
import twitter from "../../../../public/assets/images/twitter.png"
 

export default function MediaLogin() {
  return <>
            {/* social media login */}
            <div className='flex items-center justify-center space-x-4 my-8 w-full '>
            <div className='flex-grow border-t border-gray-400'></div>
            <span className='text-gray-600 '>Or Continue with</span>
            <div className='flex-grow border-t border-gray-400'></div>
          </div>
          {/* social media login icons  */}
          <div className='w-full flex items-center justify-between md:max-w-lg mx-auto'>
            <div className='border border-gray-300 size-12 md:size-14 rounded-xl flex items-center justify-center  p-2 shadow[#4461F21C] shadow-xl hover:cursor-pointer'>
              <Image width={23} src={google} alt='Google' />
            </div>
            <div className='border border-gray-300 size-12 md:size-14 rounded-xl flex items-center justify-center  p-2 shadow[#4461F21C] shadow-xl hover:cursor-pointer'>
              <Image width={23} src={twitter} alt='Twitter' />
            </div>
            <div className='border border-gray-300 size-12 md:size-14 rounded-xl flex items-center justify-center  p-2 shadow[#4461F21C] shadow-xl hover:cursor-pointer'>
              <Image width={23} src={facebook} alt='Facebook' />
            </div>
            <div className='border border-gray-300 size-12 md:size-14 rounded-xl flex items-center justify-center  p-2 shadow[#4461F21C] shadow-xl hover:cursor-pointer'>
              <Image width={23} src={apple} alt='Apple' />
            </div>
          </div>
  </>
}
