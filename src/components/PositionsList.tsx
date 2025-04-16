
import PositionCard, { Position } from "./PositionCard";
import { Shield, Medal, Star } from "lucide-react";

const positionsData: Position[] = [
  {
    id: 1,
    title: "Заместитель Начальника АВНГ",
    company: "ФСВНГ Российской Федерации",
    period: "13.02.2025 — настоящее время",
    description: "",
    skills: ["Оперской твиксов"],
    isCurrent: true,
    rank: 7
  }
];

const PositionsList = () => {
  return (
    <div className="space-y-4">
      <div className="gta-card p-4">
        <div className="gta-header mb-3 flex justify-between items-center">
          <span>ТЕКУЩАЯ ДОЛЖНОСТЬ</span>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-primary fill-primary" />
            <Star className="h-4 w-4 text-primary fill-primary" />
            <Star className="h-4 w-4 text-primary fill-primary" />
          </div>
        </div>
        
        <div className="p-4 bg-secondary/50 mb-4 border border-primary/30 flex flex-col sm:flex-row items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-sm">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold uppercase text-primary">Специальный допуск</h3>
            <p className="text-sm text-muted-foreground">Уровень доступа: <span className="text-accent font-bold">Альфа</span></p>
          </div>
          
          <div className="flex items-center gap-2">
            <Medal className="h-5 w-5 text-primary" />
            <span className="text-xs font-bold">ОСОБЫЕ ПОЛНОМОЧИЯ</span>
          </div>
        </div>
        
        <div>
          <PositionCard position={positionsData[0]} />
        </div>
      </div>
    </div>
  );
};

export default PositionsList;
