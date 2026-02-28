import type { DeleteDataFormData, DeleteDataResponse } from './schema';

const DELETE_DATA_API_ENDPOINT = '/api/delete-data';

export async function submitDeleteDataRequest(
  data: DeleteDataFormData
): Promise<DeleteDataResponse> {
  try {
    const response = await fetch(DELETE_DATA_API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to submit request',
        errors: result.errors,
      };
    }

    return result;
  } catch (error) {
    console.error('Delete data request error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
