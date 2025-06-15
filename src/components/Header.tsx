
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onAdminClick: () => void;
}

const Header = ({ onAdminClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Trang chủ", href: "#home" },
    { label: "Dịch vụ", href: "#services" },
    { label: "Quy trình", href: "#process" },
    { label: "Bảng giá", href: "#pricing" },
    { label: "Liên hệ", href: "#contact" }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <span className="font-bold text-xl">CWO</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">CaiWinOnline.com</h1>
              <p className="text-sm text-gray-600">Cài Win Từ Xa Chuyên Nghiệp</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={onAdminClick}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              Admin
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => {
                onAdminClick();
                setIsMenuOpen(false);
              }}
              variant="outline"
              size="sm"
              className="mt-2"
            >
              Admin Panel
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
