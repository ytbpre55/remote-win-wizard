import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const StickyCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        size="lg" 
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 text-base font-bold shadow-2xl border-2 border-red-400 animate-pulse hover:animate-none transform hover:scale-105 transition-all duration-300 rounded-full"
        onClick={() => window.open('tel:0854289499')}
      >
        <Phone className="w-5 h-5 mr-2" />
        🔥 GỌI NGAY
      </Button>
    </div>
  );
};

export default StickyCallButton;