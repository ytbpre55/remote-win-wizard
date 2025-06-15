
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Settings, FileText, DollarSign, Image, BarChart, Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface AdminPanelProps {
  onClose: () => void;
}

interface PricingItem {
  id: number;
  service: string;
  price: number;
  quantity: string;
}

const AdminPanel = ({ onClose }: AdminPanelProps) => {
  const [activeTab, setActiveTab] = useState("general");
  const { toast } = useToast();
  const [editingId, setEditingId] = useState<number | null>(null);

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
    canonicalUrl: "https://caiwinonline.com",
    googleAnalyticsId: "",
    googleConsoleCode: "",
    facebookPixelId: ""
  });

  const [pricingData, setPricingData] = useState<PricingItem[]>([
    { id: 1, service: "Cài Windows cho 1 máy", price: 150000, quantity: "1 máy" },
    { id: 2, service: "Cài Windows cho 2 máy", price: 140000, quantity: "2 máy" },
    { id: 3, service: "Cài Windows từ 3-4 máy", price: 130000, quantity: "3-4 máy" },
    { id: 4, service: "Cài Windows từ 5+ máy", price: 120000, quantity: "5+ máy" },
    { id: 5, service: "Cài Windows 10+ máy", price: 100000, quantity: "10+ máy" }
  ]);

  const [newPricing, setNewPricing] = useState<Omit<PricingItem, 'id'>>({
    service: "",
    price: 0,
    quantity: ""
  });

  const [contentSettings, setContentSettings] = useState({
    heroTitle: "Dịch Vụ Cài Win Online Từ Xa",
    heroDescription: "Giải pháp cài đặt Windows chuyên nghiệp, nhanh chóng và tiện lợi ngay tại nhà bạn.",
    serviceIntro: "Chúng tôi cung cấp dịch vụ cài đặt Windows từ xa chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh nghiệm."
  });

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

  const handlePricingUpdate = (id: number, field: keyof PricingItem, value: string | number) => {
    setPricingData(prev => 
      prev.map(item => 
        item.id === id ? { ...item, [field]: field === 'price' ? Number(value) : value } : item
      )
    );
  };

  const handleAddPricing = () => {
    if (!newPricing.service || !newPricing.quantity || newPricing.price <= 0) {
      toast({
        title: "Lỗi!",
        description: "Vui lòng điền đầy đủ thông tin.",
        variant: "destructive"
      });
      return;
    }

    const newId = Math.max(...pricingData.map(p => p.id), 0) + 1;
    setPricingData(prev => [...prev, { ...newPricing, id: newId }]);
    setNewPricing({ service: "", price: 0, quantity: "" });
    
    toast({
      title: "Thêm thành công!",
      description: "Đã thêm dịch vụ mới vào bảng giá.",
    });
  };

  const handleDeletePricing = (id: number) => {
    setPricingData(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Xóa thành công!",
      description: "Đã xóa dịch vụ khỏi bảng giá.",
    });
  };

  const handleEditPricing = (id: number) => {
    setEditingId(editingId === id ? null : id);
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
                      <Input 
                        placeholder="G-XXXXXXXXXX" 
                        value={seoSettings.googleAnalyticsId}
                        onChange={(e) => setSeoSettings({...seoSettings, googleAnalyticsId: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Google Search Console</label>
                      <Input 
                        placeholder="Mã xác minh Search Console" 
                        value={seoSettings.googleConsoleCode}
                        onChange={(e) => setSeoSettings({...seoSettings, googleConsoleCode: e.target.value})}
                      />
                      <p className="text-xs text-gray-500 mt-1">Nhập mã meta tag xác minh từ Google Search Console</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Facebook Pixel ID</label>
                      <Input 
                        placeholder="Facebook Pixel ID" 
                        value={seoSettings.facebookPixelId}
                        onChange={(e) => setSeoSettings({...seoSettings, facebookPixelId: e.target.value})}
                      />
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
                    <CardTitle className="flex items-center justify-between">
                      Quản Lý Bảng Giá
                      <Button onClick={handleAddPricing} size="sm">
                        <Plus className="w-4 h-4 mr-1" />
                        Thêm dịch vụ
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Form thêm dịch vụ mới */}
                    <div className="mb-6 p-4 border rounded-lg bg-gray-50">
                      <h4 className="font-medium mb-3">Thêm dịch vụ mới</h4>
                      <div className="grid md:grid-cols-4 gap-4">
                        <Input
                          placeholder="Tên dịch vụ"
                          value={newPricing.service}
                          onChange={(e) => setNewPricing({...newPricing, service: e.target.value})}
                        />
                        <Input
                          type="number"
                          placeholder="Giá (VNĐ)"
                          value={newPricing.price || ""}
                          onChange={(e) => setNewPricing({...newPricing, price: Number(e.target.value)})}
                        />
                        <Input
                          placeholder="Số lượng"
                          value={newPricing.quantity}
                          onChange={(e) => setNewPricing({...newPricing, quantity: e.target.value})}
                        />
                        <Button onClick={handleAddPricing}>
                          <Plus className="w-4 h-4 mr-1" />
                          Thêm
                        </Button>
                      </div>
                    </div>

                    {/* Bảng dịch vụ */}
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Dịch vụ</TableHead>
                          <TableHead>Giá (VNĐ)</TableHead>
                          <TableHead>Số lượng</TableHead>
                          <TableHead>Thao tác</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pricingData.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>
                              {editingId === item.id ? (
                                <Input
                                  value={item.service}
                                  onChange={(e) => handlePricingUpdate(item.id, 'service', e.target.value)}
                                />
                              ) : (
                                item.service
                              )}
                            </TableCell>
                            <TableCell>
                              {editingId === item.id ? (
                                <Input
                                  type="number"
                                  value={item.price}
                                  onChange={(e) => handlePricingUpdate(item.id, 'price', e.target.value)}
                                />
                              ) : (
                                item.price.toLocaleString('vi-VN')
                              )}
                            </TableCell>
                            <TableCell>
                              {editingId === item.id ? (
                                <Input
                                  value={item.quantity}
                                  onChange={(e) => handlePricingUpdate(item.id, 'quantity', e.target.value)}
                                />
                              ) : (
                                item.quantity
                              )}
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button
                                  variant={editingId === item.id ? "default" : "outline"}
                                  size="sm"
                                  onClick={() => handleEditPricing(item.id)}
                                >
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => handleDeletePricing(item.id)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    
                    <div className="mt-4">
                      <Button onClick={() => handleSave("bảng giá")}>
                        Lưu bảng giá
                      </Button>
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
                      <Input 
                        value={contentSettings.heroTitle}
                        onChange={(e) => setContentSettings({...contentSettings, heroTitle: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mô tả Hero Section</label>
                      <Textarea 
                        value={contentSettings.heroDescription}
                        onChange={(e) => setContentSettings({...contentSettings, heroDescription: e.target.value})}
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Giới thiệu dịch vụ</label>
                      <Textarea 
                        value={contentSettings.serviceIntro}
                        onChange={(e) => setContentSettings({...contentSettings, serviceIntro: e.target.value})}
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
