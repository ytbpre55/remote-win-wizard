
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Gói Cơ Bản",
      subtitle: "1 máy tính",
      price: "150.000",
      originalPrice: null,
      description: "Phù hợp cho cá nhân, gia đình",
      features: [
        "Cài Windows XP, 7, 8, 8.1, 10, 11",
        "Hỗ trợ từ xa qua internet",
        "Bảo hành 30 ngày",
        "Hỗ trợ kỹ thuật 24/7"
      ],
      isPopular: false,
      quantity: "1 máy"
    },
    {
      title: "Gói Tiết Kiệm",
      subtitle: "2 máy tính",
      price: "140.000",
      originalPrice: "300.000",
      description: "Tiết kiệm 20.000 VNĐ",
      features: [
        "Tất cả tính năng gói cơ bản",
        "Giảm giá cho máy thứ 2",
        "Hỗ trợ đồng thời 2 máy",
        "Ưu tiên hỗ trợ"
      ],
      isPopular: true,
      quantity: "2 máy"
    },
    {
      title: "Gói Gia Đình",
      subtitle: "3-4 máy tính",
      price: "130.000",
      originalPrice: "600.000",
      description: "Tiết kiệm 80.000 VNĐ",
      features: [
        "Tất cả tính năng gói tiết kiệm",
        "Giảm giá đến 20.000/máy",
        "Hỗ trợ nhiều máy cùng lúc",
        "Tư vấn kỹ thuật miễn phí"
      ],
      isPopular: false,
      quantity: "3-4 máy"
    },
    {
      title: "Gói Doanh Nghiệp",
      subtitle: "5+ máy tính",
      price: "Từ 120.000",
      originalPrice: null,
      description: "Giá ưu đãi cho số lượng lớn",
      features: [
        "Giá ưu đãi tốt nhất",
        "Hỗ trợ kỹ thuật ưu tiên",
        "Lập kế hoạch triển khai",
        "Hợp đồng dài hạn"
      ],
      isPopular: false,
      quantity: "5+ máy"
    }
  ];

  const detailedPricing = [
    { service: "Cài Windows cho 1 máy", price: "150.000", unit: "VNĐ/máy", quantity: "1 máy" },
    { service: "Cài Windows cho 2 máy", price: "140.000", unit: "VNĐ/máy", quantity: "2 máy" },
    { service: "Cài Windows từ 3-4 máy", price: "130.000", unit: "VNĐ/máy", quantity: "≥ 3 máy" },
    { service: "Cài Windows từ 5 máy trở lên", price: "120.000", unit: "VNĐ/máy", quantity: "≥ 5 máy" },
    { service: "Cài Windows số lượng lớn từ 10 máy", price: "100.000", unit: "VNĐ/máy", quantity: "≥ 10 máy" }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Bảng Giá Dịch Vụ Cài Win Từ Xa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Giá cả minh bạch, hợp lý với nhiều gói lựa chọn phù hợp với nhu cầu của bạn
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.isPopular ? 'ring-2 ring-blue-500 shadow-lg' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Phổ biến nhất
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-gray-800">{plan.title}</CardTitle>
                <p className="text-gray-600">{plan.subtitle}</p>
                
                <div className="mt-4">
                  <div className="flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">VNĐ</span>
                  </div>
                  {plan.originalPrice && (
                    <p className="text-sm text-gray-500 line-through">
                      Giá gốc: {plan.originalPrice} VNĐ
                    </p>
                  )}
                  <p className="text-sm text-green-600 font-medium">{plan.description}</p>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-800 hover:bg-gray-900'
                  }`}
                  onClick={() => window.open('tel:0356243926')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Liên hệ ngay
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Pricing Table */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Bảng Giá Chi Tiết Dịch Vụ Cài Win Từ Xa
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-blue-50">
                  <th className="px-6 py-4 text-left font-semibold text-gray-800">STT</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-800">Dịch vụ</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-800">Giá</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-800">Số lượng</th>
                </tr>
              </thead>
              <tbody>
                {detailedPricing.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">{index + 1}</td>
                    <td className="px-6 py-4 text-gray-700">{item.service}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-bold text-blue-600">{item.price}</span>
                      <span className="text-gray-600 text-sm ml-1">{item.unit}</span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-blue-600 text-white rounded-xl p-6 max-w-2xl mx-auto">
              <h4 className="text-xl font-bold mb-2">💡 Lưu ý quan trọng</h4>
              <p className="text-blue-100 mb-4">
                Giá trên là giá cho việc cài đặt Windows XP, 7, 8, 8.1, 10, 11 qua mạng internet
              </p>
              <p className="text-lg font-semibold">
                📞 Liên hệ ngay: 0356243926 để được tư vấn và báo giá chi tiết!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
