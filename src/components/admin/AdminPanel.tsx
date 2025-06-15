
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Settings, FileText, DollarSign, Image, BarChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel = ({ onClose }: AdminPanelProps) => {
  const [activeTab, setActiveTab] = useState("general");
  const { toast } = useToast();

  const [siteSettings, setSiteSettings] = useState({
    siteName: "CaiWinOnline.com",
    tagline: "Cài Win Từ Xa Chuyên Nghiệp",
    phone: "0356243926",
    email: "contact@caiwinonline.com",
    address: "Toàn quốc"
  });

  const [seoSettings, setSeoSettings] = useState({
    metaTitle: "Cài Win Online - Dịch Vụ Cài Đặt Windows Từ Xa Chuyên Nghiệp",
    metaDescription: "Dịch vụ cài win online từ xa chuyên nghiệp. Cài Windows 7, 10, 11 nhanh chóng, tiện lợi. Đội ngũ kỹ thuật 24/7. Giá từ 100k/máy. Liên hệ: 0356243926",
    keywords: "cài win online, cài windows từ xa, dịch vụ cài win, cài win 10, cài win 11",
    canonicalUrl: "https://caiwinonline.com"
  });

  const [pricingData, setPricingData] = useState([
    { id: 1, service: "Cài Windows cho 1 máy", price: 150000, quantity: "1 máy" },
    { id: 2, service: "Cài Windows cho 2 máy", price: 140000, quantity: "2 máy" },
    { id: 3, service: "Cài Windows từ 3-4 máy", price: 130000, quantity: "3-4 máy" },
    { id: 4, service: "Cài Windows từ 5+ máy", price: 120000, quantity: "5+ máy" },
    { id: 5, service: "Cài Windows 10+ máy", price: 100000, quantity: "10+ máy" }
  ]);

  const adminTabs = [
    { id: "general", label: "Cài đặt chung", icon: Settings },
    { id: "seo", label: "SEO", icon: BarChart },
    { id: "content", label: "Nội dung", icon: FileText },
    { id: "pricing", label: "Bảng giá", icon: DollarSign },
    { id: "media", label: "Hình ảnh", icon: Image }
  ];

  const handleSave = (section: string) => {
    toast({
      title: "Lưu thành công!",
      description: `Đã cập nhật ${section} thành công.`,
    });
  };

  const handlePricingUpdate = (id: number, field: string, value: string | number) => {
    setPricingData(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: field === 'price' ? Number(value) : value } : item
      )
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Quản Trị Website</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex h-full max-h-[calc(90vh-80px)]">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 border-r p-4 overflow-y-auto">
            <nav className="space-y-2">
              {adminTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === "general" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Thông Tin Website</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Tên Website</label>
                      <Input
                        value={siteSettings.siteName}
                        onChange={(e) => setSiteSettings({...siteSettings, siteName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Slogan</label>
                      <Input
                        value={siteSettings.tagline}
                        onChange={(e) => setSiteSettings({...siteSettings, tagline: e.target.value})}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Số điện thoại</label>
                        <Input
                          value={siteSettings.phone}
                          onChange={(e) => setSiteSettings({...siteSettings, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input
                          value={siteSettings.email}
                          onChange={(e) => setSiteSettings({...siteSettings, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <Button onClick={() => handleSave("thông tin chung")}>
                      Lưu thay đổi
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "seo" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cài Đặt SEO</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Meta Title</label>
                      <Input
                        value={seoSettings.metaTitle}
                        onChange={(e) => setSeoSettings({...seoSettings, metaTitle: e.target.value})}
                      />
                      <p className="text-xs text-gray-500 mt-1">Độ dài khuyến nghị: 50-60 ký tự</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Meta Description</label>
                      <Textarea
                        value={seoSettings.metaDescription}
                        onChange={(e) => setSeoSettings({...seoSettings, metaDescription: e.target.value})}
                        rows={3}
                      />
                      <p className="text-xs text-gray-500 mt-1">Độ dài khuyến nghị: 150-160 ký tự</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Keywords</label>
                      <Input
                        value={seoSettings.keywords}
                        onChange={(e) => setSeoSettings({...seoSettings, keywords: e.target.value})}
                        placeholder="Các từ khóa cách nhau bằng dấu phẩy"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Canonical URL</label>
                      <Input
                        value={seoSettings.canonicalUrl}
                        onChange={(e) => setSeoSettings({...seoSettings, canonicalUrl: e.target.value})}
                      />
                    </div>
                    <Button onClick={() => handleSave("cài đặt SEO")}>
                      Cập nhật SEO
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Google Analytics & Tools</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Google Analytics ID</label>
                      <Input placeholder="G-XXXXXXXXXX" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Google Search Console</label>
                      <Input placeholder="Mã xác minh Search Console" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Facebook Pixel ID</label>
                      <Input placeholder="Facebook Pixel ID" />
                    </div>
                    <Button onClick={() => handleSave("Analytics & Tools")}>
                      Lưu cài đặt
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "pricing" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quản Lý Bảng Giá</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pricingData.map((item) => (
                        <div key={item.id} className="grid md:grid-cols-4 gap-4 p-4 border rounded-lg">
                          <div>
                            <label className="block text-sm font-medium mb-1">Dịch vụ</label>
                            <Input
                              value={item.service}
                              onChange={(e) => handlePricingUpdate(item.id, 'service', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Giá (VNĐ)</label>
                            <Input
                              type="number"
                              value={item.price}
                              onChange={(e) => handlePricingUpdate(item.id, 'price', e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Số lượng</label>
                            <Input
                              value={item.quantity}
                              onChange={(e) => handlePricingUpdate(item.id, 'quantity', e.target.value)}
                            />
                          </div>
                          <div className="flex items-end">
                            <Button variant="destructive" size="sm">
                              Xóa
                            </Button>
                          </div>
                        </div>
                      ))}
                      
                      <div className="flex space-x-4">
                        <Button onClick={() => handleSave("bảng giá")}>
                          Lưu bảng giá
                        </Button>
                        <Button variant="outline">
                          Thêm dịch vụ mới
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "content" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quản Lý Nội Dung</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Tiêu đề Hero Section</label>
                      <Input defaultValue="Dịch Vụ Cài Win Online Từ Xa" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mô tả Hero Section</label>
                      <Textarea 
                        defaultValue="Giải pháp cài đặt Windows chuyên nghiệp, nhanh chóng và tiện lợi ngay tại nhà bạn."
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Giới thiệu dịch vụ</label>
                      <Textarea 
                        defaultValue="Chúng tôi cung cấp dịch vụ cài đặt Windows từ xa chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh nghiệm."
                        rows={4}
                      />
                    </div>
                    <Button onClick={() => handleSave("nội dung")}>
                      Cập nhật nội dung
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "media" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quản Lý Hình Ảnh</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Logo Website</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                          <p className="text-gray-500">Kéo thả hình ảnh vào đây hoặc click để chọn</p>
                          <Button variant="outline" className="mt-2">Chọn file</Button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Hình ảnh Hero Section</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                          <p className="text-gray-500">Kéo thả hình ảnh vào đây hoặc click để chọn</p>
                          <Button variant="outline" className="mt-2">Chọn file</Button>
                        </div>
                      </div>
                      <Button onClick={() => handleSave("hình ảnh")}>
                        Lưu hình ảnh
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
