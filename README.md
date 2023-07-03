## 1, 2 Reuseable Components
- I used next js to get it's feeling, it support many things out of the box like font optimization.
- First I tried to use module styling but it didn't work with multiple classes I don't why. 
- So I resorted to global styles. 
- The task here is to create something like bootstrap components(button & input)
- The main challenge with the button that It contain many overlaping states. The way that bootstrap achive this is creating class for every state. For example If you want the button to be both primary and outline you will go with btn-outline-primary, and it has upper hand over btn-primary and there isn't any btn-outline.
- It's counter-intutive I was thinking at first for something like class = "btn primary outline" 
- So it's a matter of playing with sass it seems so. Let's find out.
- DONE -evil laugh-