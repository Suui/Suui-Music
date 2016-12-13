const MusicClient = require('../../controller/musicClient');
const should = require('chai').should();

describe('The music client', () => {
    
    it('should retrieve all the album titles', () => {
        const client = MusicClient();
        const albumTitles = client.getAlbumTitles();

        albumTitles.length.should.equal(3);
    });
});