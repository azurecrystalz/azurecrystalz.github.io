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
</div>


 
 
 <!---

HEY LMAO THIS IS THE SPINNY DISK CODE PLEASE I DID MY BEST THIS IS SO HARD FJKDHSD

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mali&display=swap" rel="stylesheet">
<style>
 
@font-face {
font-family: Roboto;
src: url(fonts/Roboto-Regular.ttf) format("truetype");
}
 
a.ayud {
font-family: Roboto;
src: url(fonts/Roboto-Regular.ttf) format("truetype");
font-size:1.6em;
text-shadow: -.5px 0 #000000
, 0 1px #000000, .5px 0 #000000, 0 -1px #000000, 0 0;
color: #96bcdc;
}
 
.rotate {
animation: rotation 10s infinite linear;
}
 
@keyframes rotation {
from {
transform: rotate(0deg);
}
to {
transform: rotate(359deg);
}
}
 
figure.blurfilter{
margin: 0;
padding: 0;
display: inline-block;
position: relative;
border-radius: 50%;
overflow: hidden; /
}
 
.figcaption img {
width: 10px;
}
 
figure.blurfilter img{
display: block;
width: 240px;
height: auto;
transition: all 0.4s 0.4s;
}
 
figure.blurfilter figcaption{
position: absolute;
display: block;
text-align: center;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
text-align: center;
background: rgba(255, 255, 255, 0.25);
border-radius: 50%;
padding: 20px;
z-index: 100;
width: 90%;
height: 90%;
overflow: auto;
top: 5%;
left: 5%;
font-family: 'Roboto';
font-size: 16px;
opacity: 0;
color: white;
-moz-transition: all 0.4s;
-webkit-transition: all 0.4s;
transition: all .4s;
}
 
figure.blurfilter figcaption h3{
border-bottom: 1px solid red;
text-align: left;
width: 90%;
margin: 0;
}
 
figure.blurfilter figcaption p{
text-align: left;
margin-top: 10px;
line-height: 1.5;
}
 
figure.blurfilter figcaption a{
text-decoration: none;
}
 
figure.blurfilter:hover img{
-webkit-filter: blur(5px);
filter: blur(5px);
-webkit-transform: scale(1.3);
transform: scale(1.3);
-moz-transition: all 0.4s;
-webkit-transition: all 0.4s;
transition: all 0.4s;
}
 
figure.blurfilter:hover figcaption{
opacity: 1;
-moz-transition: all .4s .4s;
-webkit-transition: all .4s .4s;
transition: all .4s .4s;
}
 
figure.slidey figcaption{
-webkit-transform: rotateY(90deg);
transform: rotateY(90deg);
}
 
figure.slidey:hover figcaption{
-webkit-transform: rotateY(0);
transform: rotateY(0);
}
.pixel {
width: 1em !important;
filter: none !important;
display: inline-block;
}
figcaption {
overflow-y: scroll;
}

a{
-webkit-transition: all .3s ease-in-out;
-moz-transition: all .3s ease-in-out;
-o-transition: all .3s ease-in-out;
-ms-transition: all .3s ease-in-out;
transition: all .3s ease-in-out;
text-decoration: none;
 
}

a:link {
  color: #96bcdc;
  background-color: transparent;
  text-decoration: none;
}
a:visited {
  color: #96bcdc;
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  color: #6684e3;
  background-color: transparent;
  text-decoration: underline;
  webkit-filter: blur(1px);
  filter: blur(1px);
}
</style>
<figure class="blurfilter slidey">
<img src="https://i1.sndcdn.com/artworks-phdvndiqxyq4z12f-0kXmBw-t500x500.jpg" class="rotate" />
<figcaption>

<br></br>
<br></br>
<a class="ayud" href="https://azurecrystalz.github.io/2023/05/22/turbulent-storm/">Turbulent Storm</a>
<br>(Game Ver.)</br>
<br></br>
 

</figure>
--->