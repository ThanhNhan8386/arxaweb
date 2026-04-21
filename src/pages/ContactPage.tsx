import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../components/ui/Button'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  company: z.string().min(2, 'Please enter last name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  subject: z.enum(['General', 'Partnership', 'Solutions', 'Careers']).optional(),
  message: z.string().min(10, 'Please enter a message'),
})

type ContactFormSchema = z.infer<typeof contactSchema>

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    setIsSubmitted(true)
    reset()
  }

  return (
    <section className="bg-white py-24">
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
          {isSubmitted ? (
            <div className="mb-6 rounded-3xl bg-red-50 px-6 py-5 text-red-700 shadow-sm">
              Thank you! Your message has been received and our team will follow up soon.
            </div>
          ) : null}

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs text-gray-600">First Name</label>
                <input
                  {...register('name')}
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm text-navy-900 outline-none transition focus:border-red-600"
                />
                {errors.name ? <span className="text-xs text-red-600">{errors.name.message}</span> : null}
              </div>
              <div>
                <label className="mb-2 block text-xs text-gray-600">Last Name</label>
                <input
                  {...register('company')}
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm text-navy-900 outline-none transition focus:border-red-600"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs text-gray-600">Email *</label>
              <input
                type="email"
                {...register('email')}
                className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm text-navy-900 outline-none transition focus:border-red-600"
              />
              {errors.email ? <span className="text-xs text-red-600">{errors.email.message}</span> : null}
            </div>

            <div>
              <label className="mb-2 block text-xs text-gray-600">Leave us a message...</label>
              <textarea
                rows={4}
                {...register('message')}
                className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm text-navy-900 outline-none transition focus:border-red-600"
              />
              {errors.message ? <span className="text-xs text-red-600">{errors.message.message}</span> : null}
            </div>

            <div>
              <Button type="submit" variant="primary" size="md" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
