import StoreHeader from "@/components/layout/store/Header";
import StoreFooter from "@/components/layout/store/Footer";

import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

      <StoreHeader />
      {children}
      <StoreFooter />
    </>
  );
}
