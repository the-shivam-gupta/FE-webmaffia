import { Albert_Sans } from "next/font/google";
import "./globals.css";
import "@/public/assets/css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeInit from "./components/ThemeInit";
import "../public/assets/scss/lib/slick.scss";
import "@/public/assets/css/swiper-bundle.min.css";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  // weight: ["300", "400", "500", "600", "700", "800"],
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
