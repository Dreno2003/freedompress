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
                'iv': '56vh'
            },

            borderWidth: {
                3: '3.5px'
            }
        },
    },
    plugins: [],
}