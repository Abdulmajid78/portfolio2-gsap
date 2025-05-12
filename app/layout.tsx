import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import {Footer} from "@/components/footer"
import {DynamicBackground} from "@/components/dynamic-background"
import {ScrollProgress} from "@/components/scroll-progress"
import type React from "react"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: 'APortfolio - Professional Web Developer & Designer',
    description:
        'Professional portfolio showcasing creative work, projects, and expertise in web development, design, and digital solutions. View my latest work and get in touch for collaborations.',
    keywords: [
        "front-end developer Uzbekistan",
        "frontend developer Tashkent",
        "web developer Uzbekistan",
        "React developer Uzbekistan",
        "freelance front-end developer",
        "JavaScript developer Uzbekistan",
        "HTML CSS developer",
        "responsive web design Uzbekistan",
        "UI UX developer Uzbekistan",
        "mobile-first design expert"
    ],
    authors: [{name: 'Abdumajid Masikhullaev'}],
    metadataBase: new URL('https://abduma.uz'),
    openGraph: {
        type: 'website',
        url: 'https://abduma.uz/',
        title: 'Abdumajid Portfolio - Professional Web Developer & Designer',
        description:
            'Professional portfolio showcasing creative work, projects, and expertise in web development, design, and digital solutions.',
        images: ['/og-image.jpg'],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@abduma',
        title: 'APortfolio - Professional Web Developer & Designer',
        description:
            'Professional portfolio showcasing creative work, projects, and expertise in web development, design, and digital solutions.',
        images: ['/og-image.jpg'],
    },
    icons: {
        icon: '/fav.png',
        apple: '/fav.png',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://abduma.uz/',
    },
}


export default function RootLayout({children,}: { children: React.ReactNode }) {

    return (
        <html lang="en" className="scroll-smooth">
        <head>
            {/* Cookiebot */}
            <script
                id="Cookiebot"
                src="https://consent.cookiebot.com/uc.js"
                data-cbid="4733fff5-a948-4c9b-903e-a5373dc2034b"
                type="text/javascript"
                async
            ></script>

            {/* Google Analytics 4 */}
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-L4WL1L4D9F"
            ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L4WL1L4D9F');
            `,
                }}
            />
        </head>
        <body className={`${inter.className} text-white antialiased`}>
        <ScrollProgress/>
        <DynamicBackground/>
        <Navigation/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    )
}


import './globals.css'
import {Navigation} from "@/components/navigation";