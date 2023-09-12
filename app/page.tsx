import { Josefin_Sans } from "next/font/google"

const josefin_sans_bold = Josefin_Sans({
  weight: '700',
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
             text-[3.5rem] leading-normal`}>
              Track All Your Projects From One Place.
            </h1>
          </div>
        </div>
      </div>
        
    </div>
    
  )
}
