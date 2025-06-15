
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AdminLoginProps {
  onClose: () => void;
  onLogin: () => void;
}

const AdminLogin = ({ onClose, onLogin }: AdminLoginProps) => {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Mật khẩu mặc định - trong thực tế nên lưu trong database hoặc env
  const ADMIN_PASSWORD = "admin123";

  const handleLogin = () => {
    setIsLoading(true);
    
    // Giả lập thời gian xác thực
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        toast({
          title: "Đăng nhập thành công!",
          description: "Chào mừng bạn đến với trang quản trị.",
        });
        onLogin();
      } else {
        toast({
          title: "Mật khẩu không đúng!",
          description: "Vui lòng kiểm tra lại mật khẩu.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-blue-600" />
              <CardTitle>Đăng Nhập Quản Trị</CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Mật khẩu quản trị
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nhập mật khẩu..."
              className="w-full"
              disabled={isLoading}
            />
          </div>
          
          <div className="flex space-x-2">
            <Button 
              onClick={handleLogin} 
              disabled={!password || isLoading}
              className="flex-1"
            >
              {isLoading ? "Đang xác thực..." : "Đăng nhập"}
            </Button>
            <Button variant="outline" onClick={onClose}>
              Hủy
            </Button>
          </div>
          
          <div className="text-xs text-gray-500 text-center">
            Chỉ dành cho quản trị viên được ủy quyền
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
