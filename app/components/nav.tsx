import {Josefin_Sans, Inria_Sans} from 'next/font/google'
import Link from 'next/link';

const josefin_sans = Josefin_Sans({
    weight: '700',
    style: 'normal',
    subsets: ['latin']
})

const inria_sans = Inria_Sans({
    weight: '400',
    style: 'normal',
    subsets: ['latin']
})

const inria_sans_bold = Inria_Sans({
    weight: '700',
    style: 'normal',
    subsets: ['latin']
})


function Nav() {
    return(
        <div className="flex h-[3rem] mx-[4.5rem]
         mt-6 justify-between items-center shrink-0">

            {/**Company logo. */}
            <div className="flex w-[7.8125rem] h-[1.5rem]
             justify-center items-center shrink-0">
                <h1 className={`${josefin_sans.className}
                 text-2xl leading-normal`}>
                    TaskGlitter
                </h1>
            </div>

            {/**Product marketing & sales links */}
            <div className='flex w-[10.375rem] h-[1.375rem]
             items-center gap-8 shrink-0'
            >
                <Link href={'#'}>
                    <h1 className={`${inria_sans.className} text-[1.125rem] text-black leading-normal`
                     }
                    >
                        Products
                    </h1>
                </Link>
                <Link href={'#'}>
                    <h1 className={`${inria_sans.className} text-[1.125rem] text-black leading-normal`
                     }
                    >
                        Contacts
                    </h1>
                </Link>
            </div>

            {/**Login - Signup buttons. */}
            <div className='flex w-[12.375rem] h-[2.875rem]
            items-center gap-10 shrink-0'>

                {/**Log in button */}
                <Link href={'#'}>
                    <h1 className={`${inria_sans_bold.className}
                    text-[1.125rem] leading-normal`}>
                        Log in
                    </h1>
                </Link>
                
                {/**Sign up */}
                <div className='flex w-[6.875rem] h-[2.875rem]
                px-[1.625rem] py-[0.6875rem] justify-center
                items-center shrink-0 rounded-3xl bg-black'>
                    <Link href={'#'}>
                        <h1 className={`shrink-0 ${inria_sans.className} text-[1.125rem] leading-normal text-white`}>
                        Sign up
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export {Nav};

