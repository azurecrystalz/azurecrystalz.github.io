---
title: ''
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
</style>

<div>
  <i><strong>Work in Progress !! Come back later to see the full list!</i></strong>
  <h2>Featured Scout Stories: Series 1</h2>
  <h5>Crazy:B</h5>
  <div class="stories">
  <div class="story">
      <div class="image">
        <img src="https://media.discordapp.net/attachments/1110345002015535124/1111078108192317471/rinnefs1.png?width=828&height=1036" alt="The Bees Knees">
      </div>
      <a href="[STORY-URL]" class="storyName" target="_blank">
        <span>The Bees Knees (Unadded)</span>
        <span class="read"></span>
      </a>
    </div>
    <div class="story">
      <div class="image">
        <img src="https://media.discordapp.net/attachments/1110345002015535124/1111078107248599102/himerufs.png?width=828&height=1036" alt="Past, Present, and...">
      </div>
      <a href="[STORY-URL]" class="storyName" target="_blank">
        <span>Past, Present, and... (Unadded)</span>
        <span class="read"></span>
      </a>
    </div>
    <div class="story">
      <div class="image">
        <img src="https://media.discordapp.net/attachments/1110345002015535124/1111078108569800704/nikifs.png?width=828&height=1036" alt="A Recipe for Idols">
      </div>
      <a href="[STORY-URL]" class="storyName" target="_blank">
        <span>A Recipe for Idols (Unadded)</span>
        <span class="read"></span>
      </a>
    </div>
    <div class="story">
      <div class="image">
        <img src="https://media.discordapp.net/attachments/1110345002015535124/1111078108842426438/28Amber-Colored_Blossom_in_Bloom29_Kohaku_Oukawa_Frameless.webp?width=828&height=1036" alt="Sakura, Sakura">
      </div>
      <a href="/2023/05/24/sakura-sakura/" class="storyName" target="_blank">
        <span>Sakura, Sakura</span>
        <span class="read"></span>
      </a>
    </div>
  </div>
  <h5>2wink</h5>
  <div class="stories">
  <div class="story">
      <div class="image">
        <img src="https://media.discordapp.net/attachments/1110345002015535124/1111078107651248168/hinafsunb.png?width=828&height=1036" alt="Daybreak Heliolite">
      </div>
      <a href="[STORY-URL]" class="storyName" target="_blank">
        <span>Daybreak Heliolite (Unadded)</span>
        <span class="read"></span>
      </a>
    </div>
    <div class="story">
      <div class="image">
        <img src="https://media.discordapp.net/attachments/1110345002015535124/1111078107907096616/yuutafsunbl.png?width=828&height=1036" alt="Twilight Malachite">
      </div>
      <a href="[STORY-URL]" class="storyName" target="_blank">
        <span>Twilight Malachite (Unadded)</span>
        <span class="read"></span>
      </a>
    </div>
  </div>
  <h2>Featured Scout Stories: Series 2</h2>
  <h5>Crazy:B</h5>
  <div class="stories">
  <div class="story">
      <div class="image">
        <img src="https://cdn.discordapp.com/attachments/1110345002015535124/1111076764681244713/ezgif.com-gif-maker_1.gif" alt="A New Game Making the Rounds">
      </div>
      <a href="[STORY-LINK]" class="storyName" target="_blank">
      <!-- maybe turn fs2 img into gif if it works -->
        <span>A New Game Making the Rounds (Unadded)</span>
        <span class="read"></span>
      </a>
    </div>
    <div class="story">
      <div class="image">
        <img src="https://cdn.discordapp.com/attachments/1110345002015535124/1111455138008289340/ezgif.com-gif-maker_3.gif" alt="Bon Appetit">
      </div>
      <a href="https://azurecrystalz.github.io/2023/05/22/bon-appetit/" class="storyName" target="_blank">
        <span>Bon Appetit!</span>
        <span class="read"></span>
      </a>
    </div>
    </div>
  <h2>ES 4* Stories: Series 2</h2>
  <h5>Crazy:B</h5>
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
    </div>
    <h2>Other Idols</h2>
    <div class="stories">
    <div class="story">
      <div class="image">
        <img src="https://media.discordapp.net/attachments/1110345002015535124/1111437660175736842/IMG_4924.png?width=828&height=1036" alt="A Story That's Mine Alone">
      </div>
      <a href="/2023/05/25/a-story-thats-mine-alone/" class="storyName" target="_blank">
        <span>A Story That's Mine Alone</span> 
        <span class="read">
        </span>
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
        <a href="/2023/05/22/turbulent-storm/" class="song-caption">
          <figcaption>
            <h4>Turbulent Storm</h4>
            <p>(Game ver)</p>
          </figcaption>
        </a>
        <img src="https://cdn.discordapp.com/attachments/1110345002015535124/1111473327161217085/image.png" class="song-image rotate" />
      </figure>
    </div>
    <div class="song-item">
      <figure class="song-figure">
        <a href="/#" class="song-caption">
          <figcaption>
            <h4>LEMON SQUASH CHEERS!</h4>
            <p>(Full Ver.)</p>
          </figcaption>
        </a>
        <img src="https://cdn.discordapp.com/attachments/1110345002015535124/1111473390025453678/image.png" class="song-image rotate" />
      </figure>
    </div>
  </div>
</div>
