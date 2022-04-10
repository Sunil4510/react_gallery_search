module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:{'max':'600px'},
      md:{'max':'992px'},
      lg:{'max':'1199px'}
    },
    extend: {
      fontFamily:{
        'superMercado':['Supermercado One', 'cursive'],
        'Acme': ['Acme', 'sans-serif'],
        'Amiri': ['Amiri', 'serif'],
       'Creep': ['Creepster', 'cursive'],
        'Great': ['Great Vibes', 'cursive'],
        'Hahmlet': ['Hahmlet', 'serif'],
        'web': ['Istok Web', 'sans-serif'],
        'lob': ['Lobster', 'cursive'],
        'Meri': ['Merienda', 'cursive'],
        'Marker': ['Permanent Marker', 'cursive'],
        'play': ['Play', 'sans-serif'],
        'Teko': ['Teko', 'sans-serif'],
        'Yellowtail': ['Yellowtail', 'cursive'],
        'BioRhyme':['BioRhyme', 'serif'],
        'Josefin':['Josefin Sans','sans-serif']
      }
    },
  },
  plugins: [],
}
