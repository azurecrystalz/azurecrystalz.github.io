---
title: {{ title }}
date: {{ date }}
categories:
tags:
---

<div class="preview-wrapper reverse" style="--storyColor: #hex;--storyColor-rgb: r,g,b;--storyColor-h: hue;--storyColor-s: saturation%;--storyColor-l: lightness%;">
  <div class="grid-wrapper">
      <div class="preview-background" style="background-image: url('[BLOOMED_CARD_URL]')"></div>
      <div class="preview-box" style="background: calc(var(--card-background) + 2%)">
          <div class="title-area">
              <div class="title-area__title"><!-- STORY ENG TITLE --></div>
              <div class="title-area__subtitle"><!-- STORY JP TITLE --> </div>
              <div class="title-area__start"><a href="[STORY_LINK_GOES_HERE]">Start Reading</a></div>
          </div>
          <div class="info-area">
              <div class="synopsis" style="width: 90%;">
                <!-- SYNOPSIS GOES HERE -->
              </div>
              <div class="info">
                  <div class="info-item season">
                      <div class="label">
                          Season
                      </div>
                      <div class="value">
                        <!-- STORY SEASON -->
                      </div>
                  </div>
                  <div class="info-item chapters">
                      <div class="label">
                          Chapters
                      </div>
                      <div class="value">
                          <!-- NUMBER OF CHAPTERS -->
                      </div>
                  </div>
                  <div class="info-item writer">
                      <div class="label">
                          Writer
                      </div>
                      <div class="value">
                        <!-- STORY WRITER NAME -->
                      </div>
                  </div>
                  <div class="info-item characters">
                      <div class="label">
                          Characters
                      </div>
                      <div class="value">
                        <!-- 
                          <a href="/tags/[CHARACTER_LAST_NAME]-[CHARACTER_FIRST_NAME]/" character="[CHARACTER_FIRST_AME]" title="[CHARACTER_FIRST_NAME]"></a>
                         -->
                         <!-- COPY AND PASTE THE ABOVE FOR EACH CHARACTER THAT APPEARS IN THE STORY -->
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
                  <div class="info-item pr">
                      <div class="label">
                          Proofreaders
                      </div>
                      <div class="value">
                          <!-- PROOFREADER LIST (IF ANY) -->
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

<!-- more -->

<div style="margin-top: 3%">
  <style>
    [character] {
      display: flex;
    }
    [character]::before {
      position: absolute;
      margin-left: 75px;
    }
    [character] p {
      width: 100%;
      margin-left: 75px;
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