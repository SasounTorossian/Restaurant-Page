# Restaurant-Page
Restaurant page based off the Odin project curriculum. Page is a desert-themed parody of normal restaurant pages with some tongue-in-cheek menu dishes. Live demo can be found on github.io [here](https://sasountorossian.github.io/Restaurant-Page/).

![Restaurant demo](Restaurant.gif)

Initial hurdle was figuring out how to generate html elements in Javascript and append them to the dom. Progress was slow at first, as I would experiment in the index.html first before moving over to JS. As confidence grew, I began creating html elemnts in JS first.

Project is relatively simple, though the addition of parallax scrolling and fading effects complicated matters.

Smooth scrolling was implemented using external parallax.js library, which prepends the html "content" element with trackers for the mousewheel. These tracker elements exist for for each image that needs the parallax effect, and needs to be saved and loaded when tabbing away and to the main page respectively. This forced me to implement a crude save/loading function, which was later placed in its own module.

Fading effects were added very late in development, hence are very much "duct-tape and chewing-gum" in their implementation. Effects work very well, but are not modular or easily modifieable. In hindsight, I would plan out special effects and other cosmetics much earlier in the design stage to account for them while developing, instead of tacking on at the end.

Had a lot of fun implementing the google maps api. Intergrating with project was much simpler than initially thought, and the provided API is very intuitive with plenty of online resources. The effects on the form were taken from online sources, and I am still figuring out the css black-magic that makes it work.

Happy with the minimalist style, as I feel the light colour scheme suits a hypothetical Michelin start desert restaurant.

Next time I would like to put a bit more thought into the design aspect of the project, especially the fading, so coding would be easier down the line.
