import {
  BriefcaseIcon,
  BuildingIcon,
  MoneybagIcon,
  WorldIcon,
} from "../Icon/Icons";
import IconWithText from "../IconWithText/IconWithText";

interface JobPropertiesProps {
  remote?: boolean;
  internship: boolean;
  salary?: string;
}

export const JobProperties: React.FC<JobPropertiesProps> = ({
  remote,
  internship,
  salary,
}) => {
  return (
    <>
      {remote && (
        <IconWithText
          size="small"
          icon={<WorldIcon size={18} />}
          text={"удаленно"}
        />
      )}
      {remote != undefined && !remote && (
        <IconWithText
          size="small"
          icon={<BuildingIcon size={18} />}
          text={"в офис"}
        />
      )}
      {internship && (
        <IconWithText
          size="small"
          icon={<BriefcaseIcon size={18} />}
          text={"стажировка"}
        />
      )}
      {salary && (
        <IconWithText
          size="small"
          icon={<MoneybagIcon size={18} />}
          text={`${salary} ${/[0-9]/.test(salary.at(-1) || "") ? "₽" : ""}`}
        />
      )}
      {!salary && (
        <IconWithText
          size="small"
          icon={<MoneybagIcon size={18} />}
          text={"не указана"}
        />
      )}
    </>
  );
};

export default JobProperties;
