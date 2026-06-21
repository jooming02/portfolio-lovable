import BorderGlow from "@/components/effects/BorderGlow/BorderGlow";
import {
  borderGlowColor,
  borderGlowColors,
  cardBackground,
} from "@/lib/colors";

interface SkillCardProps {
  name: string;
  icon: string;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <BorderGlow
      className="border-glow-card--subtle aspect-square w-full transition-transform duration-200"
      backgroundColor={cardBackground}
      borderRadius={10}
      glowRadius={18}
      glowColor={borderGlowColor}
      colors={borderGlowColors}
      glowIntensity={0.85}
      fillOpacity={0.35}
      edgeSensitivity={35}
    >
      <div className="flex h-full flex-col items-center justify-center gap-1.5 p-2">
        <img
          src={`/logo/${icon}`}
          alt={name}
          className="h-10 w-10 shrink-0 object-contain"
        />
        <h3 className="line-clamp-2 px-0.5 text-center text-sm font-medium leading-snug">
          {name}
        </h3>
      </div>
    </BorderGlow>
  );
};

export default SkillCard;
