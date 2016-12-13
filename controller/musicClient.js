const fs = require('fs');

module.exports = function MusicClient() {

    const getAlbumTitles = () => {
        return fs.readdirSync('S:/Desktop/Suui Music');
    };

    return {
        getAlbumTitles
    };
};