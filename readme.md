# JavaScript Calculator  

A simple, interactive calculator built with HTML, CSS, and JavaScript.   

## 🚀 New Features & Modifications  
- **Improved Position Control:**  
  - Clicking outside the calculator now moves it dynamically.  
  - New constraints prevent it from going off-screen.  
- **Enhanced Display Logic:**  
  - Rounded results to 3 decimal places.  
  - "Empty Field" warning for empty calculations.  
- **Better Button Feedback:**  
  - Visual effects on button press (`mousedown`, `mouseup`).  
- **Bug Fixes:**  
  - Prevented invalid expressions from breaking the UI.  
  - Ensured consistent placement of the calculator on different screen sizes.  

## Features  
- Basic arithmetic operations (addition, subtraction, multiplication, division)  
- Clear display functionality  
- Responsive grid layout  
- **Position customization:**  
  - Center the calculator on the screen  
  - Revert to original position  
  - Set custom positions with pixel values  
  - **NEW:** Move by clicking anywhere outside the calculator  

## Project Structure  
- `index.html` - The calculator's HTML structure  
- `style.css` - Styling and grid layout  
- `script.js` - Calculator functionality and position control  

## How It Works  
The calculator uses a grid-based layout with buttons for numbers and operations. When a button is clicked, the corresponding value is appended to the display. The calculation is performed using JavaScript's `eval()` function when the equals button is pressed.  

### Positioning Features  
The calculator now comes with **four** positioning options:  
1. **Center Calculator**: Places the calculator in the center of the screen  
2. **Revert Back**: Returns the calculator to its original position  
3. **Change Position by px**: Allows the user to input custom x and y coordinates  
4. **NEW:** Click anywhere outside the calculator to move it dynamically  

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
<b>Mayank Raj</b>  

---  
Feel free to contribute to this project by submitting issues or pull requests!  
