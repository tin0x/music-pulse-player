import { z } from 'zod';

export const RegisterSchema = z
  .object({
    username: z
      .string()
      .min(3)
      .max(16)
      .regex(/^[a-z0-9]+$/i),
    email: z.string().email(),
    password: z
      .string()
      .min(8)
      .regex(/[a-z]/)
      .regex(/[A-Z]/)
      .regex(/[0-9]/)
      .regex(/[@$!%*?]/),
    repeatPassword: z.string(),
    avatar: z.any().optional(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    path: ['repeatPassword'],
  });

export type FormUser = z.infer<typeof RegisterSchema>;