---
title: Idol Birthday Translation List
date: 2023-05-25 21:54:00
categories:
tags:
---

<div class="preview-wrapper reverse" style="--storyColor: #hex;--storyColor-rgb: r,g,b;--storyColor-h: hue;--storyColor-s: saturation%;--storyColor-l: lightness%;">
  <div class="grid-wrapper">
      <div class="preview-background" style="background-image: url('[IMG URL]')"></div>
      <div class="preview-box" style="background: calc(var(--card-background) + 2%)">
          <div class="info-area">
              <div class="synopsis" style="width: 90%;">
                A post compiling all the translations for Idol Birthdays I've done! Will update as I translate more!
              </div>
          </div>
          <div class="info-item tl">
              <div class="label">
                  Translator
              </div>
              <div class="value">
                  <a href="https://twitter.com/azurecrystalz">aurora</a>
              </div>
            </div>
        </div>
  </div>
</div>

<!-- more -->

<div style="margin-top: 3%">
  <style>
    [character] {
      --dark-mode: hsl(var(--hue), 30%, 30%);
      display: flex;
    }
    [character]::before {
      position: absolute;
      margin-left: 75px;
    }
    [character] p {
      max-width: calc(100% - 75px);
      margin-left: 75px;
      color: inherit;
    }
    :root[theme='dark'] [character] p {
      background: var(--dark-mode);
    }
    :root[theme='dark'] [character] p .thought {
      color: #9f9fff;
    }
    :root[theme='light'] [character] p {
      background: var(--light-mode);
    }
    [character] p:first-child {
      margin-top: 20px;
      border-top-left-radius: 0px;
    }
    [character] p:first-child::before {
      position: absolute;
      left: 0;
    }
    [character]::after {
      display: none;
      left: 65px;
      top: 37px;
    }
    .msr-narration {
      display: flex;
      align-items: center;
      margin: 20px 0px;
      gap: 5px;
    }
    .msr-narration::before {
      content: "";
      display: inline-block;
      background: var(--article-text);
      height: 1px;
      width: 15%;
    }
    .msr-narration p {
      margin: 0;
    }
    @media (max-width: 650px) {
    [character] p {
        margin:0 0 .4em 65px;
        padding: .72em;
        margin-left: 55px !important;
    }
    [character]::before,[character][hidden]::before,[character][unknown]::before {
        margin-left: 70px;
        margin-left: 55px !important;
    }
}    
  </style>

  <!-- CONTENT GOES HERE -->

  <!-- 
  SPEECH BUBBLE FORMAT: 
  {% bubble [CHARACTER_FIRST_NAME] [ATTRIBUTE(optional)]}
    DIALOGUE TEXT HERE

    ADD A LINE SPACE FOR A NEW LINE

    <th>EMBED THOUGHT DIALOGUE WITH THESE TAGS</th>
  {% endbubble %}
  -->

  </div>
