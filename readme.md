# Personal Web Timer

This project is a customizable, multi-purpose, web-based timer with a lavish design. The timer includes options to set hours, minutes, and seconds manually or use preset times for 15, 10, or 5 minutes. The timer also features an alarm sound that repeats until manually stopped.

## Features

- Custom input for hours, minutes, and seconds
- Preset buttons for quick 15, 10, and 5-minute timers
- Start, pause, and reset functionality
- Repeating alarm sound that plays every 3 seconds until stopped
- Displays the remaining time in the browser tab title

## How to Use

### Running the Timer

1. Open the `index.html` file in your browser.
2. You can either:
    - Enter hours, minutes, and seconds in the input fields, then press **Start**, or
    - Use one of the preset buttons (15, 10, or 5 minutes) to begin the timer.
3. The timer will display the remaining time in the format `HH:MM:SS`.
4. The alarm will play when the timer reaches zero and will continue repeating until you press **Stop**.
5. You can **Pause**, **Reset**, or **Stop** the timer and the alarm using the respective buttons.
6. The remaining time will be shown in the browser tab title for easy tracking.

### Preset Buttons

- **15 Minutes**: Starts a 15-minute timer.
- **10 Minutes**: Starts a 10-minute timer.
- **5 Minutes**: Starts a 5-minute timer.

### Audio Source

The alarm sound used in this project is sourced from the following YouTube video by chaeyo 채요:
[chaeyo채요 - Kawaii Ringtones #6](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

## Installation

No installation is required! Simply open the `index.html` file in any modern browser. To customize the timer or adjust the alarm sound, you can edit the `app.js` file.

## Files

- `index.html`: Contains the structure of the web page.
- `app.js`: Contains the logic for the timer, handling time inputs, presets, and alarm behavior.
- `style.css`: Optional style file (if using external CSS) to enhance the visual appearance.

## Customization

You can modify the timer's appearance or functionality by editing the corresponding sections in `app.js` or `index.html`.

- **Alarm Repeat Time**: Change the interval for how often the alarm repeats by modifying the `setInterval` duration in the `startAlarm` function in `app.js`.
- **Timer Presets**: To add or adjust timer presets, edit the preset buttons in the HTML and update the associated JavaScript logic.

Feel free to adjust the file as needed or add additional details depending on your project requirements!





















































