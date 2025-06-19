
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cài Win Online Từ Xa - Dịch Vụ Cài Windows 7/10/11 Chuyên Nghiệp | CaiWinOnline.com</title>
        <meta name="description" content="🔥 Dịch vụ cài Win online từ xa NHANH CHÓNG - TIỆN LỢI tại nhà. Cài Windows 7, 10, 11 chuyên nghiệp. Kỹ thuật viên 24/7. Giá chỉ từ 100k. Gọi ngay: 0854289499" />
        <meta name="keywords" content="cài win online, cài windows từ xa, dịch vụ cài win, cài win 10, cài win 11, cài windows 7, remote windows installation, cài đặt windows từ xa, sửa máy tính online, cài phần mềm từ xa" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PG3NB5SEGZ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PG3NB5SEGZ');
          `}
        </script>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://caiwinonline.com/" />
        <meta property="og:title" content="Cài Win Online Từ Xa - Dịch Vụ Cài Windows Chuyên Nghiệp" />
        <meta property="og:description" content="Dịch vụ cài Win online từ xa nhanh chóng, tiện lợi tại nhà. Cài Windows 7, 10, 11 chuyên nghiệp. Kỹ thuật viên 24/7. Giá từ 100k." />
        <meta property="og:image" content="https://caiwinonline.com/84b4f432-25ee-4d57-97eb-91ef67a85ecc.png" />
        <meta property="og:site_name" content="CaiWinOnline.com" />
        <meta property="og:locale" content="vi_VN" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://caiwinonline.com/" />
        <meta property="twitter:title" content="Cài Win Online Từ Xa - Dịch Vụ Cài Windows Chuyên Nghiệp" />
        <meta property="twitter:description" content="Dịch vụ cài Win online từ xa nhanh chóng, tiện lợi tại nhà. Cài Windows 7, 10, 11 chuyên nghiệp." />
        <meta property="twitter:image" content="https://caiwinonline.com/84b4f432-25ee-4d57-97eb-91ef67a85ecc.png" />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="CaiWinOnline.com" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="Vietnamese" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="VN" />
        <meta name="geo.country" content="Vietnam" />
        <meta name="geo.placename" content="Vietnam" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://caiwinonline.com" />
        
        {/* Alternative Language */}
        <link rel="alternate" hrefLang="vi" href="https://caiwinonline.com" />
        <link rel="alternate" hrefLang="x-default" href="https://caiwinonline.com" />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CaiWinOnline.com",
            "alternateName": "Cài Win Online",
            "url": "https://caiwinonline.com",
            "logo": "https://caiwinonline.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+84854289499",
              "contactType": "Technical Support",
              "areaServed": "VN",
              "availableLanguage": "Vietnamese"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "VN",
              "addressRegion": "Toàn quốc"
            },
            "sameAs": [
              "https://www.facebook.com/caiwinonline",
              "https://zalo.me/0854289499"
            ]
          })}
        </script>

        {/* Structured Data - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Dịch Vụ Cài Windows Online Từ Xa",
            "description": "Dịch vụ cài đặt Windows 7, 10, 11 từ xa chuyên nghiệp, nhanh chóng và tiện lợi",
            "provider": {
              "@type": "Organization",
              "name": "CaiWinOnline.com",
              "telephone": "+84854289499"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Vietnam"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Dịch vụ cài Windows",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cài Windows cho 1 máy"
                  },
                  "price": "150000",
                  "priceCurrency": "VND"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cài Windows cho 2 máy"
                  },
                  "price": "140000",
                  "priceCurrency": "VND"
                }
              ]
            },
            "serviceType": "Remote Computer Service",
            "category": "Computer Repair Service"
          })}
        </script>

        {/* Structured Data - FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Dịch vụ cài Win online từ xa có an toàn không?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hoàn toàn an toàn. Chúng tôi sử dụng phần mềm TeamViewer/UltraView được mã hóa để kết nối từ xa. Bạn có thể theo dõi toàn bộ quá trình cài đặt."
                }
              },
              {
                "@type": "Question",
                "name": "Cài Win online mất bao lâu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Thời gian cài đặt từ 30-60 phút tùy vào cấu hình máy và phiên bản Windows. Chúng tôi cam kết hoàn thành nhanh nhất có thể."
                }
              },
              {
                "@type": "Question",
                "name": "Giá cả dịch vụ cài Win như thế nào?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Giá từ 100k-150k/máy tùy số lượng. Cài 1 máy: 150k, 2 máy: 140k/máy, từ 3-4 máy: 130k/máy, từ 5+ máy: 120k/máy, từ 10+ máy: 100k/máy."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <Process />
        <Reviews />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
