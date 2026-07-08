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
import { getCampaigns, getFooter } from "@/lib/strapiPage";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Webmaffia | Creative Digital Agency",
  description:
    "Webmaffia is a full-service creative and digital marketing agency in Mumbai.",
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
      </head>
      <body>
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
      </body>
    </html>
  );
}
