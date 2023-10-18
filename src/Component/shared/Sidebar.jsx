import React from 'react'
import {TbSettings2} from 'react-icons/tb'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/const/navigation'
import { Link } from 'react-router-dom'
import classNames from 'classnames'


const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-[#2d2d69] hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
  return (
    <div className='bg-[#040440] w-60 p-3 flex flex-col text-white'>
        <div className='flex item-center gap-2 px-1 py-3'>
            <TbSettings2 fontSize={24}/>
            <span className='text-neutral-100 text-lg'>Dashboard</span>
        </div>
        <div className='flex-1 py-8 flex flex-col gap-0.5'>
            {DASHBOARD_SIDEBAR_LINKS.map((item) =>(
                <SidebarLink key={item.key}
                    item={item} />
            ))}
        </div>
        <div>Admin</div>
    </div>
  )
}



function SidebarLink({ item }) {
    return(
        <Link to={item.path} className={classNames('text-white', linkClass)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}
