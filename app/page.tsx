import { Josefin_Sans, Inter } from "next/font/google"
import Link from "next/link"

const josefin_sans_bold = Josefin_Sans({
  weight: '700',
  style: 'normal',
  subsets: ['latin']
})

const inter = Inter({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})
export default async function Home() {
  

  return(

    <div className="flex h-[26.25rem]
    items-center mt-[10.5rem]">
      {/**Banner section */}
      <div className="flex flex-col w-[40rem] h-[22rem]
       px-0 py-2 justify-between items-start shrink-0">
        {/**Marketing section */}
        <div className="flex w-[40rem] h-[11.25rem]
        flex-col items-start gap-4 shrink-0">
          {/**Hero */}
          <div className="flex w-[40rem] h-[7rem]
          justify-center items-center shrink-0">
            <h1 className={`${josefin_sans_bold.className}
             text-[3.5rem] leading-normal `}>
              Track All Your Projects From One Place.
            </h1>
          </div>

          {/**Product pitch - description */}
          <div className="flex w-[31.75rem] h-[3.625rem]
           justify-center align-center shrink-0 mt-4">
            <h1 className={`${inter.className}
             text-2xl leading-normal`}>
            Get your most important work done quickly. No hustle, no backups. 
            </h1>
          </div>
        </div>

        {/**Prompt and signup */}
        <div className="flex w-[35rem] h-8
        justify-center items-center gap-8 shrink-0">
          {/**Info */}
          <div className="flex w-[22.18713rem] h-[1.8125rem]
          pr-0 items-center shrink-0">
            <h1 className={`${inter.className} text-2xl leading-normal`}>
            Create your account. It&#39;s free!
            </h1>
          </div>

          {/**Registration link */}
          <Link href={'#'}>
            <div className="flex w-[10.62856rem] h-8
          justify-between items-center shrink-0">
            {/**Get started */}
            <div className="flex w-[8.3125rem] h-8 flex-col
            justify-between items-center shrink-0">
                <h1 className={`${inter.className} text-2xl leading-normal`}>
                Get Started
                </h1>
              {/**Underline */}
              <div>
                <svg width="129" height="2" viewBox="0 0 129 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0.468567" y1="1" x2="128.469" y2="1" stroke="black" stroke-width="2"/>
                </svg>
              </div>
            </div>

            {/**Arrow */}
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25"      height="24" viewBox="0 0 25 24" fill="none">
              <path d="M5.9257 20L4.5257 18.6L16.1257 7H9.5257V5H19.5257V15H17.5257V8.4L5.9257 20Z" fill="black"/>
              </svg>
            </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
    
  )
}
