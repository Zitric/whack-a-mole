import styled from 'styled-components'
import {
  space,
  layout,
  color,
  LayoutProps,
  ColorProps,
  SpaceProps,
  FlexboxProps,
  PositionProps,
  BorderRadiusProps,
  flexbox,
  position,
  borderRadius,
  shadow,
  ShadowProps,
  grid,
  GridProps,
} from 'styled-system'

interface BoxProps
  extends LayoutProps,
    ColorProps,
    SpaceProps,
    FlexboxProps,
    ShadowProps,
    PositionProps,
    BorderRadiusProps,
    GridProps {}

export const Box = styled.div<BoxProps>`
  ${color}
  ${layout}
  ${space}
  ${flexbox}
  ${position}
  ${borderRadius}
  ${shadow}
  ${grid}
`
