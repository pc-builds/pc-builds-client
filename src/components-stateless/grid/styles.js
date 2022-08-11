import styled, { css } from 'styled-components';
import { theme } from '../../utils';

export const GridItem = styled.li`
  flex: 1 0 auto;
  width: 100%;
  max-width: 100%;
`;

export const GridContainer = styled.ul`
  display: flex;
  flex-wrap: ${({ noWrap }) => (noWrap ? 'nowrap' : 'wrap')};
  justify-content: center;
  align-items: stretch;
  list-style: none;
  padding: 0;
  margin: 0;

  gap: ${({ gap }) => (gap ? `${gap}px` : 'normal')};

  // (number of columns - 1)   x   (gap)    ==     total amount of gap px
  // (total amount of gap px)    /  (number of columns) == amount of px that should be removed for each grid item.

  // TODO : Refaktorera detta! skapa en funktion för att räkna ut width vid gap användning i /utils mappen

  ${({ xs, gap }) =>
    xs &&
    css`
      ${GridItem} {
        width: ${gap && xs > 1
          ? `calc(${100 / xs}% - ${((xs - 1) * gap) / xs}px)`
          : `${100 / xs}%`};
        max-width: ${gap && xs > 1
          ? `calc(${100 / xs}% - ${((xs - 1) * gap) / xs}px)`
          : `${100 / xs}%`};
      }
    `}

  ${({ sm, gap }) =>
    sm &&
    css`
      ${theme.screens.gt_sm} {
        ${GridItem} {
          width: ${gap && sm > 1
            ? `calc(${100 / sm}% - ${((sm - 1) * gap) / sm}px)`
            : `${100 / sm}%`};
          max-width: ${gap && sm > 1
            ? `calc(${100 / sm}% - ${((sm - 1) * gap) / sm}px)`
            : `${100 / sm}%`};
        }
      }
    `}

  ${({ md, gap }) =>
    md &&
    css`
      ${theme.screens.gt_md} {
        ${GridItem} {
          width: ${gap && md > 1
            ? `calc(${100 / md}% - ${((md - 1) * gap) / md}px)`
            : `${100 / md}%`};
          max-width: ${gap && md > 1
            ? `calc(${100 / md}% - ${((md - 1) * gap) / md}px)`
            : `${100 / md}%`};
        }
      }
    `}
`;
