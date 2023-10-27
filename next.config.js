/** @type {import('next').NextConfig} */
module.exports = {
    output: "export",
    images: {
        unoptimized: true
    },
    /* Add Your Scss File Folder Path Here */
    sassOptions: {
        includePaths: ['./src/styles'],
        prependData: `@import "~@/styles/fonts.scss"; @import "~@/styles/variables.scss";`,
    },
}
