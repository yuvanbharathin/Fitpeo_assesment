import React from 'react'
import DashboardStatusGrid from './DashboardStatusGrid'
import TransactionChart from './TransactionChart'
import CustomerChart from './CustomerChart'
import ProductSell from './ProductSell'

export default function Dashboard() {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStatusGrid />
      <div className='flex flex-row gap-4 w-full'>
        <TransactionChart />
        <CustomerChart className='root1' />
      </div>
      <div className=' gap-4 w-full h-full'>
        <ProductSell />
      </div>
      
    </div>
  )
}
