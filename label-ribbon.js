document.addEventListener('DOMContentLoaded', function () {
    var gradients = [
        'linear-gradient(90deg, #FF5733, #FFC0CB)',  // Red to Pink
        'linear-gradient(90deg, #4B0082, #6A5ACD)',  // Indigo to Slate Blue
        'linear-gradient(90deg, #00CED1, #20B2AA)',  // Dark Turquoise to Light Sea Green
        'linear-gradient(90deg, #FF4500, #FFD700)',  // Orange Red to Gold
        'linear-gradient(90deg, #800080, #FF1493)',  // Purple to Deep Pink
        'linear-gradient(90deg, #00FF00, #32CD32)',  // Lime Green to Lime
        'linear-gradient(90deg, #00FFFF, #00BFFF)',  // Cyan to Deep Sky Blue
        'linear-gradient(90deg, #FF6347, #FF8C00)',  // Tomato to Dark Orange
        'linear-gradient(90deg, #FFD700, #FF6347)',  // Gold to Tomato
        'linear-gradient(90deg, #D2691E, #FF4500)',  // Chocolate to Orange Red
        'linear-gradient(90deg, #7FFF00, #7B68EE)',  // Chartreuse to Medium Slate Blue
        'linear-gradient(90deg, #FF1493, #FF6347)',  // Deep Pink to Tomato
        'linear-gradient(90deg, #8A2BE2, #FF6347)',  // Blue Violet to Tomato
        'linear-gradient(90deg, #FF69B4, #FF1493)',  // Hot Pink to Deep Pink
        'linear-gradient(90deg, #40E0D0, #FF6347)',  // Turquoise to Tomato
        'linear-gradient(90deg, #20B2AA, #00FF00)',  // Light Sea Green to Lime
        'linear-gradient(90deg, #8B4513, #FFD700)',  // Saddle Brown to Gold
        'linear-gradient(90deg, #FF6347, #FF4500)',  // Tomato to Orange Red
        'linear-gradient(90deg, #A52A2A, #FF6347)',  // Brown to Tomato
        'linear-gradient(90deg, #000000, #808080)',  // Black to Gray
        'linear-gradient(90deg, #7FFF00, #32CD32)',  // Chartreuse to Lime Green
        'linear-gradient(90deg, #FF4500, #DAA520)',  // Orange Red to Goldenrod
        'linear-gradient(90deg, #3CB371, #006400)',  // Medium Sea Green to Dark Green
        'linear-gradient(90deg, #B22222, #8B0000)',  // Firebrick to Dark Red
        'linear-gradient(90deg, #800080, #FF1493)',  // Purple to Deep Pink
        'linear-gradient(90deg, #00CED1, #008B8B)',  // Dark Turquoise to Dark Cyan
        'linear-gradient(90deg, #FF6347, #FFD700)',  // Tomato to Gold
        'linear-gradient(90deg, #708090, #2F4F4F)',  // Slate Gray to Dark Slate Gray
        'linear-gradient(90deg, #4682B4, #1E90FF)',  // Steel Blue to Dodger Blue
        'linear-gradient(90deg, #5F9EA0, #4682B4)',  // Cadet Blue to Steel Blue
        'linear-gradient(90deg, #FF8C00, #FF4500)',  // Dark Orange to Orange Red
    ];

    function styleLabels() {
        var labels = document.querySelectorAll('.entry-label'); // Adjust if more classes are needed
        labels.forEach((label, index) => {
            var gradient = gradients[index % gradients.length];
            label.style.backgroundImage = gradient;
            label.style.color = '#fff'; // Set text color to white
            label.style.padding = '2px 5px'; // Add some padding
            label.style.borderRadius = '4px'; // Rounded corners
            label.style.display = 'inline-block'; // Ensure inline block display

            // Set borders only for top-right and bottom-left
            label.style.borderTop = `2px solid ${gradients[index % gradients.length].split(',')[0].split('(')[1].trim()}`; // Top border from gradient color
            label.style.borderRight = 'none'; // No right border
            label.style.borderBottom = `2px solid #FFC0CB`; // Bottom border from a specific color (or gradient stop)
            label.style.borderLeft = 'none'; // No left border
            label.style.borderRadius = '0 5px 0px 5px'; // Border radius for top-right and bottom-left corners
        });
    }

    // Style existing labels
    styleLabels();

    // Observe dynamically added labels
    var observer = new MutationObserver(styleLabels);
    observer.observe(document.body, { childList: true, subtree: true });
});
