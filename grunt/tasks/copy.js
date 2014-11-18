module.exports = {
    images: {},
    modernizr: {
        files: [
            {
              expand: true,
              src: ['<%=paths.assets.js%>/libs/modernizr.js'],
              dest: '<%=paths.dist.js%>/',
              rename: function (destBase, destPath, options) {
                return destBase + destPath.replace('\.\/src\/js', '');
              }
            }
        ]
    },
    fonts: {}
};