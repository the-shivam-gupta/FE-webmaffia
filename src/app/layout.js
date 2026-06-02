import { Albert_Sans } from "next/font/google";
import "@/scss/main.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeInit from "@/components/ThemeInit";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Webmaffia | Creative Digital Agency",
  description:
    "Webmaffia is a full-service creative and digital marketing agency in Mumbai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={albertSans.variable} suppressHydrationWarning>
      <body>
        <ThemeInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
