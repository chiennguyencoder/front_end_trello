import { Button } from '@/shared/ui/button'

export function OAuthButton() {
    return (
        <div>
            <Button
                variant="outline"
                className="w-full mt-2 hover:bg-grey-200! cursor-pointer rounded-[3px]!"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                    className="w-5 h-5 mr-2"
                    alt=""
                />
                Continue with Google
            </Button>
            <Button
                variant="outline"
                className="w-full mt-2 hover:bg-grey-200! cursor-pointer rounded-[3px]!"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    className="w-5 h-5 mr-2"
                    alt=""
                />
                Continue with Facebook
            </Button>
        </div>
    )
}
