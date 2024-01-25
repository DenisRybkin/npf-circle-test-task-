import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form';
import { Input } from '@components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddUserSchema } from '@lib/utils/validations/add-user-schema';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface AddUserFormProps {
  onSubmit: (values: z.infer<typeof AddUserSchema>) => void;
  extraFormContent?: React.ReactNode;
}

export const AddUserForm = (props: AddUserFormProps) => {
  const form = useForm<z.infer<typeof AddUserSchema>>({
    resolver: zodResolver(AddUserSchema),
    defaultValues: {
      email: '',
      name: '',
      username: '',
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(props.onSubmit)}
        className="flex flex-col justify-start gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Ivan" type="text" {...field} />
              </FormControl>
              <FormMessage number={3} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Ybivator228" type="text" {...field} />
              </FormControl>
              <FormMessage number={3} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="user@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage number={6} />
            </FormItem>
          )}
        />
        {props.extraFormContent}
      </form>
    </Form>
  );
};
