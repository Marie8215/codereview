import { VacancyLocation } from "../models/vacancy";

export const fixLocation = (
  location: VacancyLocation | undefined
): VacancyLocation | undefined => {
  if (location && typeof location === "string") {
    try {
      location = JSON.parse(
        (location as string).replaceAll("'", '"').replaceAll("None", "null")
      );
    } catch (error) {
      console.log("catch", error, location);

      location = undefined;
    }
  }

  return location;
};
