import type { ContactFormData, ContactFormResponse } from './schema';

/**
 * API endpoint for contact form submission
 */
const CONTACT_API_ENDPOINT = '/api/contact';

/**
 * Submit contact form data to the server
 * @param data - The contact form data to submit
 * @returns Promise resolving to the API response
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResponse> {
  try {
    const response = await fetch(CONTACT_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to submit form',
        errors: result.errors,
      };
    }

    return result;
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
