import { Inria_Sans } from "next/font/google";
import Link from "next/link";

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
                    {/** Email label*/}
                    <label htmlFor="email" className={`
                    ${inria_sans_bold.className} text-[1rem]
                    leading-normal`}>
                        Email
                    </label>
                    {/**Email input */}
                    <input name="email" type="text"
                    className="w-[18.0625rem] h-[3rem] shrink-0
                    ring-2 ring-black rounded-lg px-4"/>
                </div>

                {/**Password Section */}
                <div className="flex flex-col h-[4.5rem]
                  items-start gap-2 shrink-0">

                    {/** Password label*/}
                    <label htmlFor="password" className={`
                    ${inria_sans_bold.className} text-[1rem]
                    leading-normal`}>
                        Password
                    </label>
                    {/**Password input */}
                    <input name="password" type="password"
                    className="w-[18.0625rem] h-[3rem] shrink-0
                    ring-2 ring-black rounded-lg px-4"/>

                    {/**Recovery & Signup Links */}

                    <div className="flex w-[19.3125rem] p-[0.625rem]
                    justify-between items-center ">
                        <div className="flex items-start gap-[4.8125rem]
                        ">
                            <Link href={'#'}>
                                <h1 className={`${inria_sans_bold.className}
                                text-[1rem] leading-normal`}>
                                    Forgot your password?
                                </h1>
                            </Link>
                            <Link href={'#'}>
                                <h1 className={`${inria_sans_bold.className}
                                text-[1rem] leading-normal`}>
                                    Sign up
                                </h1>
                            </Link>

                        </div>
                    </div>

                    {/**Login Button */}
                    <input type="submit" className={`
                    ${inria_sans_bold.className } bg-black
                     text-white flex hover:cursor-pointer
                     hover:shadow-lg hover:shadow-indigo-200
                    w-[18.0625rem] py-[0.5625rem] px-[7.0625rem]
                    justify-between items-center rounded-lg
                    border-2 border-black`} name="submit"
                    value="Log in"/>

                    {/**Options Visual Divider */}
                    <div className="flex w-[18.0625rem]
                    justify-between items-center ">
                        {/**Left half-line */}
                        <svg width="125" height="2" viewBox="0 0 125 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.151123" y1="1.14288" x2="124.151" y2="1.14288" stroke="black"/>
                        </svg>
                            {/**Centre text */}
                        <h1 className={`${inria_sans_bold.className}
                           text-[1rem] leading-normal
                        `}>
                            Or
                        </h1>
                            {/**Right half-line */}
                        <svg width="125" height="2" viewBox="0 0 125 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.151123" y1="1.14288" x2="124.151" y2="1.14288" stroke="black"/>
                        </svg>
                    </div>
                
                </div>

                
            </form>


        </div>
    )
}

export default Login;


