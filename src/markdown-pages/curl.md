---
path: "/curl"
date: "2020-05-01"
title: "Curl Command"
titleSlug: "curl-command"
thumbnail: "curl.jpg"
---

```bash
curl --silent https://code.jquery.com/jquery-2.2.3.min.js -o ../vendor/js/jquery.min.js
```

To `curl` a zip file, you must include the `LOk` flags:

```bash
curl -LOk --silent http://cdn.website.com/libraries/compressed_file.zip
```
