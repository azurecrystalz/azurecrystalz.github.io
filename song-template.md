---
title: 
date:
categories:
- Enstars
tags:
- Songs
---

<div class="preview-wrapper reverse" style="--storyColor: #hex;--storyColor-rgb: r,g,b;--storyColor-h: hue;--storyColor-s: saturation%;--storyColor-l: lightness%;">
  <div class="grid-wrapper">
      <div class="preview-background" style="background-image: url('INSERT URL HERE')"></div>
      <div class="preview-box" style="background: calc(var(--card-background) + 2%)">
          <div class="info-area">
              <div class="synopsis" style="width: 90%;">
                <!-- EXPLANATION GOES HERE !-->
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
  </style>


  <!-- CONTENT GOES HERE -->
    
  <!-- 
    TO CHANGE COLOR
    <span style="color: #89C3EB;">INSERT TEXT</span>
  -->

  </div>