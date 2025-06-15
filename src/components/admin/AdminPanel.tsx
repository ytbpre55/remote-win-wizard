
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import AdminSidebar from "./AdminSidebar";
import GeneralSettings from "./GeneralSettings";
import SEOSettings from "./SEOSettings";
import ContentSettings from "./ContentSettings";
import PricingSettings from "./PricingSettings";
import MediaSettings from "./MediaSettings";

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel = ({ onClose }: AdminPanelProps) => {
  const [activeTab, setActiveTab] = useState("general");

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
          <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === "general" && <GeneralSettings />}
            {activeTab === "seo" && <SEOSettings />}
            {activeTab === "content" && <ContentSettings />}
            {activeTab === "pricing" && <PricingSettings />}
            {activeTab === "media" && <MediaSettings />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
