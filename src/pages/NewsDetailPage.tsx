import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'

export function NewsDetailPage() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Button variant="ghost" size="sm" href="/news" icon={ArrowLeft} iconPosition="left">
          Back
        </Button>

        <article className="mt-8 space-y-8">
          <div>
            <p className="text-sm text-gray-500">Ann Truong Nguyen</p>
            <p className="text-sm text-gray-500">1/14/23</p>
          </div>

          <h1 className="text-4xl font-bold text-navy-800">
            The signing ceremony of exclusive distribution agreement in the US market.
          </h1>

          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="/news/a5.png" 
                alt="LiveSpo Partnership Ceremony"
                className="w-full h-auto"
              />
            </div>

            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600">
                LÊ KÝ KẾT HỢP ĐỒNG HỢP TÁC PHÁT TRIỂN<br />
                PHÂN PHỐI ĐỘC QUYỀN CÁC SẢN PHẨM LIVESPO<br />
                TẠI THỊ TRƯỜNG MỸ
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <img 
                src="/news/a6.png" 
                alt="Team Photo"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="font-semibold text-navy-800">Dear valued partners,</p>

            <p>
              We are thrilled to announce the signing of an exclusive pharmaceutical distribution agreement between LiveSpo Pharma LTD and Ameri-Rx Alliance LLC in the United States market. The contract was signed on January 12th, 2023 in Hanoi, Vietnam and will take effect immediately. This strategic alliance will allow us to bring a wider range of high-quality pharmaceutical products to healthcare providers and patients across the country.
            </p>

            <p>
              The LiveSpo probiotic products use the "LIQUID - MULTI-STRAIN - HIGH CONCENTRATION" technology to have a fast and clear effect, and have been scientifically and clinically proven and tested to international standards. LiveSpo products have been sold in over 20 countries worldwide.
            </p>

            <p>
              Both companies are dedicated to improving public health and providing access to the latest medical advancements. Our partnership will bring together the strengths of two leading organizations to better serve the needs of healthcare professionals and their patients. We look forward to a successful and productive partnership and are confident that this collaboration will lead to even greater success for both companies in the years to come.
            </p>

            <p>Thank you for your continued support and partnership.</p>

            <p>
              Sincerely,<br />
              Your ARXA Team.
            </p>

            <p className="text-sm text-purple-600">
              #livespoxameririxalliancellc #amerirxalliance
            </p>

            <p className="text-sm italic text-gray-500">
              Photo credit: LiveSpo Pharma LTD
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
