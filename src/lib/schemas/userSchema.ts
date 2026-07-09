import {z} from "zod";

/*Update User */

export const updateUserSchema = z.object({
    name: z.string().min(1, {message: "Nome Obrigatorio"}).max(80, {message: "Nome muito longo"}),
    email: z.string().email({message: "email inválido"}).max(254, {message: "email muito longo"}),
    password: z.string()
        .max(80, {message: "Senha muito longa"})
        .refine(value => !value || /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9\s]).+$/
        .test(value), 
            {message: "A senha deve conter pelo menos uma letra, um número e um caractere especial"}),

    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
})

export type UpdateUserData = z.infer<typeof updateUserSchema>;