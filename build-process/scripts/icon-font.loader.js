const glob = require('glob');
const path = require('path');

const { BASE_DIR } = require('../constants');
const scss = path.resolve(BASE_DIR, 'src/assets/scss/');
const fonts = path.resolve(BASE_DIR, 'src/assets/fonts/icons');
const iconsPath = path.resolve(BASE_DIR, 'src/assets/icons');
const iconsCssTemplatePath = path.resolve(BASE_DIR, 'src/assets/templates/icon-font-loader-css-template.hbs');
const webfontsGenerator = require('webfonts-generator');

generateWebFonts();

function generateWebFonts() {
    console.log('Starting webfont generation'); // eslint-disable-line

    return webfontsGenerator({
        files: glob.sync(path.join(iconsPath, '*.svg')),
        dest: fonts,
        css: true,
        cssTemplate: iconsCssTemplatePath,
        cssDest: path.join(scss, 'common', '_icons.scss'),
        cssFontsUrl: '/assets/fonts/icons/',
        fontName: 'iconsfont',
        html: false,
        templateOptions: {
            baseSelector: '.icon',
            classPrefix: 'icon-'
        }
    }, (error) => {
        if (error) {
            console.log('Webfont generation fail!', error); // eslint-disable-line
        } else {
            console.log('Webfont generation Done!'); // eslint-disable-line
        }
    });
}
