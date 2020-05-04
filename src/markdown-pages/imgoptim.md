---
path: "/imgoptim"
date: "2020-05-03"
title: "Image Optimization"
titleSlug: "image-optimization"
thumbnail: "shell.jpg"
---

## `mozjpeg`

### Installation

Via MacPorts

```bash
sudo port install mozjpeg
```

To fix missing dependencies after installing `mozjpeg`, copy scripts to local bin:

```bash
# Find where mozjpeg is installed
port contents mozjpeg

# example:
Port mozjpeg contains:
  /opt/local/bin/cjpeg
  /opt/local/bin/djpeg
  ...

# cd to that location and copy scripts

cd /opt/local/bin

cp cjpeg /usr/local/bin/mozcjpeg
cp djpeg /usr/local/bin/mozdjpeg
```

- [reference](https://github.com/jmcollin/optimizeImage)

---

## Optipng

- [Official Manual](http://optipng.sourceforge.net/optipng-0.7.5.man.pdf)
- [Notes](http://www.clock.co.uk/blog/optimise-your-pngs-from-the-terminal-in-osx)

A quick example: `cd` into the directory with image(s) to be optimized and:

```shell
find . -name "*.png" -exec optipng -o7 {} \;
```

## Jpegopti

An exmaple with a `dry-run` option enabled:

```shell
find . -name "*.jpg" -exec jpegoptim -m60 -o -p -n --strip-all {} \;
```

Run the same command for real:

```shell
find . -name "*.jpg" -exec jpegoptim -m60 -o -p --strip-all {} \;
```

---

## PngQuant

- [pngquant.org](http://pngquant.org/)

```bash
# Run the script
$ ./pngquant list_file_names

# Removed custom suffix
$ ./pngquant --ext .png list_file_names

# Force overwrite of source files
$ ./pngquant --force list_file_names

# Combine both options
$ ./pngquant --ext .png --force list_file_names
```

---

## `sips` Image Conversion Tool

### Batch Convert PNG to JPG

```bash
mkdir jpegs; sips -s format jpeg *.* --out jpegs
```

### Batch Convert JPG to PNG

```bash
mkdir pngs; sips -s format png *.* --out pngs
```

#### Explanation

- `mkdir` creates a new folder
- `sips -s format` sets the format you want to change the files to
- `--out` sets the directory you want to save the converted files to

### Batch Resize Images

```bash
sips -Z 640 *.jpg
```

### Check Image Dimensions

```bash
sips -g pixelHeight -g pixelWidth *
```

### Single File Conversion

To convert a single image with sips, use the following command string syntax:

```bash
sips -s format [image type] [file name] --out [ouptut file]
```

Example:

```bash
sips -s format png test.jpg --out test.png
```

### Batch Image Conversion

```bash
for i in [filename]; do sips -s format [image type] $i --out [destination]/$i.[extension];done
```

Example:

```bash
for i in *.jpeg; do sips -s format png $i --out Converted/$i.png;done
```

### Documentation

- [Apple Documentation](https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/sips.1.html)
