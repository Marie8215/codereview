import Icon from "./Icon";

export const CodeIcon = ({ size = 26 }) => {
  return <Icon src="/images/code-icon.svg" size={size} alt="Code icon" />;
};

export const MessageIcon = ({ size = 26 }) => {
  return <Icon src="/images/message-icon.svg" size={size} alt="Message icon" />;
};

export const StackIcon = ({ size = 26 }) => {
  return <Icon src="/images/stack-icon.svg" size={size} alt="Stack icon" />;
};

export const BriefcaseIcon = ({ size = 26 }) => {
  return <Icon src="/images/briefcase-icon.svg" size={size} alt="Briefcase icon" />;
};

export const CalendarIcon = ({ size = 26 }) => {
  return <Icon src="/images/calendar-icon.svg" size={size} alt="Calendar icon" />;
};

export const CodeAsteriskIcon = ({ size = 26 }) => {
  return <Icon src="/images/code-asterisk-icon.svg" size={size} alt="Code asterisk icon" />;
};

export const MicrophoneIcon = ({ size = 26 }) => {
  return <Icon src="/images/microphone-icon.svg" size={size} alt="Microphone icon" />;
};

export const PersonIcon = ({ size = 26 }) => {
  return <Icon src="/images/person-icon.svg" size={size} alt="Person icon" />;
};

export const SparklesIcon = ({ size = 26 }) => {
  return <Icon src="/images/sparkles-icon.svg" size={size} alt="Sparkles icon" />;
};

export const WorldIcon = ({ size = 26 }) => {
  return <Icon src="/images/world-icon.svg" size={size} alt="World icon" />;
};

export const MoneybagIcon = ({ size = 26 }) => {
  return <Icon src="/images/moneybag-icon.svg" size={size} alt="Money bag icon" />;
};

export const BlackDuckIcon = ({ size = 18 }) => {
  return <Icon src="/images/black-duck-icon.svg" size={size} alt="Black duck icon" />;
};

export const WhiteDuckIcon = ({ size = 14 }) => {
  return <Icon src="/images/duck-white.svg" size={size} alt="White duck icon" />;
};

export const RainbowDuckIcon = ({ size = 14 }) => {
  return <Icon src="/images/duck-icon.svg" size={size} alt="Rainbow duck icon" />;
};

export const PhotoContIcon = () => {
  return (
    <Icon src="/images/photo-cont-icon.svg" className="w-[115px] h-[40px]" alt="Photo container icon" />
  );
};

export const BuildingIcon = ({ size = 26 }) => {
  return <Icon src="/images/building-icon.svg" size={size} alt="Building icon" />;
};

export const FreeIcon = () => {
  return (
    <div
      className={
        "md:w-[89px] md:h-[24px] w-[79px] h-[23px] px-[10px]" +
        " py-1 border border-white rounded-[12px] text-white flex items-center" +
        "justify-center text-sm  md:text-[14px] md:font-medium md:leading-4 tracking-[-0.5px] text-[12px] leading-3"
      }
    >
      Бесплатно
    </div>
  );
};

export const GrayAsteriskIcon = ({ size = 10 }) => {
  return <Icon src="/images/gray-asterisk-icon.svg" size={size} alt="Gray asterisk icon" />;
};

export const GreenAsteriskIcon = ({ size = 10 }) => {
  return <Icon src="/images/green-asterisk-icon.svg" size={size} alt="Green asterisk icon" />;
};

export const RedAsteriskIcon = ({ size = 10 }) => {
  return <Icon src="/images/red-asterisk-icon.svg" size={size} alt="Red asterisk icon" />;
};

export const YellowAsteriskIcon = ({ size = 10 }) => {
  return <Icon src="/images/yellow-asterisk-icon.svg" size={size} alt="Yellow asterisk icon" />;
};

export const TelegramIcon = ({ size = 30 }) => {
  return <Icon src="/images/telegram-icon.svg" size={size} alt="Telegram icon" />;
}

export const YouTubeIcon = ({ size = 30 }) => {
  return <Icon src="/images/youtube-icon.svg" size={size} alt="YouTube icon" />;
}

export const LinkedInIcon = ({ size = 30 }) => {
  return <Icon src="/images/linkedin-icon.svg" size={size} alt="LinkedIn icon" />;
}

interface ArrowIconProps {
  size?: number;
  color?: string;
}

export const ArrowIcon = ({ size = 12, color }: ArrowIconProps) => {
  return (
    <Icon
      src="/images/arrow-icon.svg"
      size={size}
      className={color ? `[&>*]:fill-[${color}]` : ""}
      alt="Arrow icon"
    />
  );
};

export const ArrowSophyIcon = ({ size = 16 }) => {
  return <Icon src="/images/arrow-sophy.svg" size={size} alt="Sophy arrow icon" />;
};
