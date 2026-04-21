import { Calendar } from 'lucide-react'
import { PlaceholderImage } from '../ui/PlaceholderImage'

const newsItems = [
  {
    id: 1,
    date: '1/14/23',
    title: 'The signing ceremony of exclusive distribution agreement in the US market.',
    image: '/news-image-1.jpg',
  },
]

export function CareersSection() {
  return (
    <section className="bg-white py-24" id="news">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-5xl font-bold text-navy-800">Latest News</h2>
        
        <div className="space-y-12">
          {newsItems.map((item) => (
            <article key={item.id} className="grid gap-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-800">{item.title}</h3>
                <a 
                  href="/news/signing-ceremony" 
                  className="inline-block text-purple-600 hover:text-purple-700 transition"
                >
                  Read More
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/news/a5.png" 
                  alt="News Image"
                  className="w-full h-auto"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
