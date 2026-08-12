import Script from "next/script";
import { Albert_Sans } from "next/font/google";
import "@/scss/main.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeInit from "@/components/ThemeInit";
import KlaviyoScript from "@/components/KlaviyoScript";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { getCampaigns, getFooter } from "@/lib/strapiPage";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Webmaffia | Creative Digital Agency",
  description:
    "Webmaffia is a full-service creative and digital marketing agency in Mumbai.",
  verification: {
    google: "VX6Z1r6uKqRzCYCmofyP19bkg4LVX_AtUPEvDqNYM5M",
  },
  icons: {
    icon: "/assets/images/fav.jpg",
    shortcut: "/assets/images/fav.jpg",
    apple: "/assets/images/fav.jpg",
  },
};

export default async function RootLayout({ children }) {
  const footerData = await getFooter();

  let campaignSlugs = [];
  try {
    const campaigns = await getCampaigns();
    campaignSlugs = campaigns.map((campaign) => campaign.slug);
  } catch (error) {
    console.error("Failed to fetch campaigns for footer:", error);
  }

  return (
    <html lang="en" className={albertSans.variable} suppressHydrationWarning>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TC56DRFT');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TC56DRFT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeInit />
        <Header />
        {children}
        <Footer footerData={footerData} campaignSlugs={campaignSlugs} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T2G85GJLPP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T2G85GJLPP');
          `}
        </Script>
        <KlaviyoScript />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
