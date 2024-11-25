import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.node },
   rules: {
    'no-unused-vars': 'warn',
    'semi' : ['warn','always']

   }
  },
  
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];