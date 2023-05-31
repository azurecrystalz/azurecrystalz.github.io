---
title: Masterlist
date: 2023-05-22 21:50:01
---

<style>
.stories {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
    gap: .5em
}

.stories * {
    box-sizing: border-box
}

.story {
    position: relative;
    border-radius: .25em;
    overflow: hidden !important
}

.stories a:hover {
    color: #fff !important
}

.story:hover img {
    transform: scale(1.05)
}

.story:hover .storyName {
    transform: translate(0,0)
}

.story:hover .storyName .read {
    transform: translate(0,0)
}

.storyName {
    transform: translate(0,0)
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .2s ease;
    margin: 0!important
}

.storyName {
    font-size: .9em;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(to bottom,transparent 0,#000000a3 90%) !important;
    color: #fff !important;
    position: absolute;
    padding: 5em .75em .75em !important;
    width: 100%;
    bottom: 0;
    left: 0;
    transition: .2s ease !important;
    transform: translate(0,2.3em)
}

.storyName .read {
    margin-top: .25em;
    font-size: .85em;
    background: #000;
    color: #fff;
    padding: .5em 1.25em;
    height: 2.25em;
    border-radius: .25em;
    width: 100%;
    text-align: center;
    transition: .2s ease;
    transform: translate(0,1em)
}

.storyName .read:before {
    content: "Read"
}

.storyName .read.soon {
    opacity: .5;
    pointer-events: none
}

.storyName .read:not(.soon):hover {
    color: #F486AA
}

@keyframes rotate {
  0% {transform: rotate(0)}
  25% {transform: rotate(90deg)}
  50% {transform: rotate(180deg)}
  75% {transform: rotate(270deg)}
  100% {transform: rotate(360deg)}
}

#songs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 15px;
}

#songs .song-item {
  width: 200px;
}

#songs .song-figure {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-block-start: 0em;
  margin-inline-start: 0px;
}

#songs .song-figure .song-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transition: transform 1.33s, filter: 0.2s;
}

#songs .song-figure .song-image.rotate {
  animation: rotate 12s linear 0s infinite forwards;
}

#songs .song-figure .song-caption:link, #songs .song-figure .song-caption:visited {
  color: var(--V98);
}

#songs .song-figure:hover > .song-image {
  filter: blur(4px);
}

#songs .song-figure .song-caption {
  position: absolute;
  visibility: hidden;
  display: grid;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-49%, -49%);
  z-index: 5;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
}

#songs .song-figure:hover > .song-caption {
  visibility: visible;
}

