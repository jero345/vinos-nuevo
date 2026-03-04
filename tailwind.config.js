/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        estate: {
          cream:    '#EEF4F0',      /* verde muy claro / casi blanco */
          beige:    '#D9E8DF',      /* verde pálido */
          stone:    '#8AAF99',      /* verde grisáceo medio */
          brown:    '#3D6B4F',      /* verde medio */
          darkbrown:'#2E4B39',      /* verde oscuro principal */
          olive:    '#4A7A5C',      /* verde acento */
          darkolive:'#1E3328',      /* verde muy oscuro */
          gold:     '#C8A96E',      /* dorado cálido — acento de contraste */
          warmwhite:'#F8FAF9',      /* blanco verdoso */
          charcoal: '#1A2B21',      /* casi negro verdoso */
        },
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans:   ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
        display:['Cormorant Garamond', 'serif'],
      },
      fontSize: {
        '7xl':  ['4.5rem',  { lineHeight: '1.05' }],
        '8xl':  ['6rem',    { lineHeight: '1' }],
        '9xl':  ['8rem',    { lineHeight: '0.95' }],
        '10xl': ['10rem',   { lineHeight: '0.9' }],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up':     'fadeUp 0.8s ease forwards',
        'fade-in':     'fadeIn 1s ease forwards',
        'scroll-down': 'scrollDown 2s ease-in-out infinite',
        'shimmer':     'shimmer 2s linear infinite',
        'grain':       'grain 8s steps(10) infinite',
        'progress':    'progress 1s ease',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollDown: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%':      { transform: 'translateY(8px)', opacity: '0.4' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%':  { transform: 'translate(-2%, -3%)' },
          '20%':  { transform: 'translate(3%, 1%)' },
          '30%':  { transform: 'translate(-1%, 4%)' },
          '40%':  { transform: 'translate(2%, -2%)' },
          '50%':  { transform: 'translate(-3%, 3%)' },
          '60%':  { transform: 'translate(1%, -1%)' },
          '70%':  { transform: 'translate(-2%, 2%)' },
          '80%':  { transform: 'translate(3%, -3%)' },
          '90%':  { transform: 'translate(-1%, 1%)' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'silk':   'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
