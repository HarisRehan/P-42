# p5.play-boilerplate
Boiler plate for p5.play

hour() ----
Description
p5.js communicates with the clock on your computer. The hour() function returns the current hour as a value from 0 - 23.
Syntax
hour()
Returns
Integer: the current hour



minute() -----
Description
p5.js communicates with the clock on your computer. The minute() function returns the current minute as a value from 0 - 59.
Syntax
minute()
Returns
Integer: the current minute



second() ------
Description
p5.js communicates with the clock on your computer. The second() function returns the current second as a value from 0 - 59.
Syntax
second()
Returns
Integer: the current second


Map -----
Use the map() function to take any number and scale it to a new number that is more useful for the project that you are working on. For example, use the numbers from the mouse position to control the size or color of a shape. In this example, the mouse’s x-coordinate (numbers between 0 and 360) are scaled to new numbers to define the color and size of a circle.



Arc -----
Description
Draw an arc to the screen. If called with only x, y, w, h, start and stop, the arc will be drawn and filled as an open pie segment. If a mode parameter is provided, the arc will be filled like an open semi-circle (OPEN), a closed semi-circle (CHORD), or as a closed pie segment (PIE). The origin may be changed with the ellipseMode() function.

The arc is always drawn clockwise from wherever start falls to wherever stop falls on the ellipse.Adding or subtracting TWO_PI to either angle does not change where they fall. If both start and stop fall at the same place, a full ellipse will be drawn. Be aware that the y-axis increases in the downward direction, therefore angles are measured clockwise from the positive x-direction ("3 o'clock").

Syntax
arc(x, y, w, h, start, stop, [mode], [detail])
Parameters
x Number: x-coordinate of the arc's ellipse
y Number: y-coordinate of the arc's ellipse
w Number: width of the arc's ellipse by default
h Number: height of the arc's ellipse by default
start Number: angle to start the arc, specified in radians
stop Number: angle to stop the arc, specified in radians
mode Constant: optional parameter to determine the way of drawing the arc. either CHORD, PIE or OPEN (Optional)
detail Number: optional parameter for WebGL mode only. This is to specify the number of vertices that makes up the perimeter of the arc. Default value is 25. (Optional)


Point -----
Description
Draws a point, a coordinate in space at the dimension of one pixel. The first parameter is the horizontal value for the point, the second param is the vertical value for the point. The color of the point is changed with the stroke() function. The size of the point can be changed with the strokeWeight() function.
Syntax
point(x, y, [z])
point(coordinate_vector)
Parameters
x Number: the x-coordinate
y Number: the y-coordinate
z Number: the z-coordinate (for WebGL mode) (Optional)



angleMode -----
Description
Sets the current mode of p5 to given mode. Default mode is RADIANS.
Syntax
angleMode(mode)
Parameters
mode Constant: either RADIANS or DEGREES