# Portfolio with Nuxt und Storyblok

In this simple project my main mission was to workout a prototype for a alternative navigation with driangles in the corner of the screen. Following this initial conzept i decided to lean in on the theme of triangles and tried to integrate them into the background.

## Important links

- `github`: https://github.com/xxANONYMxx/portfolio
- `vercel`: https://portfolio-ashen-nu-85.vercel.app/

## Optimization

While developing this prototype I learned a few things I could have done diffrently (better).

### Triangles

After googeling how to create tiangles and esspecaly how to make triangles with text inside i found the following examples:

- https://css-tricks.com/snippets/css/css-triangle/
- https://codepen.io/martinjkelly/pen/vEOBvL

But this has come with a few problems:
- One problem I encountered was that the div showed a triangle but was still a rectangle and an on hover effects triggered even if I did not hover the visivle part.
    - This I could propably fix with css clip-paths, which I have not known exist until the presentation
- The next problem i faced that I added stylistic triangles in the background on some components. But If said Components were used back to back numerous times the triangles always were on the same place and made an unpleasant pattern. This didn´t suite my style.
    - My solution was to incloude some randomeness regarding the size of the triangle and the position. This kinda worked but not really. Because of this, some positions look better than others and I have lost lots of control on how the website looks.
    - A better solution would have been to take the index of the segments and use the index of the segment in claculating the size, position of the triangles. In this way I could have made a more predective behavior and have more control about its position. 

### Styling

I used tailwind for the first time and tried to work it into my project, but I am no longer sure if tailwind was the right way to go. Because of my triangles made out of divs with borders, I had to use a lot of custome css classes and this resulted in a mess of tailwind classes and my own classes. In hindsight I think I should´t have used tailwind for clearner code.

#### Styling fore Mobile

Sadly my time did´t allow for developing a perfect Mobile view. But I had some Ideas on how it could have worked:

![Navigation idea for a mobile view](NavigationIdeaforMobileVew.png/)

