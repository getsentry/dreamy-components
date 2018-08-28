//this is a subset of the Sentry theme.

const theme = {
  // Colors
  offWhite: '#FAF9FB',
  offWhite2: '#E7E1EC',
  whiteDark: '#fbfbfc',
  white: '#FFFFFF',

  gray1: '#BDB4C7',
  gray2: '#9585A3',
  gray3: '#645574',
  gray4: '#4A3E56',
  gray5: '#302839',
  gray6: '#AFA3BB', // form disabled

  blue: '#3B6ECC',
  blueLight: '#628BD6',
  blueDark: '#2F58A3',

  green: '#57be8c',
  greenLight: '#71D8A6',
  greenDark: '#3EA573',
  greenTransparent: 'rgba(87, 190, 140, 0.5)',

  yellow: '#ecc844',
  yellowLightest: '#FFFDF7',
  yellowLight: '#FFF15E',
  yellowDark: '#e6bc23',

  yellowOrange: '#f9a66d',
  yellowOrangeLight: '#FFC087',
  yellowOrangeDark: '#E08D54',

  orange: '#ec5e44',
  orangeLight: '#FF785E',
  orangeDark: '#D3452B',

  red: '#e03e2f',
  redLight: '#FA5849',
  redDark: '#C72516',

  pink: '#F868BC',
  pinkLight: '#FF82D6',
  pinkDark: '#DF4FA3',

  purple: '#6C5FC7',
  purple2: '#6f617c', // This is from event-details
  purpleLightest: '#9F92FA',
  purpleLight: '#8679E1',
  purpleDark: '#5346AE',
  purpleDarkest: '#392C94',

  borderLighter: '#f9f6fd',
  borderLight: '#E2DBE8',
  borderDark: '#D1CAD8',
  borderRadius: '10px',

  dropShadowLight: '0 2px 0 rgba(37, 11, 54, 0.04)',
  dropShadowHeavy: '0 1px 4px 1px rgba(47,40,55,0.08), 0 4px 16px 0 rgba(47,40,55,0.12)',

  background: '#fff',

  alert: {
    default: {
      backgroundLight: '#FAF9FB',
      background: '#BDB4C7',
      border: '#E2DBE8',
    },
    info: {
      backgroundLight: '#F5FAFE',
      border: '#B5D6ED',
    },
    attention: {
      backgroundLight: '#ECBFA6',
      background: '#F09E71',
      border: '#D0816D',
    },
    warning: {
      backgroundLight: '#FFFDF7',
      background: '#f9a66d',
      border: '#E1D697',
    },
    success: {
      backgroundLight: '#F8FCF7',
      background: '#57be8c',
      border: '#BBD6B3',
    },
    error: {
      backgroundLight: '#FDF6F5',
      background: '#e03e2f',
      border: '#E7C0BC',
      textLight: '#92635f',
    }
  },

  text: {
    family: '"Rubik", "Avenir Next", sans-serif',
    familyMono: 'Monaco, Consolas, "Courier New", monospace',
    lineHeightHeading: '1.15',
    lineHeightBody: '1.4',
  },
};

export default theme;
