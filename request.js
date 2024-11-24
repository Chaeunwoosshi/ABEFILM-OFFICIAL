

// Function to apply styles dynamically
function applyStyles() {
  const buttonStyle = {
    display: 'block',
    margin: '-1px auto 30px auto', // Same margin for top and bottom for consistent spacing
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    textAlign: 'center',
    zIndex: '1000', // Ensure the button stays on top
  };

  const widgetStyle = {
    display: 'none', // Hidden by default
    position: 'fixed', // Change from absolute to fixed
    bottom: '0', // Positioned at the bottom of the screen
    left: '0',
    width: '100%', // Full width of the screen
    height: '60vh', // 60% of screen height from the bottom
    backgroundColor: '#121318', // Dark background for the widget
    color: '#fff', // Light text color for contrast
    borderTop: '1px solid #333',
    boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.5)',
    padding: '20px',
    overflowY: 'auto', // Enable vertical scrolling if content overflows
    zIndex: '999', // Below the button
    transition: 'transform 0.3s ease-in-out',
    transform: 'translateY(100%)', // Initially hidden offscreen
    boxSizing: 'border-box', // Ensure padding and borders don't overflow
  };

  const formStyle = {
    width: '100%',
    padding: '10px 0',
  };

  const inputStyle = {
    width: '95%',
    padding: '7px',
    margin: '8px 0',
    fontSize: '14px',
    border: '1px solid #222', 
    backgroundColor: '#111', 
    color: 'white',
    borderRadius: '5px',
  };

  const buttonSubmitStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  };

  const buttonNow = document.getElementById('requestNow'); // New button that triggers the same floating form
  const floatingWidget = document.getElementById('floatingWidget');
  const form = floatingWidget.querySelector('form');
  const inputs = form.querySelectorAll('input, textarea');
  const submitButton = form.querySelector('input[type="button"]');

  // Apply styles to the floating widget
  Object.assign(floatingWidget.style, widgetStyle);

  // Apply styles to the form and its inputs
  Object.assign(form.style, formStyle);
  inputs.forEach(input => Object.assign(input.style, inputStyle));
  Object.assign(submitButton.style, buttonSubmitStyle);

  // Add the show class to the floating widget
  function toggleFloatingWidget() {
    if (floatingWidget.style.display === 'none') {
      floatingWidget.style.display = 'block';
      floatingWidget.style.transform = 'translateY(0)';
    } else {
      floatingWidget.style.display = 'none';
      floatingWidget.style.transform = 'translateY(100%)';
    }
  }

  // Show floating widget on requestNow click
  buttonNow.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleFloatingWidget();
  });

  // Prevent closing when clicking inside the floating widget
  floatingWidget.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  // Swipe down to close the floating widget
  let startY = 0;
  let endY = 0;

  floatingWidget.addEventListener('touchstart', function(event) {
    startY = event.touches[0].clientY;
  });

  floatingWidget.addEventListener('touchmove', function(event) {
    endY = event.touches[0].clientY;
  });

  floatingWidget.addEventListener('touchend', function() {
    // Only close the widget if swipe is downward
    if (startY < endY && endY - startY > 50) { // 50px threshold for swipe
      floatingWidget.style.transform = 'translateY(100%)'; // Hide floating widget
    }
  });

  // Ensure the floating widget doesn't close if clicked/tapped inside
  window.addEventListener('click', function(event) {
    // Prevent closing the widget if the click is inside the widget
    if (!floatingWidget.contains(event.target)) {
      floatingWidget.style.transform = 'translateY(100%)'; // Hide floating widget
    }
  });
}
window.onload = function() {

  applyStyles(); // From the first script
  

};
