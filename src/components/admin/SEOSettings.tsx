
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const SEOSettings = () => {
  const { toast } = useToast();
  const [seoSettings, setSeoSettings] = useState({
    metaTitle: "Cài Win Online - Dịch Vụ Cài Đặt Windows Từ Xa Chuyên Nghiệp",
    metaDescription: "Dịch vụ cài win online từ xa chuyên nghiệp. Cài Windows 7, 10, 11 nhanh chóng, tiện lợi. Đội ngũ kỹ thuật 24/7. Giá từ 100k/máy. Liên hệ: 0356243926",
    keywords: "cài win online, cài windows từ xa, dịch vụ cài win, cài win 10, cài win 11",
    canonicalUrl: "https://caiwinonline.com",
    googleAnalyticsId: "",
    googleConsoleCode: "",
    facebookPixelId: ""
  });

  const handleSave = (section: string) => {
    toast({
      title: "Lưu thành công!",
      description: `Đã cập nhật ${section} thành công.`,
    });
  };

  return (
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
  );
};

export default SEOSettings;
