import React, { useState, useEffect } from "react";
import "./video-player.css";
import V1 from "./videos/v1.mp4";
import V2 from "./videos/v2.mp4";
import V3 from "./videos/v3.mp4";
import V4 from "./videos/v4.mp4";
import V5 from "./videos/v5.mp4";
import { Link } from "react-router-dom";
function VideoPlayer() {
  const [alldata, setAlldata] = useState([
    {
      url: V5,
      channel: "@traditionaltreasures",
      desc: "#tujhmekhoyarahun #song #whatsappstatus",
    },

    {
      url: V3,
      channel: "@inessagragovskaya",
      desc: "Sia -Cheap Thrills cimbaly instrumental cover",
    },
    {
      url: V1,
      channel: "@nickinstrumentalbea..",
      desc: "Best of bollywood instrumental ringtone",
    },
    {
      url: V4,
      channel: "@justa-minute",
      desc: "Mohabbatein- love theme instrumental",
    },
    {
      url: V2,
      channel: "@NUCLEAR_CLASH",
      desc: "Instrumental bgm ringtone",
    },
  ]);
  const [currplay, setCurrplay] = useState(0);
  function nextPlay() {
    if (currplay < alldata.length - 1) {
      setCurrplay(currplay + 1);
    } else {
      setCurrplay(0);
    }
  }
  function Previos() {
    if (currplay !== 0) {
      setCurrplay(currplay - 1);
    } else {
      setCurrplay(0);
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollTop === 0) {
        Previos();
      } else if (scrollTop + clientHeight === scrollHeight) {
        nextPlay();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        nextPlay();
      } else if (event.key === "ArrowUp") {
        Previos();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currplay, alldata]);

  return (
    <div className="video-main-container">
      <header>
        <div className="left">
          <i class="fa-brands fa-youtube fa-2x"></i>
          <h2>𝓨𝓸𝓾𝓣𝓾𝓫𝓮 𝓢𝓱𝓸𝓻𝓽𝓼</h2>
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <Link className="list-style" to="">
              All
            </Link>
          </li>
          <li>
            <Link className="list-style" to="">
              Trending
            </Link>
          </li>
          <li>
            <Link className="list-style" to="">
              New to you
            </Link>
          </li>
          <li>
            <Link className="list-style" to="">
              New to you
            </Link>
          </li>
          <li>
            <Link className="list-style" to="">
              Live
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <i class="fa-solid fa-chevron-left fa-3x previos" onClick={Previos}></i>
        <video src={alldata[currplay].url} controls autoPlay></video>
        <section className="video-desc">
          <div className="first">
            <i class="fa-solid fa-user-astronaut"></i>
            <h3>{alldata[currplay].channel}</h3>
            <button>Subscribe</button>
          </div>
          <div className="second">
            <h4>{alldata[currplay].desc}</h4>
          </div>
        </section>
        <section className="side-section">
          <ul>
            <li>
              <i class="fa-regular fa-thumbs-up"></i>
              <span>10M</span>
            </li>
            <li>
              <i class="fa-regular fa-thumbs-down"></i>
              <span>Dislike</span>
            </li>
            <li>
              <i class="fa-solid fa-comment-dots"></i>
              <span>10</span>
            </li>
            <li>
              <i class="fa-regular fa-share-from-square"></i>
              <span>Share</span>
            </li>
          </ul>
        </section>
        <i class="fa-solid fa-chevron-right fa-3x next" onClick={nextPlay}></i>
      </main>
      <footer>
        <ul>
          <li>
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </li>
          <li>
            <i class="fa-solid fa-camera-retro"></i>
            <span>Shorts</span>
          </li>
          <li>
            <i
              class="fa-solid fa-circle-plus fa-2x"
              style={{ color: "#4e1754" }}
            ></i>
          </li>
          <li>
            <i class="fa-solid fa-film"></i>
            <span>Subscriptopn</span>
          </li>
          <li>
            <i class="fa-solid fa-circle-user"></i>
            <span>You</span>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default VideoPlayer;
