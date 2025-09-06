import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Horror Layout",
  icons: {
    icon: "/anabelle.jpg",
  },
};
const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
