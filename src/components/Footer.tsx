
import { Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    services: [
      "Cài Windows 7",
      "Cài Windows 10", 
      "Cài Windows 11",
      "Sửa chữa máy tính từ xa",
      "Cài đặt phần mềm"
    ],
    support: [
      "Hướng dẫn sử dụng",
      "Câu hỏi thường gặp",
      "Chính sách bảo hành",
      "Hỗ trợ kỹ thuật",
      "Liên hệ"
    ],
    company: [
      "Giới thiệu",
      "Quy trình làm việc", 
      "Đội ngũ kỹ thuật",
      "Chính sách giá",
      "Đánh giá khách hàng"
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">CWO</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">CaiWinOnline.com</h3>
                <p className="text-gray-400 text-sm">Cài Win Từ Xa Chuyên Nghiệp</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Dịch vụ cài đặt Windows từ xa hàng đầu Việt Nam. Chúng tôi cam kết mang đến 
              cho khách hàng những giải pháp công nghệ tốt nhất với chi phí hợp lý.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400 w-5 h-5" />
                <div>
                  <p className="font-semibold">Hotline: 0356243926</p>
                  <p className="text-gray-400 text-sm">Hỗ trợ 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400 w-5 h-5" />
                <div>
                  <p className="font-semibold">contact@caiwinonline.com</p>
                  <p className="text-gray-400 text-sm">Email hỗ trợ</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="text-blue-400 w-5 h-5" />
                <div>
                  <p className="font-semibold">www.caiwinonline.com</p>
                  <p className="text-gray-400 text-sm">Website chính thức</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Dịch Vụ</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Hỗ Trợ</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Công Ty</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-blue-400">🔥 Ưu đãi đặc biệt</h5>
              <p className="text-gray-300 text-sm mb-2">
                Giảm 10% cho khách hàng đặt từ 3 máy trở lên
              </p>
              <p className="text-blue-400 font-semibold text-sm">
                Gọi ngay: 0356243926
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© {currentYear} CaiWinOnline.com. Tất cả quyền được bảo lưu.</p>
              <p className="mt-1">
                Được phát triển bởi <span className="text-blue-400">CaiWinOnline Team</span>
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="bg-gray-800 inline-block px-6 py-3 rounded-lg">
              <p className="text-gray-300 text-sm">
                <span className="text-blue-400 font-semibold">📞 Liên hệ 24/7:</span> 
                <span className="ml-2 font-semibold">0356243926</span>
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Dịch vụ cài win từ xa chuyên nghiệp - Nhanh chóng - Uy tín
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
