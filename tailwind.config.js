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
                'iw': '15.5vw'
            },

            borderWidth: {
                3: '3.5px'
            }
        },
    },
    plugins: [],
}