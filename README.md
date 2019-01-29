# flashing-random-colors-on-screen
## Attention! It flashes.

Flashing random colors from the specified color range on the screen

![flashing-colors](https://user-images.githubusercontent.com/26818304/51944315-f84ca400-241b-11e9-872c-2eddd407275f.PNG)

Script in JS, jQuery and Bootstrap.

When you move the mouse in the browser window, the background of the page automatically changes into random colors.

The color values are drawn by default in RGB (`red: 0-255`, `green: 0-255`, `blue: 0-255`). 
You can change the range of colors by dragging the sliders for RGB colors.

In addition, you can make an automatic background change by specifying the duration of the flashing in seconds and the frequency of the background change by giving the duration in milliseconds, for example by giving duration 1 and frequency 200, the color change will occur every 200 milliseconds and 5 random colors will appear (5 x 200ms = 1000ms = 1s). You can change the range of colors during the execution - the change will be immediately accepted.

You can view all values of the colors you have drawn in the console in your browser.

Going back to commit `4a75887` you can choose the color value from the color picker (I used Spectrum.js). However, in this case, you can only draw from 0 to the chosen border for each color in RGB.
