import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "The Nestling Network",
  description:
    "Nestling network provide solutions to help you drive significantly more sales, acquire engaging customers and build a stronger community. We are not your neighborhood influencer marketing agency! We understand how brands are built in the gaming industry and we help you replicate the same.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://www.thenestlingnetwork.com/" />
      </Head>
      <body>
        <Navbar />
        <main className="flex flex-col justify-center items-center w-full mt-[100px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
