import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html {
	--color-black: hsla(109, 0%, 0%, 1);
	--color-gray-dark: hsla(210, 10%, 15%, 1);
	--color-gray: hsla(109, 0%, 80%, 1);
	--color-gray-light: hsla(109, 0%, 94%, 1);
	--color-white: hsla(255, 100%, 100%, 1);
	--color-eagles-green: hsla(186, 100%, 16%, 1);
	--color-red: hsla(351, 96%, 43%, 1);
	--color-orange: hsla(17, 98%, 49%, 1);
	--color-blue: hsla(207, 75%, 39%, 1);
	--color-yellow: hsla(44, 96%, 60%, 1);
	--color-green: hsla(170, 75%, 41%, 1);
	--color-teal: hsla(168, 69%, 45%, 1);
	--color-lime: hsla(80, 57%, 55%, 1);
	--color-purple: hsla(275, 28%, 59%, 1);

	--color-background: var(--color-white);
	--color-foreground: var(--color-black);
	--color-contraster: var(--color-gray-light);
	--color-primary: var(--color-blue);

	box-sizing: border-box;
	font-size: 100%;
	line-sizing: normal;
	overflow-x: hidden;
	text-spacing: trim-start allow-end trim-adjacent ideograph-alpha ideograph-numeric;
	touch-action: manipulation;
	-webkit-text-size-adjust: 100%;

	@media (min-width: 68.75em) {
			font-size: 110%;
	}

	@supports (font-kerning: normal) and (font-varient-ligatures: common-ligatures contextual) and (font-variant-numeric: oldstyle-nums proportional-nums) {
			font-feature-settings: normal;
			font-kerning: normal;
			font-variant-ligatures: common-ligatures contextual;
			font-variant-numeric: oldstyl-nums proportional-nums;
	}
}

@media (prefers-color-scheme: dark) {
	html {
		--color-background: var(--color-gray-dark);
		--color-foreground: var(--color-white);
		--color-contraster: var(--color-black);
		--color-primary: var(--color-orange);
	}
}

*,
*:before,
*:after {
	box-sizing: inherit;
}

body {
	background-color: var(--color-background);
	color: var(--color-foreground);
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
		'Segoe UI Symbol';
	line-height: 1.4;
}

a {
	color: var(--color-orange);
	transition: color 225ms ease-in-out;

	&:visited {
		color: var(--color-purple);
	}

	&:hover {
		color: var(--color-green);
	}

	&:active {
		color: var(--color-red);
	}
}

h1, h2, h3, h4, h5, h6 {
	line-height: 1.1;
	margin-top: 0;
}

img {
	width: 100%;
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

.visually-hidden {
		clip: rect(1px, 1px, 1px 1px);
		height: 1px;
		overflow: hidden;
		position: absolute;
		visibility: hidden;
		width: 1px;
}

table {
	border: 0;
	margin: 3rem 0;
	width: 100%;

	tr:nth-child(odd) {
		background-color: var(--color-contraster);
	}

	th {
		background-color: var(--color-background);
		color: var(--color-primary);
		padding: 0 .75rem .25rem;
		text-align: left;
	}

	td {
		padding: .75rem;
	}
}

.blog-post-content > ul li p {
	margin-bottom: 0;
}

`

export default GlobalStyle
