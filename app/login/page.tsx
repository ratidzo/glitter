import { Inria_Sans } from "next/font/google";

const inria_sans_bold = Inria_Sans({
    weight: '700',
    style: 'normal',
    subsets: ['latin']
})


function Login() {
    return(
        <div className="flex w-[68.91569rem] justify-between
        items-center mt-[8.06rem] mb-[21.2rem]
         ml-[4.5rem] mr-[16.6rem] ">

            {/**Illustration */}
            <>
            </>

            {/**Login Form */}

            <div className="flex flex-col w-[25.75rem] h-[34.75rem]
            py-[0.9375rem] justify-between items-center
            shrink-0 ">

                {/**Login to TaskGlitter */}
                <div className="flex justify-center items-center
                gap-[0.625rem] mb-8 ">
                    <h1 className={`${inria_sans_bold.className}
                     text-[2rem] leading-normal`}>
                        Log in to TaskGlitter
                    </h1>

                    {/**Black section */}
                    <div className="flex h-[2.375rem] justify-center
                    items-center gap-[0.625rem] shrink-0 w-[17.6875rem]">
                    </div>


                    {/**Email Section */}
                    <div className="flex h-[4.9375rem] flex-col
                     items-start gap-2 shrink-0 ">
                        {/** */}
                        <label htmlFor="email" className={`
                        ${inria_sans_bold.className} text-[1rem]
                        leading-normal`}>
                            Email
                        </label>


                    </div>

                    

                </div>
            </div>

        </div>
    )
}

export default Login;

