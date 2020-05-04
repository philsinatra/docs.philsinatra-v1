---
path: "/wordpress-categories-and-posts"
date: "2020-05-04"
title: "WordPress Categories and Posts"
titleSlug: "wordpress-categories-and-posts"
thumbnail: "wordpress.svg"
---

Query the WordPress database and return records for a single category:

```php
query_posts(array(
    'category_name' => 'category-name', // get posts by category name (e.g. player-profiles)
    'posts_per_page' => -1 // all posts
));
```
