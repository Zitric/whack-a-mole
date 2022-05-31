import {
  typography,
  textStyle,
  TypographyProps,
  TextStyleProps,
  color,
  ColorProps,
} from 'styled-system'
import styled from 'styled-components'

interface Props extends TypographyProps, TextStyleProps, ColorProps {}

/**
 * Use `textStyle="body"` to apply a consistent style to your typography
 * Documentation for styled-system here: https://styled-system.com/api#typography
 */
export const Typography = styled.p<Props>`
  margin: 0;

  ${typography};
  ${color};
  ${textStyle};
`
