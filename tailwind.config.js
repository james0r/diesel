/** @type {import('tailwindcss').Config} */
let plugin = require('tailwindcss/plugin')
const fs = require('fs')
const theme = JSON.parse(fs.readFileSync('./theme.json'))

const themePalette = theme.settings.color.palette
const themeFontFamilies = theme.settings.typography.fontFamilies
const themeFontSizes = theme.settings.typography.fontSizes

const rem = px => `${px / 16}rem`

module.exports = {
  content: require('fast-glob').glob.sync(['./**/*.php', './src/**/*.js']),
  important: '.has-tailwind',
  corePlugins: {
    preflight: false,
  },
  safelist: themePalette.reduce((acc, color) => {
    return [
      ...acc,
      `bg-${color.slug}`,
      `hover:bg-${color.slug}/75`,
    ]
  }, []).concat([
    'tailwind',
    'text-xm',
    'text-sm',
    'text-base',
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl',
    'text-7xl',
    'text-8xl',
    'text-9xl',
    'font-overpass'
  ]),
  theme: {
    container: {
      center: true,
      // padding: {
      //   DEFAULT: '1rem',
      //   sm: '2rem',
      // },
      screens: {
        sm: `640px`,
        md: `768px`,
        lg: `1024px`,
        xl: `1280px`,
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1480px',
      // => @media (min-width: 1480px) { ... }
    },
    fontSize: themeFontSizes.reduce((acc, fontSize) => {
      return {
        ...acc,
        [fontSize.slug]: fontSize.size
      }
    }, {}),
    extend: {
      fontFamily: themeFontFamilies.reduce((acc, fontFamily) => {
        return {
          ...acc,
          [fontFamily.slug]: fontFamily.fontFamily.split(', ')
        }
      }, {
        'open-sans': ['"Open Sans"', 'sans-serif'],
      }),
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--color-neutral-400)',
            iframe: {
              width: '100%',
              height: '100%',
              aspectRatio: '16/9'
            },
            a: {
              color: 'var(--color-secondary-500)',
              '&:hover': {
                color: 'var(--color-secondary-200)',
              },
            },
          },
        },
      },
      colors: themePalette.reduce((acc, color) => {
        return {
          ...acc,
          [color.slug]: color.color,
        }
      }, {}),
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'rte'
    }),
    plugin(function ({ addVariant }) {
      addVariant('scrolled', '.scrolled &'), addVariant('mobile-menu-is-visible', '.mobile-menu-is-visible &')
    }),
  ],
}