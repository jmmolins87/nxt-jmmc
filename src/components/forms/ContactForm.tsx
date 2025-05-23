


"use client"

import { useTranslation } from "react-i18next"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
    const { t } = useTranslation()

    // Esquema de validación del formulario con traducciones
    const formSchema = z.object({
        name: z.string().min(2, { message: t("validation.nameMin") }),
        email: z.string().email({ message: t("validation.emailInvalid") }),
        message: z.string().min(10, { message: t("validation.messageMin") }),
    })

    // Form setup
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
        // Here you would typically send the form data to your backend
        alert(t("contact.form.success"))
        form.reset()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t("contact.form.email")}</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder={t("contact.form.emailPlaceholder")} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                <Button type="submit" className="w-full">
                    {t("contact.form.send")}
                </Button>
            </form>
        </Form>
    )
}
