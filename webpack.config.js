const path = require('path');

module.exports ={
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path    : path.join(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.jpe?g$/,
                use : [
                    "file-loader"
                ]
            }
            // {
            //     test: /\.js$/,
            //     use : "babel-loader"
            // },
            // {
            //     test: /\.css$/,
            //     use : [
            //         {
            //            loader: "style-loader"
            //         },
            //         {
            //            loader: "css-loader"
            //         }
            //     ]
            // }
        ]
    }
}