
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const MediaSettings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Lưu thành công!",
      description: "Đã cập nhật hình ảnh thành công.",
    });
  };

  return (
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
            <Button onClick={handleSave}>
              Lưu hình ảnh
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MediaSettings;
