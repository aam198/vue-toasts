module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended"
],
  rules: {
    "vue/multi-word-component-names": ["error", {
      "ignores": ["default", "toasts,", "Toasts"]
    }]
   }
  }