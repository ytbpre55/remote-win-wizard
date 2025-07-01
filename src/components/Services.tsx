
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Users, DollarSign, CheckCircle } from "lucide-react";

const Services = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Nhanh chóng và tiện lợi",
      description: "Không cần mang máy đi xa, tiết kiệm thời gian di chuyển"
    },
    {
      icon: Users,
      title: "Dịch vụ chuyên nghiệp",
      description: "Đội ngũ kỹ thuật viên giàu kinh nghiệm, sẵn sàng phục vụ 24/7"
    },
    {
      icon: DollarSign,
      title: "Tiết kiệm chi phí",
      description: "Giá cả hợp lý, nhiều gói ưu đãi cho khách hàng"
    },
    {
      icon: Shield,
      title: "Tính bảo mật cao",
      description: "Đảm bảo an toàn dữ liệu và thông tin cá nhân"
    }
  ];

  const serviceFeatures = [
    "✅ Cài đặt Win 7, 10, 11",
    "✅ Dịch vụ từ xa",
    "✅ Phần mềm + Windows",
    "✅ Thời gian sử dụng vĩnh viễn"
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Tại Sao Chọn Dịch Vụ Của Chúng Tôi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp dịch vụ cài đặt Windows từ xa chuyên nghiệp với nhiều ưu điểm vượt trội
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <benefit.icon className="text-blue-600 w-8 h-8" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                Dịch Vụ Cài Win Online Chuyên Nghiệp
              </h3>
              <div className="space-y-3 mb-6">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg">{feature.split(' ')[0]}</span>
                    <span className="text-gray-700 font-medium">{feature.substring(2)}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <p className="text-sm text-gray-600 mb-1">Liên hệ ngay:</p>
                <p className="text-lg font-bold text-blue-600">📞 0854289499</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🖥️</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Hỗ Trợ Tất Cả Phiên Bản Windows
                </h4>
                <p className="text-gray-600 mb-4">
                  Windows XP, 7, 8, 8.1, 10, 11 theo yêu cầu
                </p>
                <div className="flex justify-center space-x-2">
                  <CheckCircle className="text-green-500 w-5 h-5" />
                  <span className="text-sm text-gray-600">Đảm bảo chất lượng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
