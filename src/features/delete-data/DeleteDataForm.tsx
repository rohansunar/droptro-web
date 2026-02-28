 'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { submitDeleteDataRequest } from './service';
import type { DeleteDataFormData, DeleteDataResponse } from './schema';

const apps = ['Droptro', 'Droptro Seller', 'DroptroGo'] as const;

export function DeleteDataForm() {
  const [formData, setFormData] = useState<DeleteDataFormData>({
    phone: '',
    email: '',
    reason: '',
    app: 'Droptro',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof DeleteDataFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<DeleteDataResponse | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof DeleteDataFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const result = await submitDeleteDataRequest(formData);
    setSubmitResult(result);

    if (result.errors) {
      const fieldErrors: Partial<Record<keyof DeleteDataFormData, string>> = {};
      Object.entries(result.errors).forEach(([key, messages]) => {
        if (messages && messages.length > 0) {
          fieldErrors[key as keyof DeleteDataFormData] = messages[0];
        }
      });
      setErrors(fieldErrors);
      setSubmitResult({
        success: false,
        message: 'Please correct the highlighted fields and try again.',
      });
    }

    if (result.success) {
      setFormData({ phone: '', email: '', reason: '', app: 'Droptro' });
    } else if (!result.success && !result.errors) {
      setSubmitResult({
        success: false,
        message: 'Something went wrong. Please try again.',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-8 shadow-sm">
      <Input
        label="Phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        placeholder="Your phone number"
        required
      />

      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="you@example.com"
        required
        autoComplete="email"
      />

      <div>
        <label htmlFor="app" className="mb-1.5 block text-sm font-medium text-gray-700">
          Select App
        </label>
        <select
          id="app"
          name="app"
          value={formData.app}
          onChange={handleChange}
          className={`block w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 ${
            errors.app
              ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-200'
              : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-200'
          }`}
          required
        >
          {apps.map((app) => (
            <option key={app} value={app}>
              {app}
            </option>
          ))}
        </select>
        {errors.app && <p className="mt-1.5 text-sm text-red-600">{errors.app}</p>}
      </div>

      <div>
        <label
          htmlFor="reason"
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          Reason for Deletion
        </label>
        <textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          rows={5}
          className={`block w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 ${
            errors.reason
              ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-200'
              : 'border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-200'
          }`}
          placeholder="Tell us why you want your data deleted"
          required
        />
        {errors.reason && (
          <p className="mt-1.5 text-sm text-red-600">{errors.reason}</p>
        )}
      </div>

      <Button type="submit" isLoading={isSubmitting} className="w-full">
        {isSubmitting ? 'Submitting...' : 'Submit Deletion Request'}
      </Button>

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
