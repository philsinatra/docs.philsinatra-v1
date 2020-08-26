---
path: "/css-media-queries-you-need-to-know"
date: "2020-08-26"
title: "CSS Media Queries You Need To Know"
titleSlug: "css-media-queries-you-need-to-know"
thumbnail: "css3.svg"
---

## `light-level`

This feature isn’t available in any browsers at the time of writing, but it definitely sounds like a future favorite. With the [light-level](https://drafts.csswg.org/mediaqueries-5/#light-level) media query, you can tune your styles based on whether your user is viewing your web app outside in daylight, or perhaps checking in before going to bed. This is great news for anyone who has ever tried to read their phone in the park, or check out a website at night!

There are three available values – `dim`, `normal` (the default), and `washed`. Here’s an example where we change some CSS custom properties:

```css
@media (light-level: dim) {
  :root {
    --text-color: white;
    --background-color: black;
  }
}
```

## `inverted-colors`

Before the time of dark mode, a lot of people turned on the “invert colors” to get that “dark mode” feel. It looked pretty neat, but it also screwed with images, text shadows, and the way fonts were rendered (white on black has more perceived contrast than black on white for some reason).

![inverted colors example](https://i0.wp.com/blog.logrocket.com/wp-content/uploads/2020/02/inverted-colors-1.png?w=730&ssl=1)

The `inverted-colors` media query lets you adapt around those quirks! Although currently supported in Safari (and Safari on iOS), I sure hope this lands as well.

This is a boolean option, with two values `none` and `inverted`. But you can just skip the value altogether and write something like this:

```css
@media (inverted-colors) {
  img { filter: invert(1); }
  * { box-shadow: none !important; text-shadow: none !important; }
}
```

## `prefers-color-scheme`

You might actually have heard about the `prefers-color-scheme` media query already. This one lets you react to whether the user has turned on so-called “dark mode” on their device. In other words – adding “dark mode” to your app is now a few lines of code!

This feature is already widely supported in browsers, and has three possible values – `light`, `dark`, and `no-preference`. Here’s an example where we change the background color of the site based on preference:

```css
@media (prefers-color-scheme: dark) {
  body { background: #1e1e1e; color: white; }
}
```

## `prefers-contrast`

The `prefers-contrast` media query lets you cater to users who prefer high contrast content compared to your original design.

There’s two values here – `no-preference` and `high`. There’s some discussion in [the draft document](https://drafts.csswg.org/mediaqueries-5/#prefers-contrast) about splitting `high` into `increased` and `extremely-high`, but nothing is certain yet. That’s probably the reason why there’s no support for this one yet. But when they decide, you’ll know what to write!

```css
@media (prefers-contrast) {
  :root {
    --text-color: black;
  }
}
```

## `prefers-reduced-motion`

Some users aren’t fans of animations and transitions. To some unlucky few, these kinds of movements can make them physically sick! That’s why most devices now support a way to tune down the transitions you find in most modern UIs.

With the `prefers-reduced-motion` media query, you can respect that wish as well. Use it to reduce those “bouncy” animations, fading images and “fun” transitions a bit. Note that you don’t necessarily have to remove all movement, but reduce it.

Browser support for this one is pretty good already, and is a “boolean” value too – `no-preference` or `reduce`. Here’s an example:

```css
@media (prefers-reduced-motion) {
  * { transition-duration: 0.05s; }
}
```

## `prefers-reduced-transparency`

Some operating systems offer an option to reduce the amount of translucent layering effects used by the system. Although not supported by any browsers yet, the `prefers-reduced-transparency` media query is aiming to help you cater to those users.

This is another boolean value – `no-preference` and `reduce`, so when it does get shipped in some browsers, you can write code like this:

```css
@media (prefers-reduced-transparency) {
  .floating-box { opacity: 1; }
}
```

## `prefers-reduced-data`

Now this one is pretty exciting. If you’re running low on cellular data, or if you’re traveling internationally, it sucks to hit an image-heavy site. Well, not anymore, thanks to the fabulous prefers-reduced-data media query!

There’s no support for this yet, but it’s one of the most practical applications of media queries I’ve seen. With this, you could skip that huge header image or high-res profile images when they’re not needed. I sure hope it gets implemented soon.

The value is boolean as well, so `no-preference` and `reduce` are the values. Here’s an example:

```css
@media (prefers-reduced-data) {
  .hero-image { background-image: none; background-color: salmon; }
}
```

## Custom media queries

The last media query introduced in the level 5 spec is definitely the most powerful one – scriptable, customizable media queries.

The main purpose seems to be avoiding repetition by creating a custom media query that maps to longer media queries.

They’re specified with the new `@custom-media` keyword, and it can look like this:

```css
@custom-media --medium-devices (min-width: 50rem);
@custom-media --large-landscape (min-width: 70rem) and (orientation: landscape);

@media (--medium-devices) {
  .container { max-width: 40rem; }
}
```

The CSS Working Group is also planning on a way to make these values scriptable, which is going to really bring super powers to media queries. Think how you can write styles when you can have `@media (–logged-in)` or `@media(–no-connection)` media queries?

There are no browsers out there implementing this yet, but you can use a [PostCSS plugin](https://github.com/postcss/postcss-custom-media) to use at least the @custom-media part of the spec.

---

## References

Selbekk, Kristofer. "New media queries you need to know" LogRocket, 26-02-2020, [https://blog.logrocket.com/new-media-queries-you-need-to-know/](https://blog.logrocket.com/new-media-queries-you-need-to-know/)
