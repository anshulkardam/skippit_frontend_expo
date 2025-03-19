/** @type {import('tailwindcss').Config} */
module.exports = {
   // NOTE: Update this to include the paths to all of your component files.
   content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
   presets: [require('nativewind/preset')],
   theme: {
      extend: {
         fontFamily: {
            roboto: ['Roboto-Bold', 'sans-serif'],
         },
         colors: {
            primary: '#030014',
            accent: '#AB8BFF',
         },
      },
   },
   plugins: [],
};
