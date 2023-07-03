# Front End Challenges
This is my walkthrough in The front end challenges by [devchallenges](https://devchallenges.io/paths/front-end-developer). You are givin user stories and figma design and you have the freedom to choose whatever stack to accomplich the task. 
There are 8 challenges.
## 1, 2 Reuseable Components
- I used next js to get it's feeling, it support many things out of the box like font optimization.
- First I tried to use module styling but it didn't work with multiple classes I don't why. 
- So I resorted to global styles. 
- The task here is to create something like bootstrap components(button & input)
- The main challenge with the button that It contain many overlaping states. The way that bootstrap achive this is creating class for every state. For example If you want the button to be both primary and outline you will go with btn-outline-primary, and it has upper hand over btn-primary and there isn't any btn-outline.
- It's counter-intutive I was thinking at first for something like class = "btn primary outline" 
- So it's a matter of playing with sass it seems so. Let's find out.
- DONE -evil laugh-
## 3 Windbnb 
- Return to my old react but with tailwind this time.
- For the search modal I blindly started with the moblie without looking at the desktop version. Unfortnately there are  details that I overlooked like the type of search input field. I had to redesined again carefully. 
- The guest types: children and adults, I don't know what is the difference. I may treat them equally    
