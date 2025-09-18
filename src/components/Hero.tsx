
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
            <h2 className="text-xl text-gray-600 mb-6">
              Giải pháp cài đặt Windows 7, 10, 11 từ xa nhanh chóng và tiện lợi 
              ngay tại nhà bạn. Đội ngũ kỹ thuật viên giàu kinh nghiệm sẵn sàng hỗ trợ 24/7.
            </h2>

            {/* Sticky Call to Action Button */}
            <div className="sticky top-4 z-50 mb-8">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold shadow-2xl border-2 border-red-400 animate-pulse hover:animate-none transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('tel:0854289499')}
              >
                <Phone className="w-6 h-6 mr-3" />
                🔥 GỌI NGAY / CHAT ZALO: 0854289499
              </Button>
            </div>

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
                onClick={() => window.open('tel:0854289499')}
              >
                <Phone className="w-4 h-4 mr-2" />
                0854289499
              </Button>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
              <p className="text-sm text-gray-600 mb-2">Liên hệ qua:</p>
              <p className="font-semibold text-gray-800">📞 Số điện thoại/Zalo: 0854289499</p>
            </div>
          </div>

          <div className="lg:text-center">
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
