songList = [];

class Song{

  constructor( songTitle, releaseDate, fileLocation) {
    this.songTitle = songTitle;
    this.releaseDate = releaseDate;
    this.fileLocation = fileLocation;
  }

  static getSong(songID) {
    const index = songList.findIndex(x => x.songID === songID);
    if (index > -1) {
      return songList[index];
    }else {
      throw new Error("Unable to find the song!");
    }
  }

  save() {
    this.id = Math.random().toString();
    songList.push(this);
    return this;
  }

  getFileLocation(){
    return this.fileLocation;
  }

  static fetchAll() {
    return songList;
  }
}


new Song("Spider",new Date(1995, 11, 17).toString(),"C:something").save();
new Song("Hypnotize",new Date(1985, 12, 10).toString(),"C:something").save();
new Song("Chop Shuye",new Date(2002, 6, 17).toString(),"C:something").save();
new Song("Lonely Day",new Date(2005, 10, 2).toString(),"C:something").save();
new Song("Bulbuli",new Date(1985, 11, 24).toString(),"C:something").save();
new Song("Pasoori",new Date(2022, 1, 16).toString(),"C:something").save();
new Song("Tom's Diner",new Date(1991, 11, 17).toString(),"C:something").save();
new Song("Nasek Nasek",new Date(1995, 11, 17).toString(),"C:something").save();


module.exports = Song;
