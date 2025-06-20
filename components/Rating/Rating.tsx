import {
  GrayAsteriskIcon,
  GreenAsteriskIcon,
  RedAsteriskIcon,
  YellowAsteriskIcon,
} from "../Icon/Icons";

interface RatingProps {
  value: number;
}

export const Rating = ({ value }: RatingProps) => {
  const getIcons = () => {
    if (value < 30) {
      return Array(3).fill(<GrayAsteriskIcon />);
    }
    if (value < 60) {
      return [
        <GreenAsteriskIcon key="1" />,
        <GrayAsteriskIcon key="2" />,
        <GrayAsteriskIcon key="3" />,
      ];
    }
    if (value < 81) {
      return [
        <YellowAsteriskIcon key="1" />,
        <YellowAsteriskIcon key="2" />,
        <GrayAsteriskIcon key="3" />,
      ];
    }
    return Array(3).fill(<RedAsteriskIcon />);
  };

  return (
    <div className="w-[34px] flex items-center gap-[2px]">{getIcons()}</div>
  );
};
