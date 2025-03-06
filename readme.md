# JavaScript Calculator

A simple, interactive calculator built with HTML, CSS, and JavaScript.

<video src="[./Demo.mp4](https://drive.google.com/file/d/1AViwLUXFRAF5oaqGbj40ydeCiSVz_hbo/view?usp=sharing)" width="320" height="240" autoplay loop></video>

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Clear display functionality
- Responsive grid layout
- Position customization:
  - Center the calculator on the screen
  - Revert to original position
  - Set custom positions with pixel values

## Project Structure

The project consists of three main files:

- `index.html` - The calculator's HTML structure
- `style.css` - Styling and grid layout
- `script.js` - Calculator functionality and position control

## How It Works

The calculator uses a grid-based layout with buttons for numbers and operations. When a button is clicked, the corresponding value is appended to the display. The calculation is performed using JavaScript's `eval()` function when the equals button is pressed.

### Calculation Logic

1. User inputs numbers and operations
2. The input is displayed in real-time
3. When the user clicks "=" the expression is evaluated
4. Results are rounded to 3 decimal places for clean output
5. Error handling for invalid expressions

### Positioning Features

The calculator comes with three positioning options:

- **Center Calculator**: Places the calculator in the center of the screen
- **Revert Back**: Returns the calculator to its original position
- **Change Position by px**: Allows the user to input custom x and y coordinates

## Installation

1. Clone this repository
2. Open `index.html` in your browser

## Future Improvements

- Add memory functions (M+, M-, MR)
- Implement keyboard support
- Add scientific calculator functions
- Improve mobile responsiveness
- Add themes/color options

## License

[MIT](LICENSE)

## Author

Mayank Raj

---

Feel free to contribute to this project by submitting issues or pull requests!
