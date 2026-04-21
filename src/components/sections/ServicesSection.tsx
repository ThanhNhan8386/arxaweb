import { Truck, Lightbulb, Handshake } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'

const services = [
  {
    id: 1,
    icon: Truck,
    title: 'Phân bổ',
    description: 'Chúng tôi chuyên phân phối dược phẩm, thực phẩm chức năng và các sản phẩm chăm sóc sức khỏe chất lượng cao.',
  },
  {
    id: 2,
    icon: Lightbulb,
    title: 'Dịch vụ tư vấn',
    description: 'Chúng tôi cung cấp các giải pháp nhằm nâng cao quy trình và thủ tục cho các nhà cung cấp nước ngoài, đảm bảo sản phẩm đáp ứng các tiêu chuẩn của FDA. Trọng tâm của chúng tôi là tạo điều kiện thuận lợi cho việc tiếp cận thị trường quốc tế, đặc biệt là tại Hoa Kỳ.',
  },
  {
    id: 3,
    icon: Handshake,
    title: 'Quản lý đầu tư',
    description: 'Chúng tôi đóng vai trò là cầu nối giữa các nhà đầu tư, nhà sản xuất và người tiêu dùng trong lĩnh vực y tế và chăm sóc sức khỏe.',
  },
]

export function ServicesSection() {
  return (
    <section className="bg-white py-24" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">DỊCH VỤ</h2>
          <h3 className="mb-16 text-4xl font-bold text-navy-800">Đưa doanh nghiệp của bạn lên tầm cao mới</h3>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.id} className="text-center">
                <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-16 w-16 text-blue-600" aria-hidden="true" />
                </div>
                <h4 className="mb-4 text-xl font-bold text-navy-800">{service.title}</h4>
                <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
