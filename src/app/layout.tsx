import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import LinksContainer from "./components/LinksContainer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

import { portfolioData } from "./data/portfolioData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume",
  description: "Generated by create next app",
};

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  // const portfolioData: PortfolioData = await getPortfolioData();

  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          background: "#1a1a1a",
          // background: 'url("/background2.jpg")',
          margin: "0",
          fontFamily: "Montserrat, sans-serif",
          color: "grey",
          maxWidth: "100vw",
          position: "relative",
        }}
      >
        <Navigation />
        <Main />
        <LinksContainer />
        <Experience portfolioData={portfolioData} />
        <Projects portfolioData={portfolioData} />
        <Certifications portfolioData={portfolioData} />
        <Skills portfolioData={portfolioData} />
        <Contact portfolioData={portfolioData} />
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navigation from "./components/Navigation";
// import Main from "./components/Main";
// import LinksContainer from "./components/LinksContainer";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Certifications from "./components/Certifications";
// import Contact from "./components/Contact";
// import Skills from "./components/Skills";
// import { PortfolioData } from "./data/portfolioData.interface";
// import getPortfolioData from "./libs/getPortfolioData";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Resume",
//   description: "Generated by create next app",
// };

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   // const portfolioData: PortfolioData = await getPortfolioData();

//   return (
//     <html lang="en">
//       <body
//         className={inter.className}
//         style={{
//           background: "#1a1a1a",
//           margin: "0",
//           fontFamily: "Montserrat, sans-serif",
//           color: "grey",
//           maxWidth: "100vw",
//           position: "relative",
//         }}
//       >
//         <Navigation />
//         {children}
//       </body>
//     </html>
//   );
// }
