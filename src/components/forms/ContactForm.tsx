


"use client"


import { useState } from "react"
import { useTranslation } from "react-i18next"
import emailjs from "emailjs-com"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage 
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner";


export function ContactForm() {

    const { t } = useTranslation()
    const [isSending, setIsSending] = useState(false)

    // Esquema de validación del formulario con traducciones
    const formSchema = z.object({
        name: z.string().min(2, { message: t("validation.nameMin") }),
        company: z.string().min(2, { message: t("validation.companyMin") }),
        message: z.string().min(10, { message: t("validation.messageMin") }),
    })

    // Form setup
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            company: "",
            message: "",
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        setIsSending(true)
        emailjs.send(
            "service_fbz639f", 
            "template_2x7uhil",
            {
                name: data.name,
                company: data.company,
                message: data.message,
            },
            "_JM6-N2BcvGJM05T_" 
        )
        .then(() => {
            toast.success("El correo se ha enviado con éxito", {
                duration: 5000,
                position: 'top-right',
                })
            form.reset()
        })
        .catch(() => {
            toast.error("¡Vaya! El correo no se ha enviado", {
                description: "Pruebalo de nuevo en unos minutos",
                duration: 5000,
                position: 'top-right',
            })
            form.reset()
        })
        .finally(() => setIsSending(false))
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-3">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>{t("contact.form.name")}</FormLabel>
                                <FormControl>
                                    <Input placeholder={t("contact.form.namePlaceholder")} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>{t("contact.form.company")}</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder={t("contact.form.companyPlaceholder")} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("contact.form.message")}</FormLabel>
                            <FormControl>
                                <Textarea placeholder={t("contact.form.messagePlaceholder")} className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={isSending}>
                    {isSending ? (
                        <>
                            <svg className="animate-spin h-5 w-5 mr-2 inline" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                            </svg>
                            {t("contact.form.sending")}
                        </>
                    ) : t("contact.form.send")}
                </Button>
            </form>
        </Form>
    )
}
