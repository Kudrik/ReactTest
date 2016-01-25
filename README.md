# Kudrik test job

[Demo page](http://kudrik.github.io/)

### Features

&nbsp; &nbsp; ✓ Generates static `.html` pages from React components for Amazon hosting<br>
&nbsp; &nbsp; ✓ Easy deployment to GitHub Pages Amazon S3<br>
&nbsp; &nbsp; ✓ Generates routes based on the list of files in the `/pages` folder<br>
&nbsp; &nbsp; ✓ Next generation JavaScript with Babel<br>
&nbsp; &nbsp; ✓ Sass-like syntax for CSS via postCSS and precss<br>
&nbsp; &nbsp; ✓ Development web server with BrowserSync and React Transform<br>
&nbsp; &nbsp; ✓ Bundling and optimization with Webpack<br>
&nbsp; &nbsp; ✓ Code-splitting and async chunk loading<br>


### Few words about

Site`s main users are women who can handle with "internet" =) Therefore correct display on mobile devices must be the most important thing.
That is why i've spent a lot of time on responsive markup to ensure that the site looks "pretty" on all devices. (all timings are listed below)

Once site is downloaded to your phone navigation should work even without internet connection.
[Demonstration](http://kudrik.github.io/about) of page loading without page reloading.

Pagination on mobile devices is not a good idea. It is really hard to hit those small pagination links.
So i've added virtual scroll into Leaderboard. It dynamically adds only visible elements and keeps DOM clean and light.


### Few words about css

Css modules of components are held via root sass-style class name. 
This class name is the same as React component name therefore we get a unique class name preventing "fight" of styles of different components. 
I can update to cssModule "component-class-hash" class naming auto generation if needed.

I've used 'flexbox' layout just to try it. That is why IE9 is not supported. But i can update project to support it if nedeed.

----------

### Directory Layout of interest

```
.
├── /build/                     # The folder for compiled output
├── /components/                # React components
├── /pages/                     # React.js-based web pages
│   ├── /about.js               # Demonstration of react-router abilities.
│   └── /index.js               # Test job page
├── /static/                    # Static files such as favicon.ico etc.
│   └── /data.json              # Test data (editable)
└── README.md                   # Project overview
```

### Getting Started

Just clone the repo, install Node.js modules and run `npm start`:

```
$ git clone -b master --single-branch \
      https://github.com/Kudrik/kudrik.github.io.git KudrikTest
$ cd KudrikTest
$ npm install
$ npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) in your browser.

-----
## Time spent 

According to toggl time tracker:
![Screenshot from timetracker](https://dl.dropboxusercontent.com/u/4693406/pics/Screenshot%202016-01-25%2015.07.16.png)

Without project preparation, uploading and this md writing time spent is about **11 hours**.

---
Copyright (c) Kudrik.&nbsp; All rights reserved.

**Note**: *This project is based on [react-static-boilerplate](https://github.com/koistya/react-static-boilerplate).*

