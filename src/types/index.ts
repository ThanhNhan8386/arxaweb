import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href: string
}

export interface StatItem {
  value: string
  label: string
  icon: LucideIcon
}

export interface Solution {
  id: number
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export interface Testimonial {
  id: number
  name: string
  title: string
  company: string
  quote: string
  initials: string
}

export interface ContactFormData {
  name: string
  company: string
  email: string
  phone: string
  subject: 'General' | 'Partnership' | 'Solutions' | 'Careers'
  message: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]
