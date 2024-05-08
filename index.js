module.exports = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: "none",
  importOrder: [
    // All packages that start with @ followed by packages that start with any letter"
    "^@?\\w",
    // File Imports
    "^[./]",
  ],
  importOrderSeparation: true,
};
