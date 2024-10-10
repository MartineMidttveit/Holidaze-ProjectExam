import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  )
}
