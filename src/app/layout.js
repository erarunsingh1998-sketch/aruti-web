import "./globals.scss";
import BrightNessModez from "@/components/layout/BrightnessMode";



export const metadata = {
  title: "Aruti AI",
  description: "Stealth. Smart. Speedy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` h-full antialiased w-full`}>
      <body className="w-full min-h-full bg-slate-200 dark:bg-slate-950 transition-colors duration-300">
        {children}
        <BrightNessModez />
      </body>
    </html>
  );
}
