import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Dentist in North Karachi | Dr. Sadaf Dental Care",
  description: "Looking for a trusted dentist in North Karachi? Dr. Sadaf Dental Care provides modern dental treatments, preventive care, cosmetic dentistry, and family dental services in Karachi.",
  keywords: [
    "Dentist North Karachi",
    "Dental Clinic Karachi",
    "Best Dentist Karachi",
    "Teeth Whitening Karachi",
    "Dental Implants Karachi",
    "Root Canal Karachi",
    "Dr. Sadaf Dental Care",
    "Dr. Sadaf Karachi",
    "Dentist Sector 11-B",
    "Dentist Zulfiqar Ave",
    "Family Dentist Karachi"
  ],
  authors: [{ name: "Dr. Sadaf Dental Care" }],
  metadataBase: new URL("https://drsadafdentalcare.com"), // Placeholder canonical URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Dentist in North Karachi | Dr. Sadaf Dental Care",
    description: "Looking for a trusted dentist in North Karachi? Dr. Sadaf Dental Care provides modern dental treatments, preventive care, cosmetic dentistry, and family dental services in Karachi.",
    url: "https://drsadafdentalcare.com",
    siteName: "Dr. Sadaf Dental Care",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&h=630&auto=format&fit=crop", // Beautiful high-quality clinical background
        width: 1200,
        height: 630,
        alt: "Dr. Sadaf Dental Care Clinic in North Karachi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dentist in North Karachi | Dr. Sadaf Dental Care",
    description: "Looking for a trusted dentist in North Karachi? Dr. Sadaf Dental Care provides modern dental treatments, preventive care, cosmetic dentistry, and family dental services in Karachi.",
    images: ["https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&h=630&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness and Dentist JSON-LD schema
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": "https://drsadafdentalcare.com/#dentist",
        "name": "Dr. Sadaf Dental Care",
        "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&h=630&auto=format&fit=crop",
        "telephone": "+92 317 1288862",
        "priceRange": "$$",
        "url": "https://drsadafdentalcare.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop#10 Zulfiqar Ave, Sector 11-B, North Karachi",
          "addressLocality": "Karachi",
          "addressRegion": "Sindh",
          "postalCode": "75850",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.0016,
          "longitude": 67.0624
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "11:00",
            "closes": "21:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/drsadafdentalcare",
          "https://www.instagram.com/drsadafdentalcare"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://drsadafdentalcare.com/#localbusiness",
        "name": "Dr. Sadaf Dental Care",
        "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&h=630&auto=format&fit=crop",
        "telephone": "+92 317 1288862",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop#10 Zulfiqar Ave, Sector 11-B, North Karachi",
          "addressLocality": "Karachi",
          "addressRegion": "Sindh",
          "postalCode": "75850",
          "addressCountry": "PK"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-text-dark">
        {children}
      </body>
    </html>
  );
}
