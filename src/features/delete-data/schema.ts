import { z } from 'zod';

export const deleteDataSchema = z.object({
  phone: z
    .string()
    .min(8, 'Phone number must be at least 8 digits')
    .max(20, 'Phone number must be less than 20 digits'),
  email: z.string().email('Please enter a valid email address'),
  reason: z
    .string()
    .min(10, 'Please provide a brief reason (min 10 characters)')
    .max(2000, 'Reason must be less than 2000 characters'),
  app: z.enum(['Droptro', 'Droptro Seller', 'DroptroGo'], {
    message: 'Please choose an app',
  }),
});

export type DeleteDataFormData = z.infer<typeof deleteDataSchema>;

export interface DeleteDataResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
