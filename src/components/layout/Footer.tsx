import { Linkedin, Twitter, Youtube } from 'lucide-react'
import { Logo } from '../ui/Logo'

const footerLinks = {
  about: ['Our Story', 'Leadership', 'Careers', 'News & Media'],
  services: ['Pharmaceutical', 'Clinical Research', 'Innovation', 'Supply Chain'],
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-gray-400">
      <div className="absolute -right-20 top-[-40px] h-72 w-72 rounded-full bg-red-600/10 blur-3xl" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-6">
          <Logo variant="light" size="md" />
          <p className="max-w-sm text-sm text-gray-400">
            ARXA delivers compliant pharmaceutical solutions with science-led global operations and care-driven service.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-gray-400 transition hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 transition hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube" className="text-gray-400 transition hover:text-white">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">About ARXA</h3>
          <ul className="space-y-3 text-sm">
            {footerLinks.about.map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">Services</h3>
          <ul className="space-y-3 text-sm">
            {footerLinks.services.map((item) => (
              <li key={item}>
                <a href="#" className="transition hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>23996 TX-494 Loop, Porter TX 77365</li>
            <li>
              <a href="tel:+18322935569" className="transition hover:text-white">
                (+1 832) 293-5569
              </a>
            </li>
            <li>
              <a href="mailto:contact@arxaglobal.com" className="transition hover:text-white">
                contact@arxaglobal.com
              </a>
            </li>
            <li>
              <a href="https://www.arxaglobal.com" className="transition hover:text-white">
                www.arxaglobal.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-navy-900/90 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-gray-500 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2024 The Ameri-RX Alliance LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <span className="text-white/30">|</span>
            <a href="#" className="transition hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>
        <div className="mx-auto mt-4 flex max-w-7xl gap-2" aria-hidden="true">
          <span className="h-[3px] w-16 rounded-full bg-white/70" />
          <span className="h-[3px] w-10 rounded-full bg-red-500" />
        </div>
      </div>
    </footer>
  )
}
