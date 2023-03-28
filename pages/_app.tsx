import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48">
      <div className="h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 bg-white rounded-2xl dark:text-black lg:col-span-9">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
