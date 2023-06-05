module.exports = {
  // 根配置文件
  root: true,
  // 支持检测
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  // 一些集合，集成规则
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "prettier",
    "@vue/eslint-config-prettier"
  ],
  parserOptions: {
    // 编译器选项
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021
  },
  rules: {
    // 一些规则，全部下掉
    // eslint 自带的
    "no-unused-vars": "off",
    // vue的检测
    "vue/no-unused-vars": "off",
    // ts 的检测
    "@typescript-eslint/no-unused-vars": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false, //单引号
        tabWidth: 2,// tab对应几个空格
        indent: 2,//缩进2个空格
        semi: false,//行末要不要加分号
        trailingComma: "none",//对象最后一个属性后面是否要逗号
        endOfLine: "auto",//行尾的换行符
      }
    ],
  },
  // FIXME: 定义成一个全局变量，就不报错了
  globals: {
    defineProps: "readonly"
  }
}