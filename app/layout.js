import { Open_Sans } from 'next/font/google'
 
const OpenSansFont = Open_Sans({
  subsets: ['latin'],
})
export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={OpenSansFont.className}>
      <body>{children}</body>
    </html>
  )
}