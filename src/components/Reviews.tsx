
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Anh Minh",
      location: "Hà Nội",
      rating: 5,
      comment: "Dịch vụ rất chuyên nghiệp, kỹ thuật viên nhiệt tình hướng dẫn từng bước. Máy tính được cài đặt Windows 11 hoàn hảo, chạy mượt mà hơn hẳn.",
      service: "Cài Windows 11"
    },
    {
      name: "Chị Lan",
      location: "TP.HCM",
      rating: 5,
      comment: "Tôi rất hài lòng với dịch vụ. Chỉ mất 45 phút là xong, giá cả hợp lý. Kỹ thuật viên giải thích rõ ràng và hỗ trợ nhiệt tình.",
      service: "Cài Windows 10"
    },
    {
      name: "Anh Tuấn",
      location: "Đà Nẵng",
      rating: 5,
      comment: "Dịch vụ cài Win từ xa tiện lợi quá! Không cần mang máy đi đâu, ngồi nhà vẫn được hỗ trợ tận tình. Sẽ giới thiệu cho bạn bè.",
      service: "Cài Windows 7"
    },
    {
      name: "Chị Hương",
      location: "Hải Phòng",
      rating: 5,
      comment: "Lần đầu dùng dịch vụ online nhưng rất ấn tượng. Kỹ thuật viên kiên nhẫn, máy tính sau khi cài đặt chạy rất ổn định.",
      service: "Cài Windows 10"
    },
    {
      name: "Anh Đức",
      location: "Cần Thơ",
      rating: 5,
      comment: "Hỗ trợ 24/7 thật sự! Gọi lúc 10h tối vẫn được tư vấn và cài đặt ngay. Dịch vụ tuyệt vời, giá cả phải chăng.",
      service: "Cài Windows 11"
    },
    {
      name: "Chị Mai",
      location: "Vũng Tàu",
      rating: 5,
      comment: "Cài đặt nhanh gọn, bao gồm cả phần mềm cần thiết. Máy tính như mới, rất hài lòng với chất lượng dịch vụ.",
      service: "Cài Windows 10 + Office"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Khách Hàng Nói Gì Về Chúng Tôi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hơn 1000+ khách hàng tin tưởng và hài lòng với dịch vụ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full inline-block">
                  {review.service}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">"{review.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-blue-600 text-white rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <p className="text-blue-100">Khách hàng hài lòng</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Hỗ trợ liên tục</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <p className="text-blue-100">Tỷ lệ thành công</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30-60'</div>
              <p className="text-blue-100">Thời gian hoàn thành</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
