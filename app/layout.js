import Navbar from './components/navbar'
import '../style/globals.css'

export const metadata = {
  title: 'Isabelle Ibrahimsson',
  description: 'My',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