@media only screen and (max-width: 600px) {
    .stories {
        grid-template-columns:repeat(auto-fill,minmax(100px,1fr))
    }

    #songs {
      grid-template-columns: 1fr;
      justify-content: center;
    }

    #songs .song-item {
      width: 100%;
      margin-bottom: 5%;
    }

    #songs .song-figure {
      margin: auto;
      width: 60vw;
      height: 60vw;
    }

    #songs .song-figure .song-image {
      width: 100%;
      height: 100%;
    }

    #songs .song-figure .song-caption {
      visibility: visible;
      width: 80vw;
      height: 80vw;
    }
}
@import url('https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap');

  :root {
    --d: 700ms;
    --e: cubic-bezier(0.19, 1, 0.22, 1);
    --font-sans: 'Rubik', sans-serif;
    --font-serif: 'Cardo', serif;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    display: grid;
    place-items: center;
  }

  .page-content {
    padding: 1rem;
    font-family: var(--font-sans);
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1%;
  }
  .item {
    position: relative;
    color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    overflow: hidden;
    border-radius: 10px;
    font-size: 0.8rem;
    height: 300px;
    cursor: pointer;
    display: block;
    margin: 0;
  }
  .item::before {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, #000000bb);
  }
  .item-container-link {
    position: absolute;
    z-index: 2;
    display: block;
    height: 100%;
    transform: translateY(20px);
  }
  a:link.item-container-link, a:visited.item-container-link {
    z-index: 2;
    color: white;
    transition: transform 0.3s;
  }
  a:hover.item-container-link, a:active.item-container-link {
    z-index: 2;
    background: none;
  }
  .item-container {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-end;
    padding: 1px 5px 5px 10px;
    box-sizing: border-box;
  }
  .read {
    display: block;
    width: 100%;
    text-decoration: none;
    text-align: center;
    background: black;
    color: white;
    height: 20px;
    border-radius: 3px;
    font-weight: 600;
  }
  .item:hover a:link.item-container-link, .item:hover a:visited.item-container-link, .item:hover a:active.item-container-link, .item:hover a:hover.item-container-link {
    /* hover effect */
    transform: translateY(2px);
  }

  @media (max-width: 768px) {
    .grid-container {
      display: block;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 2%;
      background-position-y: 20%;
      height: 100px;
    }
    .item-container-link {
      transform: translateY(0);
    }
    .title h2 {
      margin:0;
      margin-bottom:5px;
    }
    .item::before {
      background-image: linear-gradient(to right, transparent, #000000bb);
    }
    .item-container {
      width: 100%;
      transform: translateY(12px);
    }
    .title {
      text-align: right;
      margin-right: 3px;
    }
  }
</style>



<strong><p><i>Work in Progress !! Come back later to see the full list!</i></p></strong>
<h2>Featured Scout Stories: Series 1</h2>
<main class="page-content">
  <!-- other things can go in this div -->
  <div class="grid-container">
    <!-- copy and paste this if you need more grids for other translation categories-->
    <div class="item" id="rinne" style="background-image: url('https://cdn.discordapp.com/attachments/1110345002015535124/1112496401079877652/IMG_5030.png');">
      <a href="/[STORY_URL_HERE]" class="item-container-link">
        <div class="item-container">
          <div class="title">
            <h2>The Bees Knees (Unadded)</h2>
          </div>
        </div>
      </a>
    </div>
    <div class="item" id="himeru" style="background-image: url('https://cdn.discordapp.com/attachments/1110345002015535124/1112496004462284910/IMG_5023.png');">
      <a href="/[STORY_URL_HERE]" class="item-container-link">
        <div class="item-container">
          <div class="title">
            <h2>Past, Present, And... (Unadded)</h2>
          </div>
        </div>
      </a>
    </div>
    <div class="item" id="niki" style="background-image: url('https://media.discordapp.net/attachments/1110345002015535124/1112496782526652456/IMG_5029.png?width=1664&height=844');">
      <a href="/[STORY_URL_HERE]" class="item-container-link">
        <div class="item-container">
          <div class="title">
            <h2>A Recipe for Idols (Unadded)</h2>
          </div>
        </div>
      </a>
    </div>
    <div class="item" id="kohaku" style="background-image: url('https://cdn.discordapp.com/attachments/1110345002015535124/1112497250531295333/IMG_5024.png');">
      <a href="/2023/05/24/sakura-sakura/" class="item-container-link">
        <div class="item-container">
          <div class="title">
            <h2>Sakura, Sakura</h2>
          </div>
        </div>
      </a>
    </div>
    <div class="item" id="hinata" style="background-image: url('https://media.discordapp.net/attachments/1110345002015535124/1112498271919812759/hina_fs.webp?width=1664&height=906');">
      <a href="/[STORY_URL_HERE]" class="item-container-link">
        <div class="item-container">
          <div class="title">
            <h2>Daybreak Heliolite (Unadded)</h2>
          </div>
        </div>
      </a>
    </div>
    <div class="item" id="yuuta" style="background-image: url('https://media.discordapp.net/attachments/1110345002015535124/1112497800547147958/IMG_5026.png?width=1664&height=794');">
      <a href="/[STORY_URL_HERE]" class="item-container-link">
        <div class="item-container">
          <div class="title">
            <h2>Twilight Malachite (Unadded)</h2>
          </div>
        </div>
      </div>
    </a>
  </div>
  <h2>Featured Scout Stories: Series 2</h2>
  <!-- other things can go in this div -->
  <div class="grid-container">
    <!-- copy and paste this if you need more grids for other translation categories-->
    <div class="item" id="rinne" style="background-image: url('https://media.discordapp.net/attachments/1110345002015535124/1113279959797092442/IMG_5082.png?width=1664&height=768');">
      <a href="[URL LINK HERE]" class="item-container-link">
        <div class="item-container">
          <div class="title">
            <h2>A New Game Making the Rounds (Unadded)</h2>
          </div>
        </div>
      </a>
    </div>
    <div class="item" id="niki" style="background-image: url('https://media.discordapp.net/attachments/1110345002015535124/1113279960166170714/IMG_5083.png?width=1664&height=768');">
      <a href="/2023/05/22/bon-appetit/" class="item-container-link">
        <div class="item-container">
          <div class="title">
            <h2>Bon Appetit!</h2>
          </div>
        </div>
      </a>
    </div>
  </div>
  <h2> ES 4* Stories: Series 2</h2>
  <!--- aaaa --->
  <div class="grid-container">
    <!-- copy and paste this if you need more grids for other translation categories-->
    <div class="item" id="rinne" style="background-image: url('https://media.discordapp.net/attachments/1110345002015535124/1112562619598000138/IMG_5041.png?width=1664&height=796');">
      <a href="/2023/05/16/please-god/" class="item-container-link">
        <div class="item-container">
          <div class="title">
            <h2>Please, God ☆</h2>
          </div>
        </div>
      </a>
    </div>
    <div class="item" id="himeru" style="background-image: url('https://cdn.discordapp.com/attachments/1110345002015535124/1112563053167382568/IMG_5043.png');">
      <a href="/2023/05/15/runrun-calamity/" class="item-container-link">
        <div class="item-container">
          <div class="title">
            <h2>The Runrun Calamity</h2>
          </div>
        </div>
      </a>
    </div>
    <div class="item" id="niki" style="background-image: url('https://media.discordapp.net/attachments/1110345002015535124/1112562620285861978/IMG_5042.png?width=1664&height=796');">
      <a href="/2023/05/15/sweetsroad/" class="item-container-link">
        <div class="item-container">
          <div class="title">
            <h2>Sweets Road</h2>
          </div>
        </div>
      </a>
    </div>
    <div class="item" id="kohaku" style="background-image: url('https://media.discordapp.net/attachments/1110345002015535124/1112562620801765407/IMG_5044.png?width=1664&height=804');">
      <a href="/2023/05/21/a-curious-step-forward/" class="item-container-link">
        <div class="item-container">
          <div class="title">
            <h2>A Curious Step Forward</h2>
          </div>
        </div>
      </a>
    </div>
  </div>
  <h2>Event Stories</h2>
  <!--- aaaa --->
  <div class="grid-container">
    <!-- copy and paste this if you need more grids for other translation categories-->
    <div class="item" id="rinne" style="background-image: url('https://media.discordapp.net/attachments/1110345002015535124/1113227518003130438/IMG_5072.webp?width=1664&height=870');">
      <a href="/2023/05/30/rinne-climax/" class="item-container-link">
        <div class="item-container">
          <div class="title">
            <h2>Rinne Climax (Unadded)</h2>
          </div>
        </div>
      </a>
    </div>
    <div class="item" id="kohaku" style="background-image: url('https://64.media.tumblr.com/9a1b149e13c261bce9f52c62a77de139/0f6d911902a54eb8-78/s1280x1920/e58f7f31a81508f3e2cc7316fc0d1a0537181f2d.png');">
      <a href="/2023/05/27/spider-direc/" class="item-container-link">
        <div class="item-container">
          <div class="title">
            <h2>Spider (Unadded)</h2>
          </div>
        </div>
      </a>
    </div>
  <!-- more translation categories can go here -->
</main>

<div>
  <h2>Other Idols</h2>
  <sup><i> card code by <a href="https://twitter.com/findermao">findermao</a></i></sup>
  <div class="stories">
  <div class="story">
    <div class="image">
      <img src="https://cdn.discordapp.com/attachments/1110345002015535124/1113281201462067290/IMG_5084.png" alt="Idol Birthdays">
    </div>
    <a href="/2023/05/25/idol-bday-list/" class="storyName" target="_blank">
      <span>Idol Birthdays</span> 
      <span class="read"></span>
    </a>
  </div>
  <div class="story">
    <div class="image">
      <img src="https://media.discordapp.net/attachments/1110345002015535124/1111437660175736842/IMG_4924.png?width=828&height=1036" alt="A Story That's Mine Alone">
    </div>
    <a href="/2023/05/25/a-story-thats-mine-alone/" class="storyName" target="_blank">
      <span>A Story That's Mine Alone</span> 
      <span class="read"></span>
    </a>
  </div>
<!-- add sections above this point -->
<!--- 
story template looks like this:
      <div class="story">
      <div class="image">
        <img src="[UNBL-URL]" alt="[STORY NAME]">
      </div>
      <a href="[STORY URL]" class="storyName" target="_blank">
        <span>Example</span> 
        <span class="read">
        </span>
      </a>
      </div>
    </div>
    --->
</div>
  
  <h2>Song Translations</h2>
  <div id="songs">
    <div class="song-item">
        <figure class="song-figure">
          <a href="/2023/05/30/trip-album/" class="song-caption">
            <figcaption>
              <h4>TRIP</h4>
              <p>Album</p>
            </figcaption>
          </a>
          <img src="https://cdn.discordapp.com/attachments/1064543219989356684/1113215210157772982/image.png" class="song-image rotate" />
        </figure>
      </div>
    <div class="song-item">
      <figure class="song-figure">
        <a href="/2023/05/22/turbulent-storm/" class="song-caption">
          <figcaption>
            <h4>Turbulent Storm</h4>
            <p>(Game ver)</p>
          </figcaption>
        </a>
        <img src="https://cdn.discordapp.com/attachments/1110345002015535124/1111473327161217085/image.png" class="song-image rotate" />
      </figure>
    </div>
    <!--- more songs go here --->
  </div>
</div>
