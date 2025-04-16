
import { useState } from "react";
import { User, Shield, Phone, Settings, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface GtaSidebarProps {
  onSelectTab: (tab: string) => void;
  activeTab: string;
}

const GtaSidebar: React.FC<GtaSidebarProps> = ({ onSelectTab, activeTab }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  
  const menuItems = [
    { id: "profile", label: "ПРОФИЛЬ", icon: User },
    { id: "positions", label: "СЛУЖБА", icon: Shield },
    { id: "contact", label: "КОНТАКТЫ", icon: Phone },
  ];

  return (
    <div className="h-full bg-secondary/90 p-4 border-r-2 border-primary/50 flex flex-col gap-2">
      <div className="flex items-center gap-3 px-2 pb-4 mb-4 border-b-2 border-primary/50">
        <div className="bg-primary/20 p-2 rounded-sm">
          <Activity className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold tracking-wider text-primary uppercase">ФСВНГ</h2>
      </div>
      
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={cn(
            "flex items-center gap-3 py-2 px-3 text-left transition-all duration-200",
            activeTab === item.id 
              ? "bg-primary/20 text-primary font-bold" 
              : "text-foreground/80 hover:bg-secondary",
            hovered === item.id && activeTab !== item.id && "text-primary"
          )}
          onClick={() => onSelectTab(item.id)}
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <item.icon className={cn(
            "h-5 w-5",
            activeTab === item.id ? "text-primary" : "text-foreground/70",
            hovered === item.id && "text-primary"
          )} />
          <span className="uppercase tracking-wide">{item.label}</span>
        </button>
      ))}
      
      <div className="mt-auto">
        <button 
          className="flex items-center gap-3 py-2 px-3 w-full text-left text-foreground/80 hover:bg-secondary hover:text-primary"
        >
          <Settings className="h-5 w-5 text-foreground/70" />
          <span className="uppercase tracking-wide">НАСТРОЙКИ</span>
        </button>
      </div>
    </div>
  );
};

export default GtaSidebar;
