import { Metadata } from 'next';
import { ContactForm } from '@/features/contact/ContactForm';
import { MapPin, Phone, Mail, Clock, Twitter, Linkedin, Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Droptro',
  description: 'Get in touch with the Droptro team. We\'re here to help!',
};

/**
 * Business hours configuration
 */
const businessHours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM (PST)' },
  { day: 'Saturday', time: '10:00 AM - 4:00 PM (PST)' },
  { day: 'Sunday', time: 'Closed' },
];

/**
 * Contact information configuration
 */
const contactInfo = {
  address: 'Bhanu Nagar, Jalpaiguri, West Bengal, India - 735101',
  phone: {
    primary: '+1 (555) 123-4567',
    support: '+1 (555) 987-6543',
  },
  email: {
    general: 'contact@droptro.com'
  },
};

/**
 * Social media links configuration
 */
const socialLinks = [
  { href: 'https://twitter.com', label: 'Twitter', icon: Twitter },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://Instagram.com', label: 'Instagram', icon: Instagram },
];

/**
 * Contact page component
 * Displays contact information and a contact form
 */
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            {/* Contact Details Card */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-gray-900">Get in Touch</h2>
              
              {/* Address */}
              <div className="mb-6 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-medium text-gray-900">Address</h3>
                  <address className="not-italic text-gray-600">
                    {contactInfo.address}
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-6 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">
                    <a href={`tel:${contactInfo.phone.primary}`} className="hover:text-blue-600">
                      {contactInfo.phone.primary}
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">
                    <a href={`mailto:${contactInfo.email.general}`} className="hover:text-blue-600">
                      {contactInfo.email.general}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Business Hours</h2>
              </div>
              
              <div className="space-y-3">
                {businessHours.map((item) => (
                  <div key={item.day} className="flex justify-between border-b border-gray-100 pb-3 last:border-0">
                    <span className="font-medium text-gray-900">{item.day}</span>
                    <span className="text-gray-600">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Links Card */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-gray-900">Follow Us</h2>
              
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-blue-100 hover:text-blue-600"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
