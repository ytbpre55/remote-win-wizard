
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";

const Hero = () => {
  const features = [
    "Cài đặt Win 7, 10, 11",
    "Dịch vụ từ xa nhanh chóng",
    "Phần mềm + Windows đầy đủ",
    "Sử dụng vĩnh viễn"
  ];

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Dịch Vụ Cài Win Online 
              <span className="text-blue-600"> Từ Xa Chuyên Nghiệp</span>
            </h1>
            <h2 className="text-xl text-gray-600 mb-8">
              Giải pháp cài đặt Windows 7, 10, 11 từ xa nhanh chóng và tiện lợi 
              ngay tại nhà bạn. Đội ngũ kỹ thuật viên giàu kinh nghiệm sẵn sàng hỗ trợ 24/7.
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Đặt Dịch Vụ Ngay
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                onClick={() => window.open('tel:0356243926')}
              >
                <Phone className="w-4 h-4 mr-2" />
                0356243926
              </Button>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
              <p className="text-sm text-gray-600 mb-2">Liên hệ qua:</p>
              <p className="font-semibold text-gray-800">📞 Số điện thoại/Zalo: 0356243926</p>
            </div>
          </div>

          <div className="lg:text-center">
            {/* Hero Image */}
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Dịch vụ cài đặt Windows từ xa"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Quy Trình Đơn Giản</h3>
                <p className="text-gray-600">Chỉ 3 bước để có Windows mới</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <span className="text-gray-700">Liên hệ qua điện thoại/Zalo</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <span className="text-gray-700">Kết nối qua TeamViewer/UltraView</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <span className="text-gray-700">Hoàn thành cài đặt & thanh toán</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
