'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { submitContactForm } from './service';
import type { ContactFormData, ContactFormResponse } from './schema';

/**
 * ContactForm component
 * A form for users to submit contact inquiries
 */
export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<ContactFormResponse | null>(null);

  /**
   * Handle input change
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const result = await submitContactForm(formData);
      setSubmitResult(result);

      if (result.success) {
        // Reset form on success
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (result.errors) {
        // Set field errors
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        Object.entries(result.errors).forEach(([key, messages]) => {
          if (messages && messages.length > 0) {
            fieldErrors[key as keyof ContactFormData] = messages[0];
          }
        });
        setErrors(fieldErrors);
      }
    } catch {
      setSubmitResult({
        success: false,
        message: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-8 shadow-sm">
      {/* Name Field */}
      <Input
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Your name"
        required
        autoComplete="name"
      />

      {/* Email Field */}
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="your@email.com"
        required
        autoComplete="email"
      />

      {/* Subject Field */}
      <Input
        label="Subject"
        name="subject"
        type="text"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
        placeholder="What is this about?"
        required
      />

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`block w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 ${
            errors.message
              ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-200'
              : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-200'
          }`}
          placeholder="How can we help you?"
          required
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button type="submit" isLoading={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {/* Success/Error Message */}
      {submitResult && (
        <div
          className={`rounded-lg p-4 text-sm ${
            submitResult.success
              ? 'bg-green-50 text-green-800'
              : 'bg-red-50 text-red-800'
          }`}
        >
          {submitResult.message}
        </div>
      )}
    </form>
  );
}
