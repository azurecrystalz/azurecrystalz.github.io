<div class="preview-wrapper reverse" style="--storyColor: #hex;--storyColor-rgb: r,g,b;--storyColor-h: hue;--storyColor-s: saturation%;--storyColor-l: lightness%;">
  <div class="grid-wrapper">
      <div class="preview-background" style="background-image: url('[IMG-URL]')"></div>
      <div class="preview-box" style="background: calc(var(--card-background) + 2%)">
          <div class="title-area">
              <div class="title-area__title">[POST TITLE]</div>
              <div class="title-area__start"><a href="[STORY-URL]">Start Reading</a></div>
          </div>
          <div class="info-area">
              <div class="info">
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
                          N/A
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
    .hint--error.hint--top-left:before, .hint--error.hint--top-right:before, .hint--error.hint--top:before {
    border-top-color: #6a3446;
    }
    .hint--error:after {
    background-color: #6a3446;
    text-shadow: 0 -1px 0px #592726;
    }
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
    .msr-line {
      margin-bottom:10px;
    }
    .photos {
         display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
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
.minitalk {
    display: flex !important;
    flex-direction: column;
    gap: 8px;
    transition: .15s all ease;
}
.minitalk-option_content {
    display: none;
    padding: 8px 0 0px;
}
.use-motion .post-block, .use-motion .pagination, .use-motion .comments {
    visibility: hidden;
}
  </style>

## Party Opening

---

<!---
TEXT GOES HERE

--->

## Minitalks

---

#### Opening

<!---

TEXT GOES HERE

IF ONE CHARA:
--->

<div class="minitalk" character="Anzu">
  <div class="minitalk-option">
    <div class="minitalk-option_header tab-header__open"><i>Option 1</i></div>
      <div class="minitalk-option_content" style="display: none;">
        <div class="msr-unit" character="[CHARACTER NAME]">
          <div class="msr-icon">
            <div class="msr-icon__wrapper">
              <div class="msr-icon__base"></div>
            </div>
          </div>
          <div class="msr-name"></div>
          <div class="msr-line">
            <p>Response Line One</p>
            <p>Response Line Two</p>
          </div>
        </div>
      </div>
    </div>
    <div class="minitalk-option">
    <div class="minitalk-option_header tab-header__open"><i>Option 2</i></div>
      <div class="minitalk-option_content" style="display: none;">
        <div class="msr-unit" character="[CHARACTER NAME]" attribute="">
          <div class="msr-icon">
            <div class="msr-icon__wrapper">
              <div class="msr-icon__base"></div>
            </div>
          </div>
          <div class="msr-name"></div>
          <div class="msr-line">
            <p>Response Line One.</p>
            <p>Response Line Two.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

### Midday

<!---

TEXT GOES HERE

IF 2 CHARAS:
--->

<div class="minitalk" character="Anzu">
  <div class="minitalk-option">
    <div class="minitalk-option_header tab-header__open"><i>Option 1</i></div>
      <div class="minitalk-option_content" style="display: none;">
        <div class="msr-unit" character="[CHARACTER 1 NAME]">
          <div class="msr-icon">
            <div class="msr-icon__wrapper">
              <div class="msr-icon__base"></div>
            </div>
          </div>
          <div class="msr-name"></div>
          <div class="msr-line">
            <p>Response Line 1</p>
          </div>
        </div>
        <div class="msr-unit" character="[CHARACTER 2 NAME]">
          <div class="msr-icon">
            <div class="msr-icon__wrapper">
              <div class="msr-icon__base"></div>
            </div>
          </div>
          <div class="msr-name"></div>
          <div class="msr-line">
            <p>Response Line 2</p>
          </div>
        </div>
      </div>
    </div>
    <div class="minitalk-option">
    <div class="minitalk-option_header tab-header__open"><i>Option 2</i></div>
      <div class="minitalk-option_content" style="display: none;">
        <div class="msr-unit" character="[CHARACTER 1 NAME]" attribute="">
          <div class="msr-icon">
            <div class="msr-icon__wrapper">
              <div class="msr-icon__base"></div>
            </div>
          </div>
          <div class="msr-name"></div>
          <div class="msr-line">
            <p>Response Line 1</p>
          </div>
        </div>
        <div class="msr-unit" character="[CHARACTER 2 NAME]" attribute="">
          <div class="msr-icon">
            <div class="msr-icon__wrapper">
              <div class="msr-icon__base"></div>
            </div>
          </div>
          <div class="msr-name"></div>
          <div class="msr-line">
            <p>Response Line 2</p>
          </div>
        </div>
      </div>
    </div>
  </div>

### Closing

<!---
TEXT HERE
--->

<div class="minitalk" character="Anzu">
  <div class="minitalk-option">
    <div class="minitalk-option_header tab-header__open">Option 1</div>
      <div class="minitalk-option_content" style="display: none;">
        <div class="msr-unit" character="Kohaku">
          <div class="msr-icon">
            <div class="msr-icon__wrapper">
              <div class="msr-icon__base"></div>
            </div>
          </div>
          <div class="msr-name"></div>
          <div class="msr-line">
            <p>Resp line 1</p>
            <p>resp line 2</p>
          </div>
        </div>
      </div>
    </div>
    <div class="minitalk-option">
    <div class="minitalk-option_header tab-header__open">Option 2</div>
      <div class="minitalk-option_content" style="display: none;">
        <div class="msr-unit" character="Kohaku" attribute="">
          <div class="msr-icon">
            <div class="msr-icon__wrapper">
              <div class="msr-icon__base"></div>
            </div>
          </div>
          <div class="msr-name"></div>
          <div class="msr-line">
            <p>resp line 1
            </p>
            <p>
            resp line 2
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

## Birthday Talks
***
### Talk 1
<!---
TEXT GOES HERE
--->
### Talk 2
<!---
TEXT GOES HERE, CONTINUE FOR 5 PARTS
--->


## Party Closing
***

<!---
TEXT GOES HERE

IIRC THERES A PHONECALL INSTEAD OF CLOSING TEXT, ADD VID
--->

### Translation Notes

<!---
IF ANY, ADD
--->
  </div>
