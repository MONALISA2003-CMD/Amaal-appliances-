import './globals.css'; import type {Metadata} from 'next'; import {Header} from '@/components/layout/Header';
export const metadata:Metadata={title:'Amaal | Appliances & Speakers',description:'Amaal small appliances and consumer audio catalogue for Uganda.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}</body></html>}
