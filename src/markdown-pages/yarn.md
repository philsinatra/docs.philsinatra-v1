---
path: "/yarn"
date: "2020-05-04"
title: "Yarn"
titleSlug: "yarn"
thumbnail: "yarn.svg"
---

## Installing Yarn

```bash
# npm install -g yarn
curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
```

[yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

Test what packages are globally installed with Yarn:

```bash
yarn global list
```

## Initialize a project

```bash
# May need sudo
yarn init
```

## Install Dependencies

```bash
yarn
# or
yarn install
```

## Add | Upgrade | Removed Dependencies

```bash
yarn add [package-name]
yarn add [package]@[version-or-tag]

# devDependencies
yarn add gulp --dev
```

To upgrade or remove a package, replace `add` with either `upgrade` or `remove` followed by the package name.

```bash
# upgrade to gulp version 4
yarn upgrade gulp@4.0

# remove gulp
yarn remove gulp
```

## Yarn Lock File

`yarn.lock` file should be included in version control to maintain version consistency.

## Remove Dependency Bloat

```bash
yarn clean
```

## Update Yarn

```bash
yarn self-update
```

## Resources

- [Homepage](https://yarnpkg.com)
- [Docs](https://yarnpkg.com/en/docs/)
- [Facebook Intro](https://code.facebook.com/posts/1840075619545360)
- [Scotch.io](https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm)
