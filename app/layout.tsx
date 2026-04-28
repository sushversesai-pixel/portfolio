import "./globals.css";
import Script from "next/script";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-950 antialiased">
        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-slate-100 to-transparent pointer-events-none" />
          <div className="w-full flex justify-center">
            <div className="w-full max-w-6xl px-6 lg:px-8">
              {children}
            </div>
          </div>
        </div>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5317023537267552"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script id="tryme-widget" strategy="afterInteractive">
          {`
            (function() {
              let script = document.createElement("script");
              script.async = true;
              script.src = "https://www.tryme.co/widgets?token=db708950-1214-42f1-be9c-ee65dd64c23c.js?v=" + new Date().getTime();
              document.body.appendChild(script);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}