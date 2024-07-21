import React from 'react';
import { Link, Outlet } from 'react-router-dom';


export default function 
Layout() {
    const menu = [
        {text:'Nature',path:'/'},
        {text:'Travel',path:'/'},
        {text:'Technology',path:'/'},
        {text:'politics',path:'/'},
    ]
  return (
    <div>
        {/* <header></header> */}
        <div className="border-b">
            <div className="container px-5 py-5 flex justify-between">
                <Link to=' '>
                <span className='font-extrabold text-2xl'>Somali Cultural and Herritage App</span>
                </Link>
                <div className='flex'>
                    <ul className='flex'>
                        {
                            menu.map(x =>{
                                return <li><Link className='p-2 item-center justify-center flex'><span>{x.text}</span></Link></li>
                            })
                        }
                    </ul>
                    <button className='bg-slate-500 text-white px-2 py-1 rounded'>
                        <Link to={'/Create'}>+ Add New History</Link>
                        
                        
                    </button>

                </div>
            </div>
        </div>
        {/* <body></body> */}
        <div className=' button-grid flex mx-auto px-5 md:px-20 '>
            <div className="mt-5 mb-5 min-h-[500px] w-full">
            <Outlet></Outlet>
            
            <button className='bg-slate-800 text-white px-6 py-1 rounded-2xl text-2xl '>
            <Link to={'/Hiddaha'}>Click Here to see more detail</Link>
            </button>
            
            <button className='bg-slate-800 text-white px-6 py-1 rounded-2xl  text-2xl '>
            <Link  to={'/Blog'}>Click Here to see more detail</Link>
            </button>

            <button className='bg-slate-800 text-white px-5 py-1 rounded-2xl  text-2xl'>
            <Link to={'/Herritage'}>Click Here to see more detait</Link>
            </button>
            </div>
            
        </div>
        {/* <footer></footer> */}
        <div className="flex bg-slate-800">
            <div className="flex mx-auto px-20 py-20 items-center justify-center">
                <h3 className='text-gray-400'>footer</h3>
            </div>

        </div>
    </div>
  )
}
