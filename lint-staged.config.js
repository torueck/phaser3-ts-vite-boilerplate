module.exports = {
  // JavaScript: eslint
  'src/**/*.{js,jsx}': ['eslint --ignore-path .gitignore'],
  // TypeScript: eslint + type check
  'src/**/*.{ts,tsx,vue}': [
    'eslint --ignore-path .gitignore',
    () => 'tsc --skipLibCheck --noEmit',
  ],
};
