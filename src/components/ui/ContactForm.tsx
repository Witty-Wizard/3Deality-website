import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {
    const { toast } = useToast();
    const [state, handleSubmit] = useForm("meoepbbj");

    useEffect(() => {
        if (state.succeeded) {
            toast({
                title: "Message sent successfully",
                description: "We'll get back to you as soon as possible"
            });
        }
    }, [state.succeeded, toast]);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
        >
            <div className="bg-white rounded-2xl shadow-sm p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <Input
                                id="name"
                                type="name"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full"
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                className="w-full"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                            Subject
                        </label>
                        <Input
                            name="subject"
                            id="subject"
                            required
                            placeholder="How can we help?"
                            className="w-full"
                        />
                        <ValidationError
                            prefix="Subject"
                            field="subject"
                            errors={state.errors}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Message
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Tell us about your project..."
                            className="w-full min-h-[150px]"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={state.submitting}
                    >
                        {state.submitting ? "Sending..." : "Send Message"}
                    </Button>
                </form>
            </div>
        </motion.div>
    );
};
