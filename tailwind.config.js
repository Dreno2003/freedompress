// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
    content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
    theme: {
        extend: {
            width: {
                'iw': '15.5vw',
                'wi': '96vw',
                'product-width': '28.75vw',
                'us-width': '25.8vw',
                'hero-width': '92vw',
                'cards-width': '43.5vw',
                'cards-widths': '20.5vw',
                'cards-width-b': '34.3em',
                'form-width': '43rem'
            },

            height: {
                'iv': '56vh',
                'product-h-mobile': '79.6vw',
                'product-height': '19em',
                'about-img-h': '29.5em'
            },

            padding: {
                13: '2.62rem'
            },
            borderWidth: {
                3: '3.5px'
            },

            inset: {
                'about-b': '50vh'
            },

            backgroundImage: {
                'about-hero-img': "url('/public/resources/images/herosectionimg/about.jpg')"
            }
        },
    },
    plugins: [],
}