module.exports = {
  purge: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue'],
  theme: {
    fontFamily: {
      karla: ['Karla', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'outline-primary': '0 0 0 2px rgba(0, 174, 238, 0.5)',
        btn:
          '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
        img: '-4px -4px #343047, -6px -6px #8259EC',
        top: '0 0 5px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        primary: '#8259EC',
        dark: '#343047',
        secondary: '#413c5a',
        'light-grey': '#ccd6f6',
        'light-grey-secondary': '#a8a8b9',
        'lightest-gray': '#777787',
      },
      inset: {
        '8': '3rem',
      },
      height: {
        14: '3.5rem',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
