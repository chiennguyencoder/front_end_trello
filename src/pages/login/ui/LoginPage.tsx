import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card'

import { LoginFormWidget, SocialButton } from '@/widgets'

export default function CardDemo() {
    return <>
        <div className='flex justify-center items-center min-h-screen'>
            <Card className="w-[400px] px-[40px] py-[32px] mx-auto rounded-[3px]! border border-slate-200">
                <CardHeader>
                    <div className='flex justify-center gap-3'>
                        {/* <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Trello-512.png" alt="TrelloPicture" className='w-12 h-12' /> */}
                        <CardTitle className='text-4xl text-center font-semibold'>LOGIN</CardTitle>
                    </div>
                    <CardDescription className='text-center mt-4 font-sans font-bold text-[16px] text-gray-900!'>
                        Login to continue!
                    </CardDescription>
                </CardHeader>
                <CardContent className='p-0!'>
                    <LoginFormWidget onSubmit={(data) => console.log(data)} isLoading={false} />
                    <div>
                        <p className='text-center my-4 text-[14px] font-semibold  text-gray-500'>Or continue with:</p>
                    </div>
                   
                   {/* Login with social method */}
                    <SocialButton />

                </CardContent>
                <CardFooter className='justify-center'>
                    <div className='text-center text-[14px]'>Don't have an account? <a href="#" className='text-blue-500 hover:underline'>Sign up</a></div>
                </CardFooter>
                
            </Card>
        </div>
    </>
}
