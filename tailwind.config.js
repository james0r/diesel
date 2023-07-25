/** @type {import('tailwindcss').Config} */
let plugin = require('tailwindcss/plugin')

module.exports = {
  content: require('fast-glob').sync(['./**/*.php']),
  prefix: 'tw-',
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
    extend: {
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
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
      colors: {
        primary: 'blue',
        secondary: 'purple',
        accent: 'pink',
        neutral: 'black',
        base: 'black'
      },
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