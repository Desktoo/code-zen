import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}