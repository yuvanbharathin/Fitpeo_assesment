import React from 'react'
import { PiCurrencyDollarFill } from 'react-icons/pi'
import { IoBagHandle } from 'react-icons/io5'
import { FaCoins } from 'react-icons/fa6'
import { CgNotes } from 'react-icons/cg'


export default function DashboardStatusGrid() {
  return (
    <div className='flex gap-4 w-full'>
        <BoxWrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-[#22c55e]'>
                <PiCurrencyDollarFill className='text-9xl text-white' />
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Earning</span>
                <div>
                    <strong className='text-xl text-gray-700 font-semibold'>$198K</strong>
                    <div><span>+37.8% this month</span></div>
                    
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-[#d8b4fe]'>
                <CgNotes className='text-4xl text-white' />
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Orders</span>
                <div>
                    <strong className='text-xl text-gray-700 font-semibold'>$3.5K</strong>
                    <div><span>-2% this month</span></div>
                    
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-[#67e8f9]'>
                <FaCoins className='text-3xl text-white' />
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Balance</span>
                <div>
                    <strong className='text-xl text-gray-700 font-semibold'>$2.4K</strong>
                    <div><span>-2% this month</span></div>
                    
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-[#f472b6]'>
                <IoBagHandle className='text-4xl text-white' />
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Total Sales</span>
                <div>
                    <strong className='text-xl text-gray-700 font-semibold'>$89K</strong>
                    <div><span>+11% this week</span></div>
                    
                </div>
            </div>
        </BoxWrapper>
    </div>
  )
}



function BoxWrapper({ children }){
    return(
        <div className='bg-white rounded-lg p-4 flex-1 border border-gray-200 flex item-center'>
            {children}
        </div>
    )
}
