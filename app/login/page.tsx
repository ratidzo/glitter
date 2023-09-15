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
            <div>
            </div>

            {/**Login Form */}
            
            <form className="flex flex-col w-[25.75rem] h-[34.75rem]
                py-[0.9375rem] items-center justify-between
                shrink-0 ">

                {/**Login to TaskGlitter */}
                <div className="flex justify-center items-center
                     gap-[0.625rem] mb-8 ">
                        <h1 className={`${inria_sans_bold.className}
                            text-[2rem] leading-normal flex`}>
                            Log in to TaskGlitter
                        </h1>
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
                    {/**Email input */}
                    <input name="email" type="text"
                    className="w-[18.0625rem] h-[3rem] shrink-0
                    ring-2 ring-black rounded-lg"/>
                </div>

                {/**Password Section */}
                <div>

                </div>

                
            </form>


        </div>
    )
}

export default Login;


