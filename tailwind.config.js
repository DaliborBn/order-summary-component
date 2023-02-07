/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        redHat: ['Red Hat Display']
      },
      fontSize: {
        price: '13px'
      },
      maxWidth: {
        primary: '335px'
      },
      backgroundImage: {
        'deskBack': "url('./img/desktop.svg')"
      },
      colors: {
        paleBlue: 'hsl(225, 100%, 94%)',
        rightBlue: 'hsl(245, 75%, 52%)',
        veryPaleBlue: 'hsl(225, 100%, 98%)',
        desaturatedBlue: 'hsl(224, 23%, 55%)',
        darkBlue: 'hsl(223, 47%, 23%)',
        shadowColor: 'hsla(245, 75%, 52%, 0.100)',
        btnShadowColor: 'hsla(244, 55%, 74%, 0.664)'
      },
      boxShadow: {
        primary: '0.5px 10px 15px 5px',
        btn: '0px 8px 15px'
      }
    },
  },
  plugins: [],
}
