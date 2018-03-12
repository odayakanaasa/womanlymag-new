import { transparentize } from 'polished';

const blue = '#8fc3e9';
const black = '#000';
const pink = '#EECFCE';
const red = '#f26a5c';
const orange = '#D46A43';

export default {
  accent: pink,
  inputBgFocusColor: transparentize(0.85, blue),
  inputBorderColor: transparentize(0.75, black),
  errorBackgroundColor: transparentize(0.85, red),
  errorColor: red,
  labelColor: transparentize(0.25, black),
  linkHoverColor: blue,
  mobileMax: '767px',
  mobileNavBackground: pink,
  navLinkHoverBorder: blue,
  sansSerifFont: '"Yantramanav",sans-serif',
  text: black,
  warningColor: orange,
};
