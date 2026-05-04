import type { Metadata } from "next";
import { Inter, Poppins, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: {
    default: "Chasing a Cure Parkinson's Foundation",
    template: "%s | Chasing a Cure Parkinson's Foundation",
  },
  description:
    "Volunteer-run foundation funding Parkinson's research through the Michael J. Fox Foundation. Based in Fishers, Indiana.",
  keywords:
    "Parkinson's disease, Parkinson's research, cure Parkinson's, donate Parkinson's, Chasing a Cure Foundation, Michael J. Fox Foundation, Team Fox, Fishers Indiana",
  metadataBase: new URL("https://chasingacurepd.org"),
  openGraph: {
    title: "Chasing a Cure Parkinson's Foundation",
    description:
      "Volunteer-run. No salaries. Funds raised benefit The Michael J. Fox Foundation for Parkinson's Research.",
    url: "https://chasingacurepd.org",
    siteName: "Chasing a Cure Parkinson's Foundation",
    type: "website",
    locale: "en_US",
    images: [{ url: "/photos/wendy-portrait.png", width: 1200, height: 630, alt: "Chasing a Cure Parkinson's Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chasing a Cure Parkinson's Foundation",
    description:
      "Volunteer-run. No salaries. Funds raised benefit The Michael J. Fox Foundation for Parkinson's Research.",
    images: ["/photos/wendy-portrait.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NonprofitOrganization",
              name: "Chasing a Cure Parkinson's Foundation",
              alternateName: "Chasing a Cure PD",
              url: "https://chasingacurepd.org",
              logo: "https://chasingacurepd.org/logo.png",
              description:
                "Volunteer-run foundation funding Parkinson's research through the Michael J. Fox Foundation and Team Fox. Based in Fishers, Indiana.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fishers",
                addressRegion: "IN",
                addressCountry: "US",
              },
              email: "wendy@chasingacurepd.org",
              sameAs: ["https://www.michaeljfox.org"],
            }),
          }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
