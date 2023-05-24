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
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

#songs .song-item {
  width: 250px;
}

#songs .song-figure {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

#songs .song-figure .song-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transition: transform 1.33s, filter: 0.2s;
}

#songs .song-figure .song-image.rotate {
  animation: rotate 6s linear 0s infinite forwards;
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
  display: flex;
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
      justify-content: center;
    }

    #songs .song-item {
      width: 100%;
      margin-bottom: 5%;
    }

    #songs .song-figure {
      margin: auto;
      width: 85vw;
      height: 85vw;
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

</style>

<div>
  Work in Progress !! Come back later to see the full list!

  <h2>ES2 4* Stories</h2>
  <div class="stories">
    <div class="story">
      <div class="image">
        <img src="https://media.discordapp.net/attachments/1110345002015535124/1110712529128271902/IMG_4865.png?width=828&height=1036" alt="Please, God">
      </div>
      <a href="/2023/05/16/please-god" class="storyName" target="_blank">
        <span>Please, God ☆</span>
        <span class="read"></span>
      </a>
    </div>
    <div class="story">
      <div class="image">
        <img src="https://media.discordapp.net/attachments/1110345002015535124/1110712529501556746/IMG_4866.png?width=828&height=1036" alt="The Runrun Calamity">
      </div>
      <a href="/2023/05/15/runrun-calamity" class="storyName" target="_blank">
        <span>The Runrun Calamity</span>
        <span class="read"></span>
      </a>
    </div>
    <div class="story">
      <div class="image">
        <img src="https://media.discordapp.net/attachments/1110345002015535124/1110712529879040051/IMG_4867.png?width=828&height=1036" alt="Sweets Road">
      </div>
      <a href="/2023/05/15/sweetsroad/" class="storyName" target="_blank">
        <span>Sweets Road</span> 
        <span class="read">
        </span>
      </a>
      </div>
    <div class="story">
      <div class="image">
        <img src="https://media.discordapp.net/attachments/1110345002015535124/1110712530193617036/IMG_4868.png" alt="A Curious Step Forward">
      </div>
      <a href="/2023/05/21/a-curious-step-forward" class="storyName" target="_blank">
        <span>A Curious Step Forward</span> 
        <span class="read">
        </span>
      </a>
      </div>
      <!---
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
    <!-- before this comment is where you'd put more stories -->
    </div>
  </div>
  
  <h2>Song Lyrics</h2>
  <div id="songs">
    <div class="song-item">
      <figure class="song-figure">
        <a href="#" class="song-caption">
          <figcaption>
            <h4>Turbulent Storm</h4>
            <p>(Game ver)</p>
          </figcaption>
        </a>
        <img src="https://i1.sndcdn.com/artworks-phdvndiqxyq4z12f-0kXmBw-t500x500.jpg" class="song-image rotate" />
      </figure>
    </div>
    <div class="song-item">
      <figure class="song-figure">
        <img src="https://i1.sndcdn.com/artworks-phdvndiqxyq4z12f-0kXmBw-t500x500.jpg" class="song-image rotate" />
        <a href="#" class="song-caption">
          <figcaption>
            <h4>Turbulent Storm</h4>
            <p>(Game ver)</p>
          </figcaption>
        </a>
      </figure>
    </div>
    <div class="song-item">
      <figure class="song-figure">
        <img src="https://i1.sndcdn.com/artworks-phdvndiqxyq4z12f-0kXmBw-t500x500.jpg" class="song-image rotate" />
        <a href="#" class="song-caption">
          <figcaption>
            <h4>Turbulent Storm</h4>
            <p>(Game ver)</p>
          </figcaption>
        </a>
      </figure>
    </div>
    <div class="song-item">
      <figure class="song-figure">
        <img src="https://i1.sndcdn.com/artworks-phdvndiqxyq4z12f-0kXmBw-t500x500.jpg" class="song-image rotate" />
        <a href="#" class="song-caption">
          <figcaption>
            <h4>Turbulent Storm</h4>
            <p>(Game ver)</p>
          </figcaption>
        </a>
      </figure>
    </div>
  </div>
</div>