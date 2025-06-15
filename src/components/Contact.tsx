import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Yêu cầu tư vấn dịch vụ cài Win - ${formData.name}`;
    const body = `
Họ và tên: ${formData.name}
Số điện thoại: ${formData.phone}
Email: ${formData.email}
Dịch vụ quan tâm: ${formData.service}

Tin nhắn:
${formData.message}

---
Email này được gửi từ form liên hệ trên website CaiWinOnline.com
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:chauminhtuit@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: "Đang mở ứng dụng email...",
      description: "Vui lòng gửi email từ ứng dụng email của bạn để hoàn tất yêu cầu.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Số điện thoại/Zalo",
      value: "0356243926",
      action: () => window.open('tel:0356243926')
    },
    {
      icon: Mail,
      title: "Email",
      value: "chauminhtuit@gmail.com",
      action: () => window.open('mailto:chauminhtuit@gmail.com')
    },
    {
      icon: Clock,
      title: "Thời gian làm việc",
      value: "24/7 - Hỗ trợ mọi lúc",
      action: null
    },
    {
      icon: MapPin,
      title: "Phục vụ",
      value: "Toàn quốc",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sẵn sàng hỗ trợ bạn 24/7. Liên hệ ngay để được tư vấn miễn phí về dịch vụ cài win từ xa
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  Thông Tin Liên Hệ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <info.icon className="text-blue-600 w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                      <p 
                        className={`text-gray-600 ${info.action ? 'cursor-pointer hover:text-blue-600' : ''}`}
                        onClick={info.action || undefined}
                      >
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">🚀 Liên hệ nhanh</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Gọi ngay để được tư vấn và báo giá chi tiết
                  </p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open('tel:0356243926')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Gọi ngay: 0356243926
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  Gửi Yêu Cầu Tư Vấn
                </CardTitle>
                <p className="text-gray-600">
                  Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Họ và tên *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nhập họ tên của bạn"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Số điện thoại *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Nhập số điện thoại"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Nhập địa chỉ email"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dịch vụ quan tâm
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Chọn dịch vụ</option>
                        <option value="1-may">Cài win cho 1 máy</option>
                        <option value="2-may">Cài win cho 2 máy</option>
                        <option value="3-4-may">Cài win cho 3-4 máy</option>
                        <option value="5-may-tro-len">Cài win cho 5+ máy</option>
                        <option value="doanh-nghiep">Gói doanh nghiệp</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tin nhắn
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mô tả chi tiết về yêu cầu của bạn..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    Gửi Email Tư Vấn
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">
                    ✅ Cam kết chất lượng dịch vụ
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Phản hồi trong vòng 30 phút</li>
                    <li>• Tư vấn miễn phí qua điện thoại</li>
                    <li>• Báo giá chi tiết và minh bạch</li>
                    <li>• Hỗ trợ kỹ thuật 24/7</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
