
import { useState } from "react";
import { Helmet } from "react-helmet";
import AdminPanel from "@/components/admin/AdminPanel";
import AdminLogin from "@/components/admin/AdminLogin";

const Admin = () => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true);
  };

  const handleAdminClose = () => {
    setIsAdminAuthenticated(false);
  };

  return (
    <>
      <Helmet>
        <title>Quản Trị - Cài Win Online</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {isAdminAuthenticated ? (
        <AdminPanel onClose={handleAdminClose} />
      ) : (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <AdminLogin 
            onClose={() => window.history.back()}
            onLogin={handleAdminLogin}
          />
        </div>
      )}
    </>
  );
};

export default Admin;
