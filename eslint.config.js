import { includeIgnoreFile } from '@eslint/compat';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');
const prettierignorePath = path.resolve(__dirname, '.prettierignore');

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  eslintConfigPrettier,
  includeIgnoreFile(gitignorePath),
  includeIgnoreFile(prettierignorePath),
  {
    ignores: [
      '**/dist/*',
      'tsconfig.json',
      'tsconfig.app.json',
      'tsconfig.node.json',
      'changelog.config.cjs',
    ],
  },
];
