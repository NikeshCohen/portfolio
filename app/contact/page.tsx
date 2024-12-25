"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all fields correctly.");
      return;
    }
    setIsLoading(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formFields = [
    { id: "name", label: "Name", type: "text", placeholder: "John Doe" },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "john@example.com",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="layout flex min-h-[90vh] items-center">
      <motion.div
        className="mx-auto max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8 space-y-2">
          <h1 className="text-4xl font-bold lg:text-5xl">Get in Touch</h1>
          <p className="text-muted-foreground">
            Have a project in mind? Let&apos;s work together to bring your ideas
            to life.
          </p>
        </motion.div>

        <motion.form
          variants={containerVariants}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          {formFields.map((field) => (
            <motion.div key={field.id} variants={itemVariants}>
              <label
                htmlFor={field.id}
                className="mb-2 block text-sm font-medium text-foreground"
              >
                {field.label}
              </label>
              <Input
                type={field.type}
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                value={formData[field.id as keyof FormData]}
                onChange={handleInputChange}
                className={`w-full ${errors[field.id as keyof FormErrors] ? "border-red-500" : ""}`}
                disabled={isLoading}
              />
              {errors[field.id as keyof FormErrors] && (
                <p className="mt-1 text-xs text-red-500">
                  {errors[field.id as keyof FormErrors]}
                </p>
              )}
            </motion.div>
          ))}

          <motion.div variants={itemVariants}>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleInputChange}
              className={`min-h-[150px] w-full resize-none ${errors.message ? "border-red-500" : ""}`}
              disabled={isLoading}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">{errors.message}</p>
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-end space-x-4"
          >
            <Button type="submit" disabled={isLoading} className="relative">
              <motion.span
                animate={isLoading ? { opacity: 0 } : { opacity: 1 }}
                className="flex items-center gap-2"
              >
                Send Message
                <Send className="h-4 w-4" />
              </motion.span>
              {isLoading && (
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-r-transparent" />
                </motion.div>
              )}
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
}
