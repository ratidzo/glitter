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

            <div className="flex w-[25.75rem] h-[34.75rem]
            py-[0.9375rem] flex-col justify-between items-center
            shrink-0 ">

                {/**Login to TaskGlitter */}
                <div className="flex justify-center items-center
                gap-[0.625rem] mb-8 ">
                    <h1>
                        Log in to TaskGlitter

                        color: #000;
font-family: Inria Sans;
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
                    </h1>
                </div>
            </div>

        </div>
    )
}

export default Login;

