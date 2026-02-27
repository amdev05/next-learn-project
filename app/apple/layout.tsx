import { Metadata } from "next";
import { Navbar } from "./_components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Apple",
    template: "%s - Apple",
  },
  description: "Apple web page",
};

export default function AppleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Navbar />

      {children}
    </div>
  );
}
