import { Metadata } from 'next';
import { DeleteDataForm } from '@/features/delete-data/DeleteDataForm';

export const metadata: Metadata = {
  title: 'Delete My Data | Droptro',
  description: 'Request deletion of your data from Droptro apps.',
};

export default function DeleteDataPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Delete My Data</h1>
          <p className="text-lg text-gray-600">
            Use this form to request deletion of your data from our apps. We&apos;ll process your request and confirm via email.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <DeleteDataForm />
        </div>
      </div>
    </main>
  );
}
