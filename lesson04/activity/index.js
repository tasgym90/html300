LESSON 4:
CSS Transforms &
CSS Transitions
HTML 300
1. Questions
2. Assignment Review
3. BEM CSS Overview
4. New Terms
5. Animations
6. Activity


BEM Style CSS
• BEM stands for Block Element Modifier
• BEM isn’t a library or tool, rather a methodology to help
build out HTML/CSS in a fast, efficient way with low specificity
and high reusability.
• BEM uses either double underscore __ or double dash --
to denote an element or a modifier
• Combining nesting sass with BEM syntax helps
create readable, more maintainable styles
• Read more here: http://getbem.com/introduction/

BEM
• The B is for Block
• A block level item would be something that can stand on
its own – think like a module like a social card
• Blocks have elements within them. Think of a block as
a person, and the elements could be hands, feet, head,
legs, etc.
BEM - Block
// Footer is Block level
.footer {
background: $navy;
padding: .5rem 0;
grid-area: footer;
&__item {
display: inline-block;
margin-right: .5rem;
}
}
• The E is for Element
• An element is a component of something, denoted
with appending __ to the block and naming the element
• In the example below, .footer__item is an Element to
the Block of .footer
BEM - Element
// .footer__item is an element
.footer {
background: $navy;
padding: .5rem 0;
grid-area: footer;
&__item {
display: inline-block;
margin-right: .5rem;
}
}
• The M is for Modifier
• A modifier is best thought of as a state of the block
or element (size, color, active/disabled)
• In the example below, .footer--light gives a state of
light, where we change the background
BEM - Modifier
// .footer--light is a modifier
.footer {
background: $navy;
padding: .5rem 0;
grid-area: footer;
&--light {
background: $white;
}
}
• You can combine all
of these BEM tactics
to fit your needs.
• By utilizing the nested
selectors, all of the
elements have a low
specificity of 1 class, but
are easily read and
updated.
BEM -
.author {
padding: 1rem;
margin-bottom: 2rem;
&--border {
border: 1px solid $slate;
}
&__img {
display: block;
max-width: 130px;
border-radius: 50%;
margin: 1rem auto;
}
&__cap {
text-align: center;
font-weight: 700;
@include font-size(18px);
}
&__title {
font-weight: 400;
@include font-size(14px);
color: $gray-med;
}
&__content {
p {
@include font-size(16px);
color: $gray-med;
}
}
}

New Terms
• Controls how the transformation works.
• transition: width 2s;
• The transformation will take 2 seconds for the width.
• transition: width 2s, height 4s;
• The transformation will take 2 seconds for the width and 4 seconds
for the height.
• transition-delay: 1s;
• Delay transformation for one second.

TRANSTION
• This is for 2D or 3D elements.
• It allows you to rotate, scale, move, the element
• When defining perspective it is for the child element and not
the element itself.
• Some Properties.
• translate(x, y): Move to coordinates X, Y.
• translate3D(x, y, z): Move to coordinates X, Y, Z.
• TranslateX(x), TranslateY(y), TranslateZ(z): moves to the values of the
X, Y, or Z axis.

TRANSFORM
• Moves the position of the element from one place on the
screen to another.
• You can translate using x coordinates, y coordinates, or xy
coordinates.

TRANSLATE
• Let's the child element preserve the 3D transformation.
• Some Properties.
• flat: Child does not preserve 3D position.
• Preserve-3d: Child does preserve 3D position.

TRANFORM-STYLE
• This allows you to change the base position of the element.
• transform-origin: 20% 40%;
• This changes the base position by 20% on the X axis and 40% on the
Y axis

TRANSFORM-ORIGIN
• Are specific rules you implement when it come to animation
for css.
• This controls the animation at different stages.
• You can set changes between 0-100% or use from and to.

KEYFRAMES
• Font-Size em.
• 1em is the same as 12px, 2em is 24px
EM
Animations
• Not much set up for this example.
• Add one div with a class of box

KEYFRAMES HTML SETUP
<div class="box"></div>
• We are going to start by making our div visible
• Give it a background color of red.
• A width and height of 100px;
• Position relative.
• Now we have a red box.

KEYFRAMES HTML SETUP
• In out css for we are going to add animation and create a
variable called myframes with 2s, ease in and out, with 1
second delay, and make this go infinitely.

