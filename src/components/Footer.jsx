import React from 'react'

function Footer() {
    return (
        <div className='w-full'>
            <div className='w-[80vw]  mx-auto py-7 flex gap-3'>
            <div className='basis-1/2  flex items-center'>
               <img className='pl-28' src="https://gplclub.co/wp-content/uploads/2024/09/logo-mht-copy-1.webp"  />
            </div>
            <div className='basis-1/2 flex gap-4'>
                <div className='basis-1/3'>
                    <h4 className=' mb-7 text-zinc-300 capitalize'>Socials</h4>
                    {["Instagram","Twitter","Facebook","LinkedIn"].map((item,index)=>(
                        <a key={index} className='hover:text-zinc-400 block mt-2 capitalize text-zinc-500' href="#">{item}</a>
                    ))}
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-7 text-zinc-300 capitalize'>Sitemap</h4>
                    {["Home","About","Contacts","Work"].map((item,index)=>(
                        <a key={index} className='hover:text-zinc-400   block mt-2 capitalize text-zinc-500' href="#">{item}</a>
                    ))}
                </div>
                <div className='basis-1/2 mt-10'>
                    <p>webX is a top Webflow Agency combining high-end design with Webflow Development expertise.</p>
                    <img className='w-40 object-contain h-10 mt-8' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer