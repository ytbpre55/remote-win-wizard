
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePricingCRUD } from "@/hooks/usePricingCRUD";

const PricingSettings = () => {
  const { toast } = useToast();
  const {
    pricingData,
    newPricing,
    editingId,
    setNewPricing,
    handlePricingUpdate,
    handleAddPricing,
    handleDeletePricing,
    handleEditPricing
  } = usePricingCRUD();

  const handleSave = () => {
    toast({
      title: "Lưu thành công!",
      description: "Đã cập nhật bảng giá thành công.",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Quản Lý Bảng Giá
            <Button onClick={handleAddPricing} size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Thêm dịch vụ
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Form thêm dịch vụ mới */}
          <div className="mb-6 p-4 border rounded-lg bg-gray-50">
            <h4 className="font-medium mb-3">Thêm dịch vụ mới</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <Input
                placeholder="Tên dịch vụ"
                value={newPricing.service}
                onChange={(e) => setNewPricing({...newPricing, service: e.target.value})}
              />
              <Input
                type="number"
                placeholder="Giá (VNĐ)"
                value={newPricing.price || ""}
                onChange={(e) => setNewPricing({...newPricing, price: Number(e.target.value)})}
              />
              <Input
                placeholder="Số lượng"
                value={newPricing.quantity}
                onChange={(e) => setNewPricing({...newPricing, quantity: e.target.value})}
              />
              <Button onClick={handleAddPricing}>
                <Plus className="w-4 h-4 mr-1" />
                Thêm
              </Button>
            </div>
          </div>

          {/* Bảng dịch vụ */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dịch vụ</TableHead>
                <TableHead>Giá (VNĐ)</TableHead>
                <TableHead>Số lượng</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    {editingId === item.id ? (
                      <Input
                        value={item.service}
                        onChange={(e) => handlePricingUpdate(item.id, 'service', e.target.value)}
                      />
                    ) : (
                      item.service
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === item.id ? (
                      <Input
                        type="number"
                        value={item.price}
                        onChange={(e) => handlePricingUpdate(item.id, 'price', e.target.value)}
                      />
                    ) : (
                      item.price.toLocaleString('vi-VN')
                    )}
                  </TableCell>
                  <TableCell>
                    {editingId === item.id ? (
                      <Input
                        value={item.quantity}
                        onChange={(e) => handlePricingUpdate(item.id, 'quantity', e.target.value)}
                      />
                    ) : (
                      item.quantity
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant={editingId === item.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleEditPricing(item.id)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeletePricing(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="mt-4">
            <Button onClick={handleSave}>
              Lưu bảng giá
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingSettings;
