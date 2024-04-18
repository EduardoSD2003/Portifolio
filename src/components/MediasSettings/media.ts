interface Size {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

const size: Size = {
    xs: '200px', // for small screen mobile
    sm: '430px', // for mobile screen
    md: '700px', // for tablets
    lg: '1030px', // for laptops
    xl: '1440px', // for desktop / monitors
    xxl: '1500px', // for big screens
  }

  export const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(min-width: ${size.xs}) and (max-width: ${size.md})`,
    md: `(min-width: ${size.md}) and (max-width: ${size.lg})`,
    lg: `(min-width: ${size.lg}) and (max-width: ${size.xxl})`,
    xl: `(max-width: ${size.xl})`,
    xxl: `(max-width: ${size.xxl})`,
  }