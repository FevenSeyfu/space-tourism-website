![screenshots](https://github.com/FevenSeyfu/space-tourism-website/blob/main/preview.jpg)
# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). This challenge is to build out a multi-page space tourism website and get it looking as close to the design as possible.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- Solution URL: [solution URL](https://github.com/FevenSeyfu/space-tourism-website/React)
- Live Site URL: [live site URL](https://space-tourism-feven.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS3
- Javascript
- Mobile-first workflow

### What I learned
while working on this project I had an issue with dynamically rendering images because vite after few tries I have used a util function that correctly passes the relative link to the image...

```JSX
  import getImageURL from "../utils/image-util";
  <img
      src={screenSize == 'lg' ? getImageURL(technologies[selectedTechnologyIndex].images.portrait ): getImageURL(technologies[selecte
      dTechnologyIndex].images.landscape)}
      alt={`${technologies[selectedTechnologyIndex].name}'s image`}
      className="w-screen h-[170px] md:h-[310px] lg:w-[515px] lg:h-[527px]"
    />

```

```js
function getImageURL(name){
    return new URL(`../assets/${name}`,import.meta.url).href
}

export default getImageURL
}
```

### Continued development
as continuous  development
- optimize speed
- use styled components to reuse common styles

<!--  -->

### Useful resources

- [Vite documentation](https://vitejs.dev/guide/assets) - This helped me to resolve the issue with dynamically rendering images.

## Author

- Website - [Feven Seyfu](https://fevenseyfu.tech)
- Frontend Mentor - [@FevenSeyfu](https://www.frontendmentor.io/profile/FevenSeyfu)
- Twitter - [@FevenSeyfu](https://www.twitter.com/FevenSeyfu)

## Acknowledgments

I have completed this challenge as part of WomenWhocode frontend, on going frontend development #frontendfriday challenge I would like to thank the community for the feedback.
