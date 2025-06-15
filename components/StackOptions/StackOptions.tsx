import { stackOptions } from "@/store/onClient/store";
import RadioGroup from "../RadioGroup/RadioGroup";

export const StackOptions = ({
  className,
  size,
}: {
  className?: string;
  size?: "normal" | "small";
}) => {
  const sizeDependingStyles =
    (size || "normal") === "normal" ? "mb-5" : "mb-7.5";

  return (
    <div className={sizeDependingStyles}>
      <RadioGroup
        className={className}
        items={stackOptions.map((option) => option as string)}
        size={size}
      />
    </div>
  );
};
