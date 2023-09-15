import { Inria_Sans } from "next/font/google";
import Link from "next/link";

const inria_sans_bold = Inria_Sans({
    weight: '700',
    style: 'normal',
    subsets: ['latin']
})

const inria_sans = Inria_Sans({
    weight: '400',
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
                
                    {/**Login with GitHub */}
                    <Link href={'#'}>
                        <div className="flex w-[18.0625rem] h-12 shrink-0
                        justify-between items-center
                        border-2 border-black rounded-lg bg-black
                        px-[2.81rem]
                        ">

                        {/**Github logo */}
                        <svg className=" mt-[0.69rem] mb-[0.62rem]
                        " xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none">
                                <g clip-path="url(#clip0_149_544)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1094 0C6.39084 0 0.151123 6.1875 0.151123 13.8423C0.151123 19.9612 4.14912 25.1407 9.69541 26.9738C10.3888 27.1117 10.6428 26.676 10.6428 26.3095C10.6428 25.9886 10.62 24.8887 10.62 23.7426C6.73712 24.5677 5.92855 22.0925 5.92855 22.0925C5.30455 20.4882 4.37998 20.0759 4.37998 20.0759C3.10912 19.2279 4.47255 19.2279 4.47255 19.2279C5.88227 19.3196 6.62198 20.6488 6.62198 20.6488C7.86969 22.7571 9.88027 22.1614 10.6891 21.7946C10.8046 20.9008 11.1746 20.2821 11.5674 19.9384C8.47055 19.6175 5.21227 18.4258 5.21227 13.1088C5.21227 11.5962 5.76655 10.3587 6.64484 9.39628C6.50627 9.05259 6.02084 7.63144 6.78369 5.72934C6.78369 5.72934 7.96227 5.36259 10.6197 7.15022C11.7574 6.84722 12.9308 6.69308 14.1094 6.69178C15.288 6.69178 16.4894 6.85238 17.5988 7.15022C20.2566 5.36259 21.4351 5.72934 21.4351 5.72934C22.198 7.63144 21.7123 9.05259 21.5737 9.39628C22.4751 10.3587 23.0066 11.5962 23.0066 13.1088C23.0066 18.4258 19.7483 19.5944 16.6283 19.9384C17.1368 20.3737 17.5757 21.1987 17.5757 22.5051C17.5757 24.3613 17.5528 25.8511 17.5528 26.3092C17.5528 26.676 17.8071 27.1117 18.5003 26.9741C24.0466 25.1404 28.0445 19.9612 28.0445 13.8423C28.0674 6.1875 21.8048 0 14.1094 0Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_149_544">
                                    <rect width="28" height="27" fill="white" transform="translate(0.151123)"/>
                                    </clipPath>
                                </defs>
                        </svg>
                        {/**Prompt text */}
                        <h1 className={`
                                ${inria_sans.className}
                                text-[1rem]
                                leading-normal text-white
                        `}>
                            Continue with GitHub
                        </h1>
                        </div>
                    </Link>
                </div>

                
            </form>


        </div>
    )
}

export default Login;


