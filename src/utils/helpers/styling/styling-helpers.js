import { css } from "styled-components";
import { theme } from "../../styling";
import { isStrictlyObject } from "../index";

export const size = (multiplier = 1) => {
  const baseUnit = 8;
  return `${multiplier * baseUnit}px`;
};

const mapProperties = (keys, value) => {
  let obj = "";

  keys.forEach((element) => {
    obj += `${element}: ${value}`
  });
  return obj;
}

export const resolveBreakpointStyles = (breakpointStyles, properties) => {

  if (isStrictlyObject(breakpointStyles)) {
    return css`
      ${breakpointStyles["xs"] && `{
        ${theme.screens.gt_xs} {
          ${mapProperties(properties, breakpointStyles["xs"])}
        }
        ${theme.screens.lt_xs} {
          ${mapProperties(properties, breakpointStyles["xs"])}
        }
      }`}

      ${breakpointStyles["md"] && `{
        ${theme.screens.gt_md} {
          ${mapProperties(properties, breakpointStyles["md"])}
        }
      }`} 
  `;
  } else return false;

} 