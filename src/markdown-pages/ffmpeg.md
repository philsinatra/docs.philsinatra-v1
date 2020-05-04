---
path: "/ffmpeg"
date: "2020-05-01"
title: "FFMPEG"
titleSlug: "ffmpeg"
thumbnail: "ffmpeg.svg"
---

Batch convert example:

```bash
for f in .wmv; do ffmpeg -i "$f" -s 640x360 "${f%.}.mp4"; done
```
