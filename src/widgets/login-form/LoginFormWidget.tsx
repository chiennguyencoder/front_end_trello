import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/shared/ui/form';


import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';

const loginFormSchema = z.object({
    email: z.string().min(2, 'Username must be at least 2 characters.'),
    password: z.string().min(6, 'Password must be at least 6 characters.'),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

interface LoginFormWidgetProps {
    onSubmit: (data: LoginFormValues) => void;
    isLoading?: boolean;
}

export const LoginFormWidget = ({ onSubmit, isLoading }: LoginFormWidgetProps) => {
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const handleFormSubmit = (data: LoginFormValues) => {
        onSubmit(data);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input className='rounded-[3px]!' placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input className='rounded-[3px]!' type="password" placeholder="Enter your password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit"  className='w-full bg-blue-500! rounded-[3px]! mt-2'>
                    Continue
                </Button>
            </form>
        </Form>
    );
};