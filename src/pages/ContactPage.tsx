import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../components/ui/Button'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  company: z.string().min(2, 'Please enter your company'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter your phone number'),
  subject: z.enum(['General', 'Partnership', 'Solutions', 'Careers']),
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
      phone: '',
      subject: 'General',
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
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-8 rounded-3xl bg-navy-800 px-8 py-10 text-white shadow-2xl sm:px-12">
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Get in touch with ARXA.</h1>
            <p className="mt-6 max-w-2xl text-base text-gray-300">
              Share your project details and our team will connect with you to explore partnership, research, or supply chain support.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-navy-800">Contact Form</h2>
            <p className="mt-2 text-sm text-gray-600">Fill out the form and we’ll respond within one business day.</p>

            {isSubmitted ? (
              <div className="mt-8 rounded-3xl bg-red-50 px-6 py-5 text-red-700 shadow-sm">
                Thank you! Your message has been received and our team will follow up soon.
              </div>
            ) : null}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                  Name
                  <input
                    {...register('name')}
                    className="rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  />
                  {errors.name ? <span className="text-sm text-red-600">{errors.name.message}</span> : null}
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                  Company
                  <input
                    {...register('company')}
                    className="rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  />
                  {errors.company ? <span className="text-sm text-red-600">{errors.company.message}</span> : null}
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                  Email
                  <input
                    type="email"
                    {...register('email')}
                    className="rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  />
                  {errors.email ? <span className="text-sm text-red-600">{errors.email.message}</span> : null}
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                  Phone
                  <input
                    type="tel"
                    {...register('phone')}
                    className="rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  />
                  {errors.phone ? <span className="text-sm text-red-600">{errors.phone.message}</span> : null}
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                Subject
                <select
                  {...register('subject')}
                  className="rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                >
                  <option value="General">General</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Solutions">Solutions</option>
                  <option value="Careers">Careers</option>
                </select>
                {errors.subject ? <span className="text-sm text-red-600">{errors.subject.message}</span> : null}
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
                Message
                <textarea
                  rows={5}
                  {...register('message')}
                  className="rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                />
                {errors.message ? <span className="text-sm text-red-600">{errors.message.message}</span> : null}
              </label>

              <div className="flex justify-end">
                <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="space-y-8">
          <PlaceholderImage label="Office Location" aspectRatio="4/3" theme="light" />
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-navy-800">Contact Details</h2>
            <p className="mt-4 text-sm text-gray-600">23996 TX-494 Loop, Porter TX 77365</p>
            <p className="mt-2 text-sm text-gray-600">Phone: (+1 832) 293-5569</p>
            <p className="mt-2 text-sm text-gray-600">Email: ann.nguyen@arxaglobal.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
