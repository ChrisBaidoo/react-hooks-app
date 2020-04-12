import React, {useState} from 'react';
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'almost home', id: 1},
        {title: 'home alone', id: 2},
        {title: 'take me home', id: 3}
    ])

    const addSong = (title) => {
        setSongs([...songs, {title, id: uuid()}])
    }

    

    return (
        <div className="song-list">
            <ul>
             {songs.map(song => {
                 return <li key={song.id}>{song.title}</li>
             })}
            </ul>
            <NewSongForm addSong={addSong}/>
             {/* <button onClick={addSongs}>Add Songs</button> */}
        </div>
      );
}
 
export default SongList;