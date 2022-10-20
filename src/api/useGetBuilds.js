import { useQuery } from "@tanstack/react-query";
import { objectToArrayOfObjects } from "../utils/helpers/object/object";
import { _get } from "./index";

const allowedOptions = [
  "tier",
  "rgb",
  "type",
];

const validateOption = (option) => {
  if (allowedOptions.includes(option.property)) {
    return true;
  }
}

const buildQuery = (options) => {
  const validOptions = options.filter((option) => validateOption(option));

  const query = validOptions.reduce((propertyValueStrings, option) => {
    propertyValueStrings.push(`${option.property}=${option.value}`);

    return propertyValueStrings;
  }, []).join("&");

  return query;
}

export const useGetBuilds = (buildOptions) => {
  const query = buildQuery(objectToArrayOfObjects(buildOptions));

  return useQuery(
    ["builds", query],
    () => _get(`${process.env.REACT_APP_API_BASEPATH}/builds/?${query}`),
    {
      enabled: !!query,
    }
  )
};