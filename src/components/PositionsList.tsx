
import PositionCard, { Position } from "./PositionCard";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

const positionsData: Position[] = [
  {
    id: 1,
    title: "Старший менеджер проектов",
    company: "ООО «ИнноТех»",
    period: "Янв 2021 — настоящее время",
    description: "Руководство командой разработчиков, планирование проектов, взаимодействие с клиентами, контроль сроков и качества выполнения проектов.",
    skills: ["Управление проектами", "Agile", "Scrum", "Лидерство"],
    isCurrent: true,
    rank: 5
  },
  {
    id: 2,
    title: "Менеджер проектов",
    company: "ЗАО «ТехноПлюс»",
    period: "Март 2018 — Дек 2020",
    description: "Координация работы команды, постановка задач, контроль выполнения, составление отчетности, проведение совещаний.",
    skills: ["Jira", "MS Project", "Коммуникация", "Документация"],
    rank: 4
  },
  {
    id: 3,
    title: "Специалист по развитию бизнеса",
    company: "ИП «Консалт-Сервис»",
    period: "Июнь 2016 — Фев 2018",
    description: "Поиск и привлечение новых клиентов, проведение презентаций, подготовка коммерческих предложений, заключение договоров.",
    skills: ["Продажи", "Переговоры", "CRM", "Аналитика"],
    rank: 3
  }
];

const PositionsList = () => {
  return (
    <div className="space-y-4">
      <div className="gta-card p-4">
        <div className="gta-header mb-3">
          <span>СПИСОК ДОЛЖНОСТЕЙ</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              className="pl-8 bg-secondary/30 border-primary/30 focus:border-primary" 
              placeholder="Поиск должностей..." 
            />
          </div>
          
          <button className="gta-button flex items-center justify-center gap-2">
            <Filter className="h-4 w-4" />
            <span>ФИЛЬТРЫ</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {positionsData.map((position) => (
            <PositionCard key={position.id} position={position} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PositionsList;
