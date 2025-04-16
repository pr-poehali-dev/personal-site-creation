
import { useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import PositionsList from "@/components/PositionsList";
import ContactSection from "@/components/ContactSection";
import GtaSidebar from "@/components/GtaSidebar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileHeader />;
      case "positions":
        return <PositionsList />;
      case "contact":
        return <ContactSection />;
      default:
        return <ProfileHeader />;
    }
  };
  
  return (
    <div className="flex h-screen">
      <div className="w-64 hidden md:block">
        <GtaSidebar onSelectTab={setActiveTab} activeTab={activeTab} />
      </div>
      
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-primary uppercase tracking-wider">
              Админ-панель: {activeTab === "profile" ? "Профиль" : activeTab === "positions" ? "Должности" : "Контакты"}
            </h1>
            <div className="text-sm text-muted-foreground">
              Время сессии: 01:24:36
            </div>
          </div>
          
          {/* Mobile tabs */}
          <div className="md:hidden flex border-b-2 border-primary/50 mb-6">
            <button 
              className={`flex-1 py-2 text-center uppercase font-bold ${activeTab === "profile" ? "text-primary border-b-2 border-primary -mb-0.5" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              Профиль
            </button>
            <button 
              className={`flex-1 py-2 text-center uppercase font-bold ${activeTab === "positions" ? "text-primary border-b-2 border-primary -mb-0.5" : ""}`}
              onClick={() => setActiveTab("positions")}
            >
              Должности
            </button>
            <button 
              className={`flex-1 py-2 text-center uppercase font-bold ${activeTab === "contact" ? "text-primary border-b-2 border-primary -mb-0.5" : ""}`}
              onClick={() => setActiveTab("contact")}
            >
              Контакты
            </button>
          </div>
          
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;
