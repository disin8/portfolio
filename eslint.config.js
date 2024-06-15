// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },
    rules: {
      'n/prefer-global/process': 'off',
      'regexp/no-super-linear-backtracking': 'off',
    },
  },
)
