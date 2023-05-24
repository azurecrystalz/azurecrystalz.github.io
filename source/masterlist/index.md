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

@media only screen and (max-width: 600px) {
    .stories {
        grid-template-columns:repeat(auto-fill,minmax(100px,1fr))
    }
}
</style>

Work in Progress !! Come back later to see the full list!

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
  </div>
  <!-- this is where you'd put more stories starting with <div class="story"> -->
</div>
