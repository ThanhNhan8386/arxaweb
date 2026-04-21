import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { ScrollToTop } from './components/ScrollToTop'

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })))
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })))
const AboutDetailsPage = lazy(() => import('./pages/AboutDetailsPage').then((module) => ({ default: module.AboutDetailsPage })))
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })))
const NewsPage = lazy(() => import('./pages/NewsPage').then((module) => ({ default: module.NewsPage })))
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage').then((module) => ({ default: module.NewsDetailPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })))

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div className="min-h-[80vh] bg-navy-800 text-center text-white">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/details" element={<AboutDetailsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/signing-ceremony" element={<NewsDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
