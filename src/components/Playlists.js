import React from "react";
import { ReactComponent as PlayIcon } from "../svgs/play.svg";

const Playlists = (props) => {
  const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: "Home Playlist 1",
      img:
        "https://images.unsplash.com/photo-1488117382278-329ccc22eecb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1324&q=80",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos magni dolore necessitatibus dolores optio.",
    },
    {
      id: 102,
      category_id: 3,
      name: "Home Playlist 2",
      img:
        "https://images.unsplash.com/photo-1471560090527-d1af5e4e6eb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home Playlist 3",
      img:
        "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, ullam?",
    },
    {
      id: 104,
      category_id: 1,
      name: "Focus Playlist 1",
      img:
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      desc: "Lorem, ipsum.",
    },
    {
      id: 105,
      category_id: 4,
      name: "Sunday Playlist",
      img:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 106,
      category_id: 2,
      name: "Mood Playlist 1",
      img:
        "https://images.unsplash.com/photo-1531574373289-ad0d66e39ba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      id: 107,
      category_id: 2,
      name: "Mood Playlist 2",
      img:
        "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quidem natus?",
    },
  ];

  const matchedPlaylists = dataPlaylists.filter(
    (playlist) => playlist.category_id === props.category_id
  );
  console.log(matchedPlaylists);

  return (
    <div>
      <div className="cardsWrapInner">
        {matchedPlaylists.map((playlist) => (
          <div className="card">
            <div className="cardImage">
              <img src={playlist.img} alt={playlist.name} />
            </div>
            <div className="cardContent">
              <h3>{playlist.name}</h3>
              <span>{playlist.desc}</span>
            </div>
            <span className="playIcon">
              <PlayIcon />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
