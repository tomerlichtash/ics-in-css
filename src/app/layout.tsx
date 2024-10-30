import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const notoSerif = localFont({
	src: './fonts/NotoSerif.ttf',
	variable: '--font-noto-serif',
	weight: '100 900',
});

const ibmMono = localFont({
	src: './fonts/IBMPlexMono-Regular.ttf',
	variable: '--font-ibm-mono',
	weight: '400',
});

export const metadata: Metadata = {
	title: 'ICS-in-CSS',
	description: 'ICS Flags in the Browser',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={`${notoSerif.variable} ${ibmMono.variable}`}>
				<ThemeProvider>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
