import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import AuthButtons from './AuthButtons'

const page = () => {
    return (
        <div className='flex h-screen w-full'>
            <div className='flex-1 flex overflow-hidden dark:bg-[#500B2A55] bg-[#500B2A] relative
    justify-center items-center'>
                <Image src="/logo2.png" alt="Logo" width={763}
                    height={173}
                    className='absolute -left-1/4 opacity-25 -bottom-52 lg:scale-125 xl:scale-100 scale-[2] pointer-events-none select-none -z-1' />
                <div className='flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold'>
                    <Image
                        src={"/convo-logo.png"}
                        alt="Logo"
                        width={763}
                        height={173}
                        className="mt-20 w-[360px] h-[180px] z-0 pointer-events-none select-none opacity-90" />
                    <p className='text-2xl md:text-3xl text-balance z-10'>
                        The <span className='bg-[#af3f72] px-2 font-bold text-white'>ULTIMATE</span> chat app
                    </p>
                    <p className='text-2xl md:text-3xl mb-32 text-balance z-10'>
                        You <span className='bg-[#6a4d9b]  px-2 font-bold text-white'>NEED TO</span> build
                    </p>
                    <AuthButtons/>
                </div>

            </div>
            <div className='flex-1 relative overflow-hidden justify-center items-center hidden md:flex bg-noise'>
                <Image
                    src={"/right-img3.jpg"}
                    alt='Hero Image'
                    fill
                    className='object-cover dark:opacity-60 opacity-90 pointer-events-none select-none h-full'
                />
            </div>
        </div>
    )
}

export default page
