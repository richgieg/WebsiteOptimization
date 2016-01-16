# Website Optimization

This is the fourth project in my pursuit of the Front-End Web Developer
Nanodegree from Udacity. Following is Udacity's description for this project:

"As web applications become increasingly interactive and accessed on a variety
of devices there are a variety of opportunities in which performance issues can
hinder the user experience. This project presents a number of those performance
issues and provides an opportunity to showcase your skills in identifying and
optimizing web applications."

In this project, I implemented various optimizations on a Udacity course developer's imaginary
portfolio page. The first optimization goal was to get the `index.html` page
to reach a score of 90 on Google PageSpeed Insights. After my optimizations, the page
received a rating of 95 for mobile and 96 for desktop. The second optimization
goal was to ensure that the profile's pizzeria page animation ran at a smooth
60 frames-per-second while scrolling. The third optimization goal was to ensure
that resizing the pizzas on the profile's pizzeria page completed in less than
five seconds.
```
```

## Running the Application

There are two options for running the application. The first option entails
downloading the project's zip file, extracting it, then running `dist/index.html`
in your favorite browser. This method is fine for just viewing the site, but
you won't be able to analyze it with Google PageSpeed Insights. The second
option consists of running a local web server, then using a tunneling tool
called `ngrok` to make your local web server publicly available (temporarily).
You will be presented with a URL, by `ngrok`, which will allow your web server
to be accessible on the Internet. Therefore, you will be able to use that URL
to run Google PageSpeed Insights on the site.

### Option #1

If you would like to quickly run the application for the sole purpose of viewing the pages (not
rating with Google PageSpeed Insights), follow these steps:

- Download the project's ZIP file
- Extract the ZIP file
- Navigate to the `dist` directory
- Run `index.html` using your favorite browser

### Option #2

If you would like to serve the site publicly on the Internet for the purpose of rating the site
using Google's PageSpeed Insights, follow these steps:

- Download the project's ZIP file
- Extract the ZIP file
- Install [Python](https://www.python.org/downloads/) (method varies by OS... if you're on Linux you probably have it already)
- Download and extract [ngrok](https://ngrok.com/download)
- In a terminal, navigate to the WebsiteOptimization project's `dist` directory
- Run `python -m SimpleHTTPServer 8080`
- In a different terminal, navigate to the location of the extracted `ngrok` binary
- Run `./ngrok http 8080` on Linux, or `ngrok http 8080` on Windows
- Copy the URL you are given and test it in a browser
- Visit [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) and submit the URL
```
```

## Building the Application

If you would like to tinker with the code, make sure to edit the code that's
in the `src` directory (development directory). Once you're done editing code,
you will have to run the build process to generate the `dist` directory
(production directory). The production directory contains the files that
should actually be served on the live site. Follow these steps in order to
run the build process.

### Prerequisites

You must have this software installed prior to attempting to run the build process.

- Install [Node.js](https://nodejs.org/en/download/)
- Install [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) (the `Node.js` package manager)
- Install [Grunt CLI](http://gruntjs.com/getting-started)
- Install [ImageMagick](http://www.imagemagick.org/script/binary-releases.php)
- In a terminal, navigate to the WebsiteOptimization project's root directory
- Run `npm install` in order to download all the required Grunt modules into the `node_modules` directory

### Execute Grunt

After the prequisites are installed, you may run the Grunt build process.

- In a terminal, navigate to the WebsiteOptimization project's root directory
- Run `grunt`

*If all goes well, you should see: `Done, without errors.` At this point, the `dist`
directory should be populated with any modifications you made, minified and optimized
for production.*

```
```

## Optimization Summaries

The following sections describe the optimizations I implemented to achieve
this project's objectives.

### Objective #1

The first objective was to get the `index.html` page
to reach a score of 90 on Google PageSpeed Insights. After my optimizations, the page
received a rating of 95 for mobile and 96 for desktop. I implemented the
following optimizations to achieve this goal:

- Set `analytics.js` script tag to `async`
- Set `print.css` link tag to load only for a print device
- Utilize built-in sans-serif font rather than 'Open Sans' web font
- Created thumbnail for `pizzeria.jpg`
- Replaced source images with optimized versions generated by Google PageSpeed Insights tool
- Inlined important CSS required to properly display above-the-fold content
- Used JavaScript to asynchronously load the full style sheet (inside `perfmatters.js`)
- Minified source files: HTML, CSS, JavaScript
- Optimized images using ImageMagick (reduced quality, to lower file size)
- Automated minification and image optimization with Grunt


### Objective #2

The second objective was to ensure that the profile's pizzeria page animation
ran at a smooth 60 frames-per-second while scrolling. I implemented the
following optimizations to achieve this goal:

- Access the `scrollTop` property outside the loop in `updatePositions` to prevent layout thrashing
- Utilize the `requestAnimationFrame` API, rather than handle the scroll event, in order to
ensure that scroll events don't interrupt a frame already in progress and to also ensure that the
animation code is scheduled to run as early as possible in the frame, as decided by the browser
- Set the `will-change` property on the `mover` CSS class in order to put the sliding pizza images
on their own layers, drastically reducing the amount of painting required
- Reduced the number of sliding pizza elements to 64 (8 rows) from the orginal 200 (25 rows), because
I noticed that the majority of them were outside the viewport, therefore unnecessary to compute and render

### Objective #3

The third objective was to ensure that resizing the pizzas on the profile's
pizzeria page completed in less than five seconds. I implemented the
following optimizations to achieve this goal:

- Consolidated an excessively-duplicated call to `querySelectorAll` in `changePizzaSizes`
- Optimized the loop in `changePizzaSizes` by moving code that performed calculations that
only needed to be performed once, outside of the loop, thus saving CPU cycles and preventing
layout thrashing
