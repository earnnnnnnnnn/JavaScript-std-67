class Song{
    constructor(litle,artist) {
        this.litle = litle;
        this.artist = artist;
    }
}

const mySong = new Song("Bohemian Rhapsody","Queen");
console.log(mySong.litle);
console.log(mySong.artist);
console.log(mySong.litle,mySong.artist);