import { useState } from 'react'
import { Button } from '../ui/Button'

export function CtaBannerSection() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ firstName: '', lastName: '', email: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-600">CONTACT US</h2>
          <h1 className="mb-8 text-4xl font-bold text-navy-800">Let's Work Together</h1>
          
          <div className="space-y-6 text-navy-800">
            <div>
              <h3 className="mb-2 font-bold">AMERI-RX ALLIANCE</h3>
              <p className="text-sm">23896 TX-494 Loop, Porter TX 77365</p>
              <a href="mailto:contact@arxaglobal.com" className="text-sm text-blue-600 hover:underline">
                contact@arxaglobal.com
              </a>
              <p className="text-sm">Tel: +1-832-919-6868</p>
            </div>

            <div>
              <h3 className="mb-2 font-bold">Opening Hours</h3>
              <p className="text-sm">Monday - Friday&nbsp;&nbsp;&nbsp;&nbsp;10:00 - 18:00</p>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://www.linkedin.com" className="text-navy-800 hover:text-red-600">
                <span className="text-xl">in</span>
              </a>
              <a href="https://www.facebook.com" className="text-navy-800 hover:text-red-600">
                <span className="text-xl">f</span>
              </a>
              <a href="https://twitter.com" className="text-navy-800 hover:text-red-600">
                <span className="text-xl">𝕏</span>
              </a>
            </div>
          </div>
        </div>

        <div>
          {isSubmitted && (
            <div className="mb-6 rounded-lg bg-green-50 px-4 py-3 text-green-700">
              Thank you! We'll get back to you soon.
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs text-gray-600">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm text-navy-900 outline-none transition focus:border-red-600"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs text-gray-600">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm text-navy-900 outline-none transition focus:border-red-600"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs text-gray-600">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm text-navy-900 outline-none transition focus:border-red-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-gray-600">Leave us a message...</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm text-navy-900 outline-none transition focus:border-red-600"
              />
            </div>

            <div>
              <Button type="submit" variant="primary" size="md">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
