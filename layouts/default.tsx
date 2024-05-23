import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-4">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://google.com.ar"
          title="Areas Controladas S.A."
        >
          {/* <span className="text-default-600"></span> */}
          <p className="text-primary">Areas Controladas S.A.</p>
        </Link>
      </footer>
    </div>
  );
}
