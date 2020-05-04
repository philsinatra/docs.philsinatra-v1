---
path: "/css-starter"
date: "2020-05-01"
title: "CSS Starter"
titleSlug: "css-starter"
thumbnail: "css3.svg"
---

```css
html {
  box-sizing: border-box;
  font-size: 100%;
  line-sizing: normal;
  overflow-x: hidden;
  text-spacing: trim-start allow-end trim-adjacent ideograph-alpha ideograph-numeric;
  touch-action: manipulation;
  -webkit-text-size-adjust: 100%;
}

@supports (font-kerning: normal) and (font-varient-ligatures: common-ligatures contextual) and (font-variant-numeric: oldstyle-nums proportional-nums) {
  html {
    font-feature-settings: normal;
    font-kerning: normal;
    font-variant-ligatures: common-ligatures contextual;
    font-variant-numeric: oldstyl-nums proportional-nums;
  }
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  /* Set the default for kerning */
  font-kerning: normal;
  font-smoothing: antialiased;
  /* Improve (or in some cases royally screw with) safari's legibility somewhat */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* Improve kerning pairs. Webkit gets funny with this sometimes */
  text-rendering: optimizeLegibility;
  -ms-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  -webkit-touch-callout: none;

  -webkit-overflow-scrolling: touch;

  /* In case anyone's searching for this later on, a nice trick to get rid of
  those jagged edges on CSS transformations in Chrome is to add the CSS
  property -webkit-backface-visibility with a value of hidden.
  http://stackoverflow.com/questions/6492027/css-transform-jagged-edges-in-chrome
  */

  -webkit-backface-visibility: hidden;
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
}

abbr {
	font-feature-settings: 'kern', 'liga', 'clig', 'calt', 'c2sc', 'smcp';
	@supports (font-variant-caps: all-small-caps) {
		font-feature-settings: normal;
		font-variant-caps: all-small-caps;
	}
}

[hidden] { display: none !important; }
.no-break { hyphens: none; }
.numbers { letter-spacing: .01em; }
```
