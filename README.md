# No Sleep

*Welcome to NoSleep, my new CRUD horror posting blog site. Want to scare the sh\*t out of yourself? Want to scare the sh\*t out of your friends? You've come to the right place! Here you can see orror pics and gifs to really horrify yourself. There's always that time where we need a good scare. This CRUD app uses an api to access the JSON objects that you see displayed on the main page. Using routes, you can see the post in its full beauty if you so desire (beware jumpscares).*

*Trigger Warning: Some content may be horrifying... please scare yoruself at your own discretion*/


[deployed url](https://jolly-beaver-af496d.netlify.app/)

## What Worked Well
* Surprisingly, the actions/actionCreators and reducers were very intuivitve to code up and create so that they may be useful for componets, when I wanted to update the redux state. I think this is because I truly understand how redux works, whcih is something I'm truly proud of. I know the order in which thigns happen and I understand why sometimes the state wouldn't update in the store and what mapStateToProps and mapDispatchToProps do. 

## What Didn't
* So, I had to really look through the react lifecycle of functions to understand what happened first. It took me a while to realize why certain things weren't happening, and that was because componentDidMount ran only after render and the constructor already ran once. Therefore, somethings didn't happen immediately. Styling was also a huge pain this time around, which was annoying. I think that is because I used tome new react component libraries to get a masonry effect going, but I didn't realize it would make styiling a pain. But all worked out!

## Extra Credit
* Got a masonry look going for the main page posts. This was done with React-Masonry-CSS

## Screenshots
