import React from "react";
import { useParams } from "react-router-dom";

const PlaylistPage = () => {
  let { id } = useParams();

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img
              src="https://images.unsplash.com/photo-1488117382278-329ccc22eecb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1324&q=80"
              alt="pic"
            />
          </div>
          <h1>Title</h1>
          <p>Spotify</p>
          <button>Play</button>
          <div className="icons">
            <div className="iconsHeart"></div>
            <div className="iconsDots"></div>
          </div>
          <p>
            Minimalist, electronica, and modern classical to concentrate to.
          </p>
        </div>
        <div className="playlistPageSongs">
          <ul>
            <li>Song 1</li>
            <li>Song 2</li>
            <li>Song 3</li>
            <li>Song 4</li>
            <li>Song 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;
