export const commands = {
  RM_MODULES: 'npx rimraf --glob **/node_modules',
  AUTO_CRLF: 'git config core.autocrlf false',
  RM_CACHE: 'git rm --cached -r .',
  RESET: 'git reset --hard',
  ADD_VITE: 'pnpm create vite@latest',
  ADD_NEXT: 'pnpm create next-app',
  APITREE_ESLINT: 'pnpm install @apitree.cz/eslint-config@next',
  TO_BASE64: `node -e "console.log(Buffer.from(\'token\').toString('base64'))"`
} as const;
