import {Josefin_Sans} from 'next/font/google'

const josefin_sans = Josefin_Sans({
    weight: '700',
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
        </div>
    )
}

export {Nav};