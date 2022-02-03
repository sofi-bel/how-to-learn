module.exports = {
  extends: [
    "stylelint-config-hudochenkov/full",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss",
  ],
  plugins: [
    "stylelint-order",
    "stylelint-high-performance-animation",
    "stylelint-prettier",
    "stylelint-sass-render-errors",
  ],
  rules: {
    "unit-allowed-list": ["em", "rem", "%", "s", "vh", "vw", "px", "fr", "deg"],
    "plugin/no-low-performance-animation-properties": true,
    "prettier/prettier": true,
    "plugin/sass-render-errors": true,
  },
};
