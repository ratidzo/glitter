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

function Nav() {
    return(
        <div className="flex w-[81rem] h-[3rem] mx-[4.5rem]
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

        </div>
    )
}

export {Nav};