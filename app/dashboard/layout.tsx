import Footer from "@/components/common/footer";
import DashNav from "./DashNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body >
        <DashNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}