
import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/admin/AdminPanel";
import AdminLogin from "@/components/admin/AdminLogin";

const Index = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const handleAdminClick = () => {
    setShowAdminLogin(true);
  };

  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true);
    setShowAdminLogin(false);
  };

  const handleAdminClose = () => {
    setIsAdminAuthenticated(false);
    setShowAdminLogin(false);
  };

  return (
    <>
      <Helmet>
        <title>Cài Win Online - Dịch Vụ Cài Đặt Windows Từ Xa Chuyên Nghiệp</title>
        <meta name="description" content="Dịch vụ cài win online từ xa chuyên nghiệp. Cài Windows 7, 10, 11 nhanh chóng, tiện lợi. Đội ngũ kỹ thuật 24/7. Giá từ 100k/máy. Liên hệ: 0356243926" />
        <meta name="keywords" content="cài win online, cài windows từ xa, dịch vụ cài win, cài win 10, cài win 11, remote windows installation" />
        <meta property="og:title" content="Cài Win Online - Dịch Vụ Cài Đặt Windows Từ Xa" />
        <meta property="og:description" content="Dịch vụ cài win online từ xa chuyên nghiệp, nhanh chóng, tiện lợi" />
        <meta property="og:type" content="website" />
        <meta name="author" content="CaiWinOnline.com" />
        <link rel="canonical" href="https://caiwinonline.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Cài Win Online",
            "description": "Dịch vụ cài đặt Windows từ xa chuyên nghiệp",
            "telephone": "0356243926",
            "url": "https://caiwinonline.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "VN"
            },
            "service": {
              "@type": "Service",
              "name": "Cài đặt Windows từ xa",
              "description": "Dịch vụ cài win online từ xa cho Windows 7, 10, 11"
            }
          })}
        </script>
      </Helmet>

      {showAdminLogin && (
        <AdminLogin 
          onClose={() => setShowAdminLogin(false)} 
          onLogin={handleAdminLogin}
        />
      )}

      {isAdminAuthenticated ? (
        <AdminPanel onClose={handleAdminClose} />
      ) : (
        <div className="min-h-screen bg-white">
          <Header onAdminClick={handleAdminClick} />
          <Hero />
          <Services />
          <Process />
          <Pricing />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
