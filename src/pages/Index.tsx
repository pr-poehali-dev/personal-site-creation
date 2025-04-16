
import ProfileHeader from "@/components/ProfileHeader";
import PositionsList from "@/components/PositionsList";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="container py-8 max-w-4xl">
      <ProfileHeader />
      <PositionsList />
      <ContactSection />
    </div>
  );
};

export default Index;
