import * as z from 'zod';

export const AddUserSchema = z.object({
  name: z
    .string()
    .nonempty('field is required')
    .min(3, 'minimum of 6 characters')
    .max(10, 'maximum of 10 characters'),
  username: z
    .string()
    .min(3, 'minimum of 3 characters')
    .max(10, 'maximum of 10 characters'),
  email: z
    .string()
    .nonempty('field is required')
    .email('incorrect the email')
    .min(6, 'minimum of 6 characters'),
});
