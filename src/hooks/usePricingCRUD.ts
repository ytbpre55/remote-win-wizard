
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface PricingItem {
  id: number;
  service: string;
  price: number;
  quantity: string;
}

export const usePricingCRUD = () => {
  const { toast } = useToast();
  const [editingId, setEditingId] = useState<number | null>(null);

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

  return {
    pricingData,
    newPricing,
    editingId,
    setNewPricing,
    handlePricingUpdate,
    handleAddPricing,
    handleDeletePricing,
    handleEditPricing
  };
};
