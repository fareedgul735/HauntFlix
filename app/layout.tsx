import Footer from "@/components/Footer"
import Header from "@/components/Header"

import "./styles/global.css"

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout