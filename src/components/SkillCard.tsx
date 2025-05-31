import SpotlightCard from './ui/SpotlightCard';
import { primaryColor } from "@/lib/colors";

interface SkillCardProps {
  name: string;
  icon: string; // this should be the image file name, e.g., "react.png"
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <SpotlightCard className="p-6 rounded-xl hover:scale-105 transition " spotlightColor={primaryColor}>
      <div className="flex flex-col items-center justify-center">
        <img
          src={`/logo/${icon}`}
          alt={name}
          className="h-10 w-10 object-contain mb-4"
        />
        <h3 className="text-center font-medium">{name}</h3>
      </div>
    </SpotlightCard>
  );
};
export default SkillCard;