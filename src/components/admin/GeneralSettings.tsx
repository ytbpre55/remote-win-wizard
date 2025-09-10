
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const GeneralSettings = () => {
  const { toast } = useToast();
  const [siteSettings, setSiteSettings] = useState({
    siteName: "CaiWinOnline.com",
    tagline: "Cài Win Từ Xa Chuyên Nghiệp",
    phone: "0854289499",
    email: "caiwinonline.com@gmail.com",
    address: "Toàn quốc"
  });

  const handleSave = () => {
    toast({
      title: "Lưu thành công!",
      description: "Đã cập nhật thông tin chung thành công.",
    });
  };

  return (
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
          <Button onClick={handleSave}>
            Lưu thay đổi
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneralSettings;
