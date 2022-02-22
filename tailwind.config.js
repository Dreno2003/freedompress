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
                'us-width': '25.8vw'
            },

            height: {
                'iv': '56vh',
                'product-h-mobile': '79.6vw',
                'product-height': '19em',
                'about-img-h': '29.5em'
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