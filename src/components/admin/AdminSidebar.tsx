
import { Settings, FileText, DollarSign, Image, BarChart } from "lucide-react";

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminSidebar = ({ activeTab, setActiveTab }: AdminSidebarProps) => {
  const adminTabs = [
    { id: "general", label: "Cài đặt chung", icon: Settings },
    { id: "seo", label: "SEO", icon: BarChart },
    { id: "content", label: "Nội dung", icon: FileText },
    { id: "pricing", label: "Bảng giá", icon: DollarSign },
    { id: "media", label: "Hình ảnh", icon: Image }
  ];

  return (
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
  );
};

export default AdminSidebar;
