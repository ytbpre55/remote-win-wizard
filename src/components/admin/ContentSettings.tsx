
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContentSettings = () => {
  const { toast } = useToast();
  const [contentSettings, setContentSettings] = useState({
    heroTitle: "Dịch Vụ Cài Win Online Từ Xa",
    heroDescription: "Giải pháp cài đặt Windows chuyên nghiệp, nhanh chóng và tiện lợi ngay tại nhà bạn.",
    serviceIntro: "Chúng tôi cung cấp dịch vụ cài đặt Windows từ xa chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh nghiệm."
  });

  const handleSave = () => {
    toast({
      title: "Lưu thành công!",
      description: "Đã cập nhật nội dung thành công.",
    });
  };

  return (
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
          <Button onClick={handleSave}>
            Cập nhật nội dung
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentSettings;
