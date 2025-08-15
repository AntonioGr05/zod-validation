import {z} from "zod";

export const signupSchema = z.object({
    firstName: z.string({ error: "El Primer Nombre es Obligatorio"})
    .min(1, "El Primer Nombre es Obligatorio")
    .max(50, "El Primer Nombre no Debe Superar los 50 Caracteres"),
    lastName: z.string().max(50, "El Segundo Nombre no Debe Superar los 50 Caracteres")
    .optional().or(z.literal('')),
    email: z.email({ error: "El Correo es Obligatorio"}),
    password: z.string({ error: "La contraseña es Obligatoria"})
    .min(6, "La Contraseña Minima son 6 Caracteres")
    .max(50, "La Contraseña no Debe de Superar los 50 Caracteres"),
    confirmPassword: z.string({ error: "La Confirmación de la Contraseña es Obligatorio"})
    .min(6)
    .max(50, "La Contraseña no Debe de Superar los 50 Caracteres"),
    age: z.number({ error: "La edad es Obligatoria"})
    .int("La edad debe de ser un Numero")
    .positive(),
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseña no coinciden",
    path: ["confirmPassword"]
} )