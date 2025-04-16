
import PositionCard, { Position } from "./PositionCard";

const positionsData: Position[] = [
  {
    id: 1,
    title: "Старший менеджер проектов",
    company: "ООО «ИнноТех»",
    period: "Янв 2021 — настоящее время",
    description: "Руководство командой разработчиков, планирование проектов, взаимодействие с клиентами, контроль сроков и качества выполнения проектов.",
    skills: ["Управление проектами", "Agile", "Scrum", "Лидерство"],
    isCurrent: true
  },
  {
    id: 2,
    title: "Менеджер проектов",
    company: "ЗАО «ТехноПлюс»",
    period: "Март 2018 — Дек 2020",
    description: "Координация работы команды, постановка задач, контроль выполнения, составление отчетности, проведение совещаний.",
    skills: ["Jira", "MS Project", "Коммуникация", "Документация"]
  },
  {
    id: 3,
    title: "Специалист по развитию бизнеса",
    company: "ИП «Консалт-Сервис»",
    period: "Июнь 2016 — Фев 2018",
    description: "Поиск и привлечение новых клиентов, проведение презентаций, подготовка коммерческих предложений, заключение договоров.",
    skills: ["Продажи", "Переговоры", "CRM", "Аналитика"]
  }
];

const PositionsList = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Мои должности</h2>
      <div className="space-y-4">
        {positionsData.map((position) => (
          <PositionCard key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
};

export default PositionsList;
