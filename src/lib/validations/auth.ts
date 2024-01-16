import * as z from 'zod'

export const authSchema = z.object({
  email: z.string().email({
    message: 'Por favor, insira um endereço de email válido',
  }),
  password: z
    .string()
    .min(8, {
      message: 'A senha precisa ter no mínimo 8 caracteres',
    })
    .max(100)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        'A senha precisa ter no mínimo 8 caracteres, um maiúsculo, um minúsculo, um número e caractere especial',
    }),
})

export const verifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, {
      message: 'Código de verificação precisa ter no mínimo 8 caracteres',
    })
    .max(6),
})

export const checkEmailSchema = z.object({
  email: authSchema.shape.email,
})

export const resetPasswordSchema = z
  .object({
    password: authSchema.shape.password,
    confirmPassword: authSchema.shape.password,
    code: verifyEmailSchema.shape.code,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senha não coincidem',
    path: ['confirmPassword'],
  })
