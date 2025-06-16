import Icon from "./Icon";

export const CodeIcon = ({ size = 26 }) => {
  return <Icon src="/images/code-icon.svg" size={size} />;
};

export const MessageIcon = ({ size = 26 }) => {
  return <Icon src="/images/message-icon.svg" size={size} />;
};

export const StackIcon = ({ size = 26 }) => {
  return <Icon src="/images/stack-icon.svg" size={size} />;
};

export const BriefcaseIcon = ({ size = 26 }) => {
  return <Icon src="/images/briefcase-icon.svg" size={size} />;
};

export const CalendarIcon = ({ size = 26 }) => {
  return <Icon src="/images/calendar-icon.svg" size={size} />;
};

export const CodeAsteriskIcon = ({ size = 26 }) => {
  return <Icon src="/images/code-asterisk-icon.svg" size={size} />;
};

export const MicrophoneIcon = ({ size = 26 }) => {
  return <Icon src="/images/microphone-icon.svg" size={size} />;
};

export const PersonIcon = ({ size = 26 }) => {
  return <Icon src="/images/person-icon.svg" size={size} />;
};

export const SparklesIcon = ({ size = 26 }) => {
  return <Icon src="/images/sparkles-icon.svg" size={size} />;
};

export const WorldIcon = ({ size = 26 }) => {
  return <Icon src="/images/world-icon.svg" size={size} />;
};

export const MoneybagIcon = ({ size = 26 }) => {
  return <Icon src="/images/moneybag-icon.svg" size={size} />;
};

export const BlackDuckIcon = ({ size = 18 }) => {
  return <Icon src="/images/black-duck-icon.svg" size={size} />;
};

export const PhotoContIcon = () => {
  return (
    <Icon src="/images/photo-cont-icon.svg" className="w-[115px] h-[40px]" />
  );
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
