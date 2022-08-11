import styled, { css } from 'styled-components';
import { theme } from '../../utils';

export const HeadingBase = styled.div`
  margin: 0;
  font-weight: ${({fontWeight}) => fontWeight || `${theme.font.weight.bold}`};
  font-family: ${theme.font.family.main};
  letter-spacing: ${theme.font.letterSpacing};

  text-align: ${({ alignText }) => alignText || "inherit"};
`;

export const StyledH1 = css`
  font-size: 32px;
  line-height: 1.2;

  ${theme.screens.gt_sm} {
    font-size: 48px;
    line-height: 56px;
  }

  ${theme.screens.gt_md} {
    font-size: 64px;
    line-height: 76px;
  }
`;

export const StyledH2 = css`
  font-size: 24px;
  line-height: 1.2;

  ${theme.screens.gt_md} {
    font-size: 32px;
  }
`;

export const StyledH3 = css`
  font-size: 20px;
  line-height: 1.2;

  ${theme.screens.gt_md} {
    font-size: 24px;
  }
`;

export const StyledH4 = css`
  font-size: 18px;
  line-height: 1.2;

  ${theme.screens.gt_md} {
    font-size: 20px;
  }
`;

export const StyledH5 = css`
  font-size: 16px;
  line-height: 1.2;

  ${theme.screens.gt_md} {
    font-size: 18px;
  }
`;

export const H1 = styled(HeadingBase).attrs((props) => ({
  as: props.as || 'h1',
}))`
  ${StyledH1}
`;

export const H2 = styled(HeadingBase).attrs((props) => ({
  as: props.as || 'h2',
}))`
  ${StyledH2}
`;

export const H3 = styled(HeadingBase).attrs((props) => ({
  as: props.as || 'h3',
}))`
  ${StyledH3}
`;

export const H4 = styled(HeadingBase).attrs((props) => ({
  as: props.as || 'h4',
}))`
  ${StyledH4}
`;

export const H5 = styled(HeadingBase).attrs((props) => ({
  as: props.as || 'h5',
}))`
  ${StyledH5}
`;