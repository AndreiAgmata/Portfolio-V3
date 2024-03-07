import "../styles/index.scss";

import localFont from "next/font/local";

const matter = localFont({
  src: [
    {
      path: "../../public/fonts/Matter-Heavy.ttf",
      weight: "800",
    },
    {
      path: "../../public/fonts/Matter-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Matter-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Matter-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Matter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Matter-Light.ttf",
      weight: "300",
    },
  ],
});

export const metadata = {
  title: "Andrei Agmata - Portfolio",
  description: "Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={matter.className}>{children}</body>
    </html>
  );
}
