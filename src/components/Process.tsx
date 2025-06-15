
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Download, Settings, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Process = () => {
  const processSteps = [
    {
      step: 1,
      icon: Monitor,
      title: "Kết nối từ xa",
      description: "Sử dụng phần mềm UltraView hoặc TeamViewer để kết nối với máy tính của bạn",
      details: "Chúng tôi sẽ hướng dẫn bạn tải và cài đặt phần mềm kết nối từ xa"
    },
    {
      step: 2,
      icon: Settings,
      title: "Kiểm tra và chuẩn bị",
      description: "Tiến hành kiểm tra lỗi (nếu có) và chuẩn bị cho quá trình cài đặt",
      details: "Backup dữ liệu quan trọng và kiểm tra tương thích phần cứng"
    },
    {
      step: 3,
      icon: Download,
      title: "Cài đặt hệ điều hành",
      description: "Tiến hành cài đặt và nâng cấp Windows theo yêu cầu của bạn",
      details: "Cài đặt Windows, driver và các phần mềm cần thiết"
    },
    {
      step: 4,
      icon: CheckCircle,
      title: "Hoàn thành và bàn giao",
      description: "Kiểm tra hoạt động và bàn giao hệ thống hoàn chỉnh",
      details: "Hướng dẫn sử dụng và hỗ trợ kỹ thuật sau cài đặt"
    }
  ];

  const scenarios = [
    {
      title: "Trường hợp 1: Máy tính vẫn hoạt động bình thường",
      description: "Chúng tôi có thể trực tiếp kết nối và thực hiện cài đặt ngay lập tức",
      requirements: ["Kết nối internet ổn định", "Cài đặt phần mềm kết nối từ xa"]
    },
    {
      title: "Trường hợp 2: Máy tính gặp sự cố, không vào được Windows",
      description: "Cần chuẩn bị thêm một số công cụ để hỗ trợ quá trình cài đặt",
      requirements: [
        "USB có dung lượng tối thiểu 2-8GB",
        "Máy tính khác có kết nối mạng",
        "Phần mềm UltraView hoặc TeamViewer trên máy phụ"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Quy Trình Thực Hiện Cài Win Từ Xa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quy trình cài đặt Windows từ xa qua mạng internet nhanh chóng tại CaiWinOnline.com
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 relative">
              <CardHeader>
                <div className="mx-auto bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 font-bold text-xl">
                  {step.step}
                </div>
                <div className="mx-auto bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <step.icon className="text-blue-600 w-8 h-8" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <p className="text-sm text-gray-500">{step.details}</p>
              </CardContent>
              
              {/* Connection line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-blue-300"></div>
              )}
            </Card>
          ))}
        </div>

        {/* Scenarios */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {scenarios.map((scenario, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {scenario.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{scenario.description}</p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">Yêu cầu cần thiết:</p>
                  <ul className="space-y-1">
                    {scenario.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🚀 Đặt Dịch Vụ Nhanh</h3>
            <p className="text-blue-100 mb-6">
              Gọi ngay để được tư vấn và đặt lịch cài đặt trong ngày
            </p>
            <div className="space-y-4">
              <p className="text-xl font-bold">📞 Số điện thoại/Zalo: 0356243926</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                  onClick={() => window.open('tel:0356243926')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Gọi ngay
                </Button>
                <Button 
                  className="bg-green-500 text-white hover:bg-green-600 font-semibold"
                  onClick={() => window.open('https://zalo.me/0356243926')}
                >
                  Chat Zalo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