KEYFRAMES HTML SETUP
.box{
background-color: red;
width: 100px;
height: 100px;
position: relative;
animation: myframes 2s ease-in-out 1s infinite;
}
• In our css we are going to add out keyframes.
• We are going to start at 0% with a height of 100px and width of 100px.
• Then between 50%-100% we are going to increase the width to 200px.
• At 100% the height is going to be 600px and the background color
changes to green.

KEYFRAMES HTML SETUP
@keyframes myframes{
0%{
height: 100px;
width: 100px;
}
50%, 100%{
width: 200px;
}
100%{
height: 600px;
background: green;
}
}
• This is the result.

KEYFRAME RESULTS
• We are going to create a drop down menu with some
animation.
• In our HTML we are going to add a nav element.
• Inside the nave element is a ul.
• Inside the ul element is an li.
• Inside that li add another ul with a class off menu-1
• And inside that ul add five li’s and give them text of, one, two, three,
four, and five.


CSS ANIMATION TO STYLE A MENU
HTML CODE FOR MENU ANIMATION
<nav>
<ul>
<li>Style 1
<ul class="menu-1">
<li>One</li>
<li>Two</li>
<li>Three</li>
<li>Four</li>
<li>Five</li>
</ul>
</li>
</ul>
</nav>
• It should look like this.

HTML CODE FOR MENU ANIMATION
• Now lets give the nav bar padding of 50px and text-align of
center.

CSS CODE FOR MENU ANIMATION
nav {
padding: 50px;
text-align: center;
}
• In our outer ul element give it list-style of none to hide the
bullets, a padding and margin of 0px, a display of inline-block,
and background of grey.
• We will nest this inside the nav element.

CSS CODE FOR MENU ANIMATION
ul {
list-style: none;
padding: 0;
margin: 0;
display: inline-block;
background: #ddd;
border-radius: 5px;
}
• To make the menu look nicer we are going to style the li
element inside the outer ul element.
• A width of 150px with a height of 65px.
• The line height of 65px with a text-transform to uppercase.
• A position of relative with a cursor of pointer.
• This will be nested inside the ul element.
CSS CODE FOR MENU ANIMATION

CSS CODE FOR MENU ANIMATION
li {
width: 150px;
height: 65px;
line-height: 65px;
position: relative;
text-transform: uppercase;
font-size: 14px;
color: rgba(0, 0, 0, 0.7);
cursor: pointer;
}
• In our css nest “menu-1” and inside of that nest an li element.
• In the inside li element make display none, background of
#666, the give it an rgb value of 255 with .7 opacity.
HIDING THE DROP DOWN
.menu-1 {
li {
display: none;
background: #666;
color: rgba(255, 255, 255,
0.7);
}
}
• Outside of our nested statement create a section for li:hover
inside of the .menu-1 and inside of that the inner li element.
• Give this a display of block and opacity of 0
CREATING THE ANIMATION
li:hover > .menu-1 > li {
display: block;
opacity: 0;
}
• Now we are going to use some scss magic and use a for loop
like we would in JavaScript.
• We are going to start our for loop from 1 to 5.
• For each element we are going to call the keyframe menu1.
• The animation will take 300ms.
• Delay each one by an additional 300ms.
• Have the animation move forward.
CREATING THE ANIMATION
• Here is the SCSS
CREATING THE ANIMATION
@for $i from 1 through 5 {
&:nth-child(#{$i}) {
animation-name: menu1;
animation-duration: 300ms;
animation-delay: (300ms * $i) - 300;
animation-timing-function: ease-in-out;
animation-fill-mode: forwards;
}
• When we investigate our HTML, we realize we never set any
size for our header element.
• The keyframes name is mennu1.
• At 0% the opacity is 0 and rotate Y by -90deg and translate Y by 30px
• Then at 100, opacity is at 1 and rotate Y by 0deg and translate Y by 0px
CREATING THE KEYFRAME
KEYFRAME CODE
@keyframes menu1 {
0% {
opacity: 0;
transform: rotateY(-90deg) translateY(30px);
}
100% {
opacity: 1;
transform: rotateY(0deg) translateY(0px);
}
}
RESULT
Activity
• For the last animation, figure out how to change it from a drop
down to rise up menu.
IN CLASS ASSIGNMENT
Any Questions?
As always feel free to contact me though Canvas if you have any
questions. I do have a full-time job, so I might not get back to
you immediately.
If you do not hear back from me in 24 hours, please ping me
again.
QUESTIONS
