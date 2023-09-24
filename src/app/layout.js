import  './styles/globals.css'
export const metadata = {
  title: 'Traveli',
  description: 'A place for digital nomads',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
