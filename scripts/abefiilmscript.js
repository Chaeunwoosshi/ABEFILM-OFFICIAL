
document.addEventListener('DOMContentLoaded', function () {
    function styleTitle() {
        var titles = document.querySelectorAll('.main-title .title'); // Select all target elements

        // Define an array of darker colors
        var colors = ['#8B008B', '#B22222', '#2E8B57', '#104E8B', '#B8860B']; 

        titles.forEach((title, index) => {
            // Add styles directly to the title element
            title.style.position = 'relative'; // Ensure relative positioning for the pseudo-element
            title.style.fontSize = '18px'; // Set font size
            title.style.paddingLeft = '10px'; // Adjust space for the vertical line

            // Extract the first letter and the rest of the text
            var text = title.textContent.trim();
            if (text.length > 0) {
                var firstLetter = text.charAt(0); // Get the first letter
                var restText = text.slice(1); // Get the remaining text

                // Wrap the first letter in a span with a darker color
                title.innerHTML = `<span style="color: ${colors[index % colors.length]}; font-size: 22px; font-weight: bold;">${firstLetter}</span>${restText}`;
            }

            // Dynamically create the vertical line effect
            var verticalLine = document.createElement('span');
            verticalLine.style.position = 'absolute';
            verticalLine.style.left = '4px'; // Position the line on the left
            verticalLine.style.top = '15%'; // Center the line vertically
            verticalLine.style.transform = 'translateY(-50%)'; // Adjust for perfect centering
            verticalLine.style.height = '15px'; // Smaller height for the line
            verticalLine.style.width = '15px'; // Width of the vertical line
            verticalLine.style.zIndex = '-1'; 

            // Assign a darker color to the vertical line based on index
            verticalLine.style.background = `linear-gradient(125deg, ${colors[index % colors.length]} 5%, black 100%)`;
            verticalLine.style.borderRadius = '10px'; // Rounded corners

            // Append the vertical line to the title
            title.appendChild(verticalLine);
        });
    }

    // Apply the styling function
    styleTitle();
});


    

document.addEventListener("DOMContentLoaded", function () {
    // Create a style tag
    const style = document.createElement('style');
    style.innerHTML = `
        .main-title h3 {
            height: 28px;
            margin-top: 10px !important;
            margin-left: -5px !important;
            z-index: 3 !important;  /* Add z-index */
        }
    `;
    
    // Append the style tag to the head of the document
    document.head.appendChild(style);
});



document.addEventListener('DOMContentLoaded', function () {
    const episodes = document.querySelectorAll(".epi.btn");
    const iframe = document.querySelector(".youtube-responsive iframe");

    function removeActiveClass() {
        episodes.forEach(epi => {
            epi.classList.remove("active");
        });
    }

    if (episodes.length > 0) {
        iframe.src = episodes[0].getAttribute("data-src");
        episodes[0].classList.add("active");
    }

    episodes.forEach((epi) => {
        epi.addEventListener("click", (e) => {
            e.preventDefault();
            const epiUrl = epi.getAttribute("data-src");
            removeActiveClass();
            epi.classList.add("active");
            iframe.src = epiUrl;
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var modalBtn = document.getElementById("modalbtn");
    var myModal = document.getElementById("mymodal");

    if (modalBtn && myModal) {
        var closeBtn = myModal.querySelector(".close");

        modalBtn.addEventListener("click", function () {
            myModal.style.display = "block";
        });

        closeBtn.addEventListener("click", function () {
            myModal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === myModal) {
                myModal.style.display = "none";
            }
        });
    }
});



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
            label.style.padding = '1px 4px'; // Add some padding
            label.style.borderRadius = '4px'; // Rounded corners
            label.style.display = 'inline-block'; // Ensure inline block display

            label.style.fontSize = '8px';
            label.style.borderRadius = '0 5px 0px 5px'; // Border radius for top-right and bottom-left corners
        });
    }

    // Style existing labels
    styleLabels();

    // Observe dynamically added labels
    var observer = new MutationObserver(styleLabels);
    observer.observe(document.body, { childList: true, subtree: true });
});



document.addEventListener('DOMContentLoaded', function () {
    const backToTop = document.querySelector('#back-top');

    // Create SVG Circle with a background track
    const svgNS = 'http://www.w3.org/2000/svg';
    const circleSvg = document.createElementNS(svgNS, 'svg');
    const track = document.createElementNS(svgNS, 'circle'); // Background track
    const circle = document.createElementNS(svgNS, 'circle'); // Progress indicator

    // Set up SVG attributes
    circleSvg.setAttribute('viewBox', '0 0 40 40');
    circleSvg.style.position = 'absolute';
    circleSvg.style.top = '50%';
    circleSvg.style.left = '50%';
    circleSvg.style.transform = 'translate(-50%, -50%)';
    circleSvg.style.width = '50px';
    circleSvg.style.height = '50px';
    circleSvg.style.zIndex = '99'; // Add z-index to ensure proper stacking

    // Background track
    track.setAttribute('cx', '20');
    track.setAttribute('cy', '20');
    track.setAttribute('r', '18');
    track.setAttribute('stroke', '#cccccc'); // Light gray track color
    track.setAttribute('stroke-width', '1');
    track.setAttribute('fill', 'none');

    // Progress indicator
    circle.setAttribute('cx', '20');
    circle.setAttribute('cy', '20');
    circle.setAttribute('r', '18');
    circle.setAttribute('stroke', '#2cda4e'); // Progress color
    circle.setAttribute('stroke-width', '1');
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke-dasharray', Math.PI * 2 * 18); // Circumference
    circle.setAttribute('stroke-dashoffset', Math.PI * 2 * 18); // Initially hidden
    circle.setAttribute('transform', 'rotate(-90 20 20)'); // Rotate to start at the top

    circleSvg.appendChild(track); // Add track to SVG
    circleSvg.appendChild(circle); // Add progress indicator to SVG
    backToTop.appendChild(circleSvg);

    // Add z-index to the button wrapper to ensure it stacks properly
    backToTop.style.zIndex = '99';

    // Scroll event listener to update progress
    document.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        // Allowance to ensure full enclosure
        const scrollFraction = Math.min(scrollTop / docHeight + 0.03, 1);
        const offset = Math.PI * 2 * 18 * (1 - scrollFraction);

        circle.setAttribute('stroke-dashoffset', offset);
    });

    // Back-to-top button functionality
    backToTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector("input[name='q']");
  const resultsContainer = document.createElement('div');
  
  resultsContainer.style.position = 'fixed';  
  resultsContainer.style.top = '88px'; 
  resultsContainer.style.left = '0'; 
  resultsContainer.style.background = '#15161f';  
  resultsContainer.style.color = '#fff';      
  resultsContainer.style.width = '94%';     
  resultsContainer.style.height = 'auto';    
  resultsContainer.style.maxHeight = '80vh'; 
  resultsContainer.style.overflowY = 'auto';  
  resultsContainer.style.zIndex = '101';   
  resultsContainer.style.display = 'none';    
  resultsContainer.style.borderRadius = '4px'; 
  resultsContainer.style.padding = '10px';    
  resultsContainer.style.paddingBottom = '50px';  

  document.body.appendChild(resultsContainer);

  window.bloggersitemap = function(data) {
    const results = data.feed.entry || [];

    if (results.length === 0) {
      resultsContainer.innerHTML = '<div style="padding: 10px; color: #777; font-size: 14px;">No results found</div>';
      resultsContainer.style.display = 'block';
      return;
    }

    const query = searchInput.value.trim().toLowerCase();

    const filteredResults = results.filter(entry => {
      const title = entry.title.$t.toLowerCase();
      const labels = entry.category ? entry.category.map(c => c.term.toLowerCase()).join(' ') : '';
      return title.includes(query) || labels.includes(query);
    });

    if (filteredResults.length === 0) {
      resultsContainer.innerHTML = '<div style="padding: 10px; color: #777; font-size: 14px;">No matching results found</div>';
      resultsContainer.style.display = 'block';
      return;
    }

    const resultsHTML = filteredResults
      .map(entry => {
        const title = entry.title.$t;
        const link = entry.link.find(l => l.rel === 'alternate').href;
        const thumbnail = entry.media$thumbnail ? entry.media$thumbnail.url.replace(/s72-c/, 's400') : ''; 
        const labels = entry.category ? entry.category.map(c => c.term).join(', ') : 'No genre/labels';

        return `
          <a href="${link}" style="display: flex; padding: 10px; text-decoration: none; color: white;">
            <div style="display: flex; flex-direction: column; align-items: flex-start;">
              ${thumbnail ? `<img src="${thumbnail}" alt="${title}" style="width: 80px; height: 100px; border-radius: 4px;">` : ''}
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-start; margin: 0 10px 10px 20px;">
              <div style="font-weight: bold; font-size: 14px; margin-bottom: 5px;">${title}</div>
              <div style="font-size: 12px; color: #ccc;">${labels}</div>
            </div>
          </a>
        `;
      })
      .join('');

    resultsContainer.innerHTML = resultsHTML;
    resultsContainer.style.display = 'block';
  };

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim();

    if (!query) {
      resultsContainer.innerHTML = '';
      resultsContainer.style.display = 'none';
      return;
    }

    const blogUrl = 'https://abefilmstreamtv.blogspot.com';
    const searchUrl = `${blogUrl}/feeds/posts/summary?alt=json-in-script&max-results=9999&callback=bloggersitemap&q=${encodeURIComponent(query)}`;

    const scriptTag = document.createElement('script');
    scriptTag.src = searchUrl;
    document.body.appendChild(scriptTag);
  });

  document.addEventListener('click', function (event) {
    if (!searchInput.contains(event.target)) {
      resultsContainer.style.display = 'none';
    }
  });
});


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
        zIndex: '99', // Ensure the button stays on top
    };

    const widgetStyle = {
        display: 'none', // Hidden by default
        position: 'fixed', // Change from absolute to fixed
        bottom: '0', // Positioned at the bottom of the screen
        left: '0',
        width: '100%', // Full width of the screen
        height: '60vh', // 60% of screen height from the bottom

backgroundColor: '#0f0d10',

backgroundImage: 'linear-gradient(160deg, #0f0d10 0%, #0a1015 100%)',
        
  
        color: '#fff', // Light text color for contrast
        borderTop: '1px solid #222',
        borderRadius: '25px 25px 0 0',
        padding: '20px',
        overflowY: 'auto', // Enable vertical scrolling if content overflows
        zIndex: '99', // Below the button
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
        padding: '10px',
       margin: '8px 0',
        fontSize: '14px',
        border: '1px solid #222',
        background:'transparent',
        color: 'white',
        borderRadius: '5px',
    };

    const buttonSubmitStyle = {
        background: '#1cc749',
        
        color: 'white',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
    };

    const buttonNow = document.getElementById('requestNow');
    const floatingWidget = document.getElementById('floatingWidget');
    const form = floatingWidget.querySelector('form');
    const inputs = form.querySelectorAll('input, textarea');
    const submitButton = form.querySelector('input[type="button"]');

    // Apply styles
    Object.assign(floatingWidget.style, widgetStyle);
    Object.assign(form.style, formStyle);
    inputs.forEach(input => Object.assign(input.style, inputStyle));
    Object.assign(submitButton.style, buttonSubmitStyle);

    // Toggle widget visibility
    function toggleFloatingWidget() {
        if (floatingWidget.style.display === 'none') {
            floatingWidget.style.display = 'block';
            floatingWidget.style.transform = 'translateY(0)';
        } else {
            floatingWidget.style.transform = 'translateY(100%)';
            setTimeout(() => {
                floatingWidget.style.display = 'none';
            }, 300);
        }
    }

    // Show floating widget on button click
    buttonNow.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleFloatingWidget();
    });

    // Prevent closing when clicking inside the widget
    floatingWidget.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Handle swipe-down gesture to close widget
    let startY = 0;
    floatingWidget.addEventListener('touchstart', function(event) {
        startY = event.touches[0].clientY;
    });

    floatingWidget.addEventListener('touchend', function(event) {
        const endY = event.changedTouches[0].clientY;
        if (endY - startY > 50) { // 50px threshold
            floatingWidget.style.transform = 'translateY(100%)';
            setTimeout(() => {
                floatingWidget.style.display = 'none';
            }, 300);
        }
    });
}

// Initialize styles on page load
window.onload = function() {
    applyStyles();
};



document.addEventListener("DOMContentLoaded", function() {
    let iframe = document.querySelector(".abefilm-iframe"); // Select the unique iframe
    if (iframe) {
        iframe.style.overflowX = "auto"; // Allow horizontal scrolling if needed
        iframe.style.overflowY = "hidden"; // Hide the vertical scrollbar
        iframe.setAttribute("scrolling", "no"); // Prevent scrolling
    }
});



document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".hartomy-bookmark-btn");

  // Initialize button styles
  buttons.forEach((btn) => {
    // Reset button styles
    btn.style.padding = "0";
    btn.style.margin = "0";
    btn.style.border = "none";
    
    btn.style.height = "auto";
    btn.style.width = "auto";
    btn.style.lineHeight = "1";
    btn.style.display = "inline-flex";
    btn.style.alignItems = "center";
    btn.style.justifyContent = "center";

    btn.addEventListener("click", function () {
      // Call the function to show the popup when the button is clicked
      showPopup("Successfully Added to Watchlist", btn);
    });
  });

  // Function to show custom chat bubble popup
  const showPopup = (message, btn) => {
    const popup = document.createElement('div');
    popup.style.position = 'fixed'; // Fixed position to stay at the top
    popup.style.top = '-100px'; // Initially outside the screen
    popup.style.left = '0'; // Stretch to full width
    popup.style.width = '100%'; // Full width
    popup.style.backgroundColor = '#111';
    popup.style.color = '#fff';
    popup.style.padding = '10px 0'; // Padding for the message
    popup.style.borderRadius = '0'; // Remove rounded corners to match full width
    popup.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
    popup.style.zIndex = '9999999999';
    popup.style.fontSize = '14px';
    popup.style.fontFamily = 'Arial, sans-serif';
    popup.style.textAlign = 'center';

    // Adding transition for sliding effect
    popup.style.transition = 'top 0.5s ease-out'; // Slide in from top

      // Add the icon before the message
    popup.innerHTML = `
      <i class="fa-regular fa-circle-check" style="margin-right: 0px;"></i>
      <div style="font-weight: bold; display: inline-block;">${message}</div>
    `;

    // Add the popup to the body
    document.body.appendChild(popup); // Append to body to keep it fixed at the top

    // Slide in the popup
    setTimeout(() => {
      popup.style.top = '0px'; // Slide down to 100px from the top
    }, 10); // Short delay to trigger the transition

    // Remove the popup after 3 seconds
    setTimeout(() => {
      popup.style.top = '-100px'; // Slide back out of the screen
      // After the sliding out transition ends, remove the popup from the DOM
      setTimeout(() => {
        popup.style.display = 'none';
      }, 500); // Wait for the slide-out transition to finish
    }, 2000); // Keep the popup visible for 3 seconds
  };

});


function showPopup() {
    var popup = document.getElementById('notificationPopup');
    if (popup) {
        popup.style.display = 'block';  // Show the popup
        popup.style.zIndex = '102'; // Ensure popup background has high z-index
    }
}

function closePopup() {
    var popup = document.getElementById('notificationPopup');
    if (popup) {
        popup.style.display = 'none'; // Hide the popup
    }
}

function toggleContent(element) {
    if (element.classList.contains('expanded')) {
        element.classList.remove('expanded');
    } else {
        document.querySelectorAll('.collapsible').forEach(function(collapsible) {
            collapsible.classList.remove('expanded');
        });
        element.classList.add('expanded');
    }
}

function filterNotifications() {
    var input, filter, notifications, titles, i, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toLowerCase();
    notifications = document.getElementsByClassName('collapsible');
    for (i = 0; i < notifications.length; i++) {
        titles = notifications[i].getElementsByClassName('title')[0];
        if (titles) {
            txtValue = titles.textContent || titles.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                notifications[i].style.display = "";
            } else {
                notifications[i].style.display = "none";
            }
        }       
    }
}


       

// Function to darken a color and add transparency
function darkenColorWithTransparency(color, percent, alpha) {
    var r = parseInt(color.slice(1, 3), 16);
    var g = parseInt(color.slice(3, 5), 16);
    var b = parseInt(color.slice(5, 7), 16);
    
    // Darken the RGB values
    r = Math.floor(r * (1 - percent));
    g = Math.floor(g * (1 - percent));
    b = Math.floor(b * (1 - percent));
    
    // Return the color in RGBA format with added transparency
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Get all genre label links
var genreLinks = document.querySelectorAll('.list-label .label-name');

// Define a refined array of lighter text colors suitable for dark backgrounds
var textColors = [
    '#FFFFFF', '#FFB6C1', '#FFD700', '#B0E0E6', '#ADD8E6', 
    '#F0E68C', '#F5FFFA', '#D3D3D3', '#FF69B4', '#FF6347', 
    '#98FB98', '#FF4500', '#32CD32', '#00FFFF', '#FF1493', 
    '#F0F8FF', '#F5F5F5', '#7FFFD4', '#FF8C00', '#FFDAB9',
    '#FF6347', '#F0E68C', '#C71585', '#F7C1C1', '#B0E0E6', 
    '#FFE4B5', '#FFFACD', '#FFDAB9', '#E6E6FA'
];

// Set background and text colors
for (var i = 0; i < genreLinks.length; i++) {
    // Get light text color
    var lightTextColor = textColors[i % textColors.length];  // Cycle through light colors if needed
    genreLinks[i].style.color = lightTextColor;  // Apply light color to the text

    // Darken the text color for the background and add transparency (e.g., darken with 0.2 and 0.2 transparency)
    var darkerBackgroundColor = darkenColorWithTransparency(lightTextColor, 0.5, 0.5);  // Darken by 20% and set alpha to 0.15
    genreLinks[i].style.backgroundColor = darkerBackgroundColor;  // Set the background color to the darker shade with transparency
    
    // Set padding and border radius for cleaner appearance
    genreLinks[i].style.padding = '3px 7px';  // Slightly increased padding for a bigger label
    genreLinks[i].style.borderRadius = '5px';   // Slightly larger border radius
    
    // Adjust vertical alignment by changing line height
    genreLinks[i].style.lineHeight = '1.5';  // Adjust line height for better vertical alignment
    
    // Increase font size for better readability
    genreLinks[i].style.fontSize = '13px';  // Bigger font size for clearer text
    
    // Add hover effect
    genreLinks[i].addEventListener('mouseenter', function() {
        // Darker background and more saturated text on hover
        var hoverBackground = darkenColorWithTransparency(this.style.backgroundColor, 0.5, 0.9);  // Darken 10% on hover
        this.style.backgroundColor = hoverBackground;
        this.style.color = '#FFFFFF'; // Make text white on hover for contrast
    });

    genreLinks[i].addEventListener('mouseleave', function() {
        // Reset the background and text color after hover
        var originalBackground = darkenColorWithTransparency(this.style.backgroundColor, -0.2, 0.15);  // Reverse darkening
        this.style.backgroundColor = originalBackground;
        this.style.color = lightTextColor; // Reset to original text color
    });
}



// Select the elements
const headBox = document.querySelector('.head-box');
const headMenuFixed = document.querySelector('.head-menu-fixed');

// Listen for the scroll event
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) { // Adjust the scroll threshold (100px) as needed
        // Apply the background style directly when scrolled
        headBox.style.background = 'var(--background)';
        headMenuFixed.style.background = 'var(--background)';
    } else {
        // Reset the background to transparent (or whatever the default is)
        headBox.style.background = '';
        headMenuFixed.style.background = '';
    }
});

// Detect scroll and add/remove 'scrolled' class
window.addEventListener('scroll', function() {
    const header = document.querySelector('header'); // Select your header element
    if (window.scrollY > 100) { // Adjust the scroll threshold (100px) as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Function to hide head-wrapper-customized if inside post body on mobile
    function checkMobileDisplay() {
        const postBody = document.querySelector('.post-body');
        const headWrapperCustomized = document.querySelector('.head-wrapper-customized');
        
        if (postBody && headWrapperCustomized) {
            // Only apply the style when on mobile (max-width: 767px)
            if (window.innerWidth <= 767) {
                headWrapperCustomized.style.display = 'none';
            } else {
                headWrapperCustomized.style.display = 'block'; // Show it back when not mobile
            }
        }
    }

    // Initial check when the page loads
    checkMobileDisplay();

    // Add event listener for window resize to dynamically adjust the display
    window.addEventListener('resize', checkMobileDisplay);

    // Create and add the back button at the top-left corner for posts
    const postBody = document.querySelector('.post-body');
    if (postBody) {
        const backButton = document.createElement('button');
        backButton.classList.add('back-button');
        backButton.innerHTML = '<i class="fa-solid fa-chevron-left back-arrow"></i>';  // FontAwesome left arrow icon
        backButton.style.height = '50px'; // Set height to 50px
        backButton.style.position = 'fixed'; // Fixed position
        backButton.style.left = '10px'; // Adjusted to the left with some spacing
        backButton.style.zIndex = '9999'; // Ensure it stays on top
        backButton.style.top = '5px'; // Initially at the top (no offset)
        backButton.style.transition = 'top 0.3s ease'; // Smooth transition

        // Redirect to homepage instead of going back in history
        backButton.onclick = function() {
            window.location.href = 'https://abefilmstreamtv.blogspot.com/?m=1';  // Redirect to homepage
        };

        // Add a title for accessibility
        backButton.title = "Go back to the homepage";

        // Append back button to the body
        document.body.appendChild(backButton);

        // Add CSS to style the back button
        const style = document.createElement('style');
        style.innerHTML = `
            /* Hide back button on screens wider than 768px (desktop view) */
            @media screen and (min-width: 768px) {
                .back-button {
                    display: none;
                }
            }
            
            /* Style back button */
            .back-button {
                height: 50px;
                width: auto; /* Set auto width instead of 100% */
                padding: 10px;
                border: none;
                background: none; /* Remove background */
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }

            .back-button .back-arrow {
                font-size: 24px;
                color: white; /* Adjust the color to match your theme */
            }
        `;
        document.head.appendChild(style);
    }

    // Add scroll event to change styles on scroll
    window.addEventListener('scroll', function() {
        const backButton = document.querySelector('.back-button');
        if (backButton) {
            // Log scroll position for debugging
            console.log('Scroll Y Position:', window.scrollY);

            if (window.scrollY >= 160) { // Start moving button after 160px scroll
                console.log('Scrolled down 160px, positioning button');
                backButton.style.top = '0'; // Move the button to the top when scrolled
            } else {
                console.log('Less than 160px scroll, keeping initial position');
                backButton.style.top = '5px'; // Keep button at its initial position
            }
        }
    });
});





  document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("fullscreen-Button");
    let tabList = document.querySelector(".tab-list");
    let tabs = document.querySelectorAll(".tab-item");
    let tabContents = document.querySelectorAll(".tab-content");
    let mainContentPost = document.getElementById("main-content-post"); // Main content post
    let footer = document.querySelector("footer"); // Assuming footer is the element to be removed

    if (!iframe || !tabList || !mainContentPost) return;

    let iframeTop = iframe.offsetTop;
    let iframeHeight = iframe.offsetHeight;
    let tabListTop = tabList.offsetTop;
    let tabListFixed = false;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function scrollToTabList() {
        window.scrollTo({
            top: tabListTop - (tabListFixed ? 10 : 50), 
            behavior: 'smooth'
        });
    }

    window.addEventListener("scroll", function () {
        if (!isMobile()) return;

        let scrollY = window.scrollY;

        // Fix iframe at top
        if (scrollY > iframeTop) {
            iframe.style.position = "fixed";
            iframe.style.top = "0";
            iframe.style.width = "100%";
            iframe.style.height = iframeHeight + "px";
            iframe.style.zIndex = "1000";
        } else {
            iframe.style.position = "static";
        }

        // Fix tab list
        if (scrollY > tabListTop - iframeHeight && !tabListFixed) {
            tabList.style.position = "fixed";
            tabList.style.top = iframeHeight + "px"; 
            tabList.style.left = "0";
            tabList.style.width = "100%";
            tabList.style.zIndex = "99999999";
            tabList.style.background = "rgba(0, 0, 0, 1)";
            tabList.style.color = "#fff";
            tabListFixed = true;

            // Remove any additional padding when tab list is fixed
            tabContents.forEach(content => content.style.padding = "0");
        }

        // Restore tab list
        if (scrollY < tabListTop - 30 && tabListFixed) {
            tabList.style.position = "static";
            tabList.style.background = "";
            tabList.style.color = "";
            tabListFixed = false;
        }
    });

    // Check if the footer is removed and adjust padding for main-content-post
    if (!footer) {
        mainContentPost.style.paddingBottom = "20px";  // Add 40px padding at the bottom when footer is removed
    }

    // Adjust padding dynamically
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            scrollToTabList();
            tabContents.forEach(content => {
                content.style.paddingBottom = "0"; // Ensure no extra padding
                content.style.margin = "0";  // Ensure no extra margin
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const fullscreenButton = document.getElementById("fullscreenButton");
    const iframe = document.querySelector(".youtube-responsive iframe");

    if (fullscreenButton && iframe) {
        fullscreenButton.addEventListener("click", function () {
            // Check if an overlay exists and remove it
            const overlay = document.getElementById("videoOverlay");
            if (overlay) {
                overlay.remove(); // Remove the overlay if detected
            }

            // Make the iframe visible if it was hidden due to the overlay
            iframe.style.visibility = "visible"; 

            // Enter fullscreen mode for the iframe
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) {
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let iframe = document.getElementById("series"); // Target series iframe
    let overlay = document.querySelector(".overlay"); // Target overlay element
    let tabList = document.querySelector(".tab-list");
    let tabs = document.querySelectorAll(".tab-item");
    let tabContents = document.querySelectorAll(".tab-content");

    if (!iframe || !tabList) return;

    let iframeTop = iframe.offsetTop;
    let iframeHeight = iframe.offsetHeight;
    let tabListTop = tabList.offsetTop;
    let tabListFixed = false;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function scrollToTabList() {
        window.scrollTo({
            top: tabListTop - (tabListFixed ? 10 : 50),
            behavior: 'smooth'
        });
    }

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;

        if (!isMobile()) {
            // Disable overlay and other effects for larger screens
            if (overlay) {
                overlay.style.display = "none";
            }
            return;
        }

        // Fix series iframe at top
        if (scrollY > iframeTop) {
            iframe.style.position = "fixed";
            iframe.style.top = "0";
            iframe.style.width = "100%";
            iframe.style.height = iframeHeight + "px";
            iframe.style.zIndex = "1000";
        } else {
            iframe.style.position = "static";
        }

        // Fix tab list for series iframe
        if (scrollY > tabListTop - iframeHeight && !tabListFixed) {
            tabList.style.position = "fixed";
            tabList.style.top = iframeHeight + "px"; 
            tabList.style.left = "0";
            tabList.style.width = "100%";
            tabList.style.zIndex = "9";
            tabList.style.background = "rgba(0, 0, 0, 1)";
            tabList.style.color = "#fff";
            tabListFixed = true;

            // Remove any additional padding when tab list is fixed
            tabContents.forEach(content => content.style.padding = "0");
        }

        // Restore tab list for series iframe
        if (scrollY < tabListTop - 30 && tabListFixed) {
            tabList.style.position = "static";
            tabList.style.background = "";
            tabList.style.color = "";
            tabListFixed = false;
        }

        // Enable overlay behavior for smaller screens (mobile)
        if (isMobile() && overlay) {
            overlay.style.display = "block";
        }
    });

    // Adjust padding dynamically for series
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            scrollToTabList();
            tabContents.forEach(content => {
                content.style.padding = "0"; // Ensure no extra padding
                content.style.margin = "0";  // Ensure no extra margin
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let iframeFullScreen = document.getElementById("fullscreen-Button");
    let iframeSeries = document.getElementById("series");

    if (!iframeFullScreen && !iframeSeries) return;

    function createOverlay(iframe) {
        let overlay = document.createElement("div");
        overlay.setAttribute("id", "videoOverlay");

        Object.assign(overlay.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "400px",
            background: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            zIndex: "1100",
        });

        iframe.style.visibility = "hidden";

        let playButton = document.createElement("button");
        Object.assign(playButton.style, {
            background: "green",
            border: "2px solid black",
            borderRadius: "50%",
            width: "64px",
            height: "64px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            outline: "none",
            animation: "pulsate 1.5s ease-out infinite",
            boxShadow: "0 0 15px rgba(0, 255, 0, 0.7)",
            zIndex: "1200",
        });

        // Insert your SVG inside the button
        playButton.innerHTML = `
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#e3e5ed"></path> </g></svg>
        `;

        overlay.appendChild(playButton);
        document.body.appendChild(overlay);

        let styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @keyframes pulsate {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(styleSheet);

        function updateOverlayPosition() {
            let rect = iframe.getBoundingClientRect();
            overlay.style.top = rect.top + "px";
            overlay.style.left = rect.left + "px";
            overlay.style.width = rect.width + "px";
            overlay.style.height = rect.height + "px";
        }

        window.addEventListener("scroll", updateOverlayPosition);
        window.addEventListener("resize", updateOverlayPosition);

        playButton.addEventListener("click", function () {
            overlay.style.display = "none";
            iframe.style.visibility = "visible";
            iframe.play();
        });

        updateOverlayPosition();
    }

    function isMobile() {
        return window.innerWidth <= 768;
    }

    if (isMobile()) {
        if (iframeFullScreen) createOverlay(iframeFullScreen);
        if (iframeSeries) createOverlay(iframeSeries);
    }
});




document.addEventListener("DOMContentLoaded", function () {
    let isPostPage = document.querySelector(".post-body") !== null;
    let footer = document.querySelector(".footer-wrapper");
    let mainContent = document.querySelector(".main-content");
    let tabRelated = document.querySelector(".tab-related");

    if (isPostPage) {
        // Hide footer only on post pages
        if (footer) {
            footer.style.display = "none";
        }

        // Force reflow after setting display properties
        setTimeout(() => {
            document.documentElement.style.height = "auto";
            document.documentElement.offsetHeight; // Trigger reflow
        }, 100);
    }

    document.querySelector(".tab-comment")?.addEventListener("click", function () {
        document.querySelectorAll(".HTML, .footer-wrapper").forEach(el => el.style.display = "none");
        if (mainContent) mainContent.style.display = "block";
    });

    tabRelated?.addEventListener("click", function () {
        document.querySelectorAll(".HTML, .main-content").forEach(el => el.style.display = "block");

        if (isPostPage && footer) {
            footer.remove();
        }

        // Force reflow again when switching back to related tab
        setTimeout(() => {
            document.documentElement.style.height = "auto";
            document.documentElement.offsetHeight;
        }, 100);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let allLabels = new Set();

    // Collect all unique label names
    document.querySelectorAll(".label-link").forEach(link => {
        let labelText = link.textContent.trim().toLowerCase();
        allLabels.add(labelText);
    });

    console.log([...allLabels]); // Log all unique labels in console

    // Apply colors
    applyDynamicLabelColors([...allLabels]);

    function applyDynamicLabelColors(labels) {
        document.querySelectorAll(".label-link").forEach(link => {
            let labelText = link.textContent.trim().toLowerCase();
            let color = getLabelColor(labelText, labels);

            // Apply dynamic colors
            link.style.setProperty("color", color, "important");
            link.style.setProperty("background-color", color.replace("rgb", "rgba").replace(")", ", 0.2)"), "important");
            link.style.setProperty("padding", "2px 5px", "important");
            link.style.setProperty("border-radius", "3px", "important");
            link.style.setProperty("display", "inline-block", "important");
            link.style.setProperty("font-weight", "bold", "important"); // Optional bold text
        });
    }

    function getLabelColor(label, labels) {
        const colors = [
            "rgb(255, 0, 127)",  // Pink
            "rgb(0, 128, 255)",  // Blue
            "rgb(255, 165, 0)",  // Orange
            "rgb(255, 0, 0)",    // Red
            "rgb(0, 255, 0)",    // Green
            "rgb(128, 0, 128)",  // Purple
            "rgb(75, 0, 130)",   // Indigo
            "rgb(255, 20, 147)", // Deep Pink
            "rgb(255, 140, 0)",  // Dark Orange
            "rgb(46, 139, 87)"   // Sea Green
        ];

        let index = labels.indexOf(label);
        return index !== -1 ? colors[index % colors.length] : "rgb(128, 128, 128)"; // Default gray if not found
    }
});



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".entry-author").forEach(author => {
        let authorName = author.querySelector(".author-name");

        if (authorName) {
            let profilePic = document.createElement("img");

            // Check for specific authors and set the profile image accordingly
            if (authorName.textContent.trim() === "ABEFILM") {
                profilePic.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUjhMEQx-O8_bICWb-MZb_nE485bB0SPPGGRtpFtjvtZLmC-DmDZLoM6TOUfgl-mQyqGzdakwmcaiys5KQBOCcnKVtHexYXOW9hDyIJE662PUflIEGd64DkgMXAK3i9JeUOeFjXsX1e4UyCdEle82mJdh9LgsVP3I8-BrlIqxsgYuABIhn6nhV9pd6-PE/s500/ABEFILM%20%287%29.png";
            } else if (authorName.textContent.trim() === "Master Oppa") {
                profilePic.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibAH7Wq9Zvnk3Xtu3B-9YGcQRDAw52hnem1YB4v0HboiSrKOqVmROBDAxpBRyJuBcvsUQ20irdkU8Ln-nDurCNqQ3-HPD5PRAtEAOMwzS94gxz0hxkOIWZhpuL2_ZE72I-sBZfN6565d3rdaIV_DD96WF8DxaGk6M8FGfJ27VhxkE/s220/4516604.png";
            } else if (authorName.textContent.trim() === "Oppa Sarang") {
                profilePic.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAfQJsQefsRWzORiuNLcW3l_WwFph2-hlIudH5J9HCuSXdudWaPELrZXH92XKVSrfu2oZhxek94G_kdeSC5C-VrndXe3PgOmbyGgsJfsU3wMBFwU_n8ZK4SGTh_gd7dNniGP7iISYNDG0tiTtNeApnJVyQ-six4vKC1mfLcn3wZmV2/s220/Picsart_23-06-02_14-40-41-163.jpg";
            } else {
                profilePic.src = "https://via.placeholder.com/40";
            }

            profilePic.style.width = "15px";
            profilePic.style.height = "15px";
            profilePic.style.borderRadius = "50%";
            profilePic.style.marginRight = "3px";
            profilePic.style.verticalAlign = "middle";

            // Insert profile pic before the author name
            authorName.parentNode.insertBefore(profilePic, authorName);
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    // Styling for .queryEmpty
    document.querySelectorAll(".queryEmpty").forEach(el => {
        el.style.width = "100%";
        el.style.backgroundColor = "black";
        el.style.paddingTop = "100px";
       
    });

    // Ensure .result is visible by default
    document.querySelectorAll(".result").forEach(el => {
        el.style.opacity = "1"; // Fully visible
        el.style.marginLeft = "-40px";
        el.style.transition = "opacity 0.3s ease"; // Smooth fade transition
		el.style.padding = "20px 30px 20px 30px";
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 20) {
            document.querySelectorAll(".result").forEach(el => {
                el.style.opacity = "0"; // Fade out smoothly
            });
        } else {
            document.querySelectorAll(".result").forEach(el => {
                el.style.opacity = "1"; // Fade in smoothly
            });
        }
    });
});


$(document).on('click', function (e) {
    if ($(e.target).closest('.pop-html').length === 0 && !$(e.target).closest('.close-button').length) {
        $('#cart-modal').removeClass('open');
    }
});


// Initialize modal element
const modal = document.getElementById('cart-modal');
const modalContent = document.querySelector('.pop-html');
const openButton = document.querySelector('.open-modal');
const closeButton = document.querySelector('.close-button');

// Apply initial styles using JS
modal.style.cssText = `
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    z-index: 999;
    transition: right 0.4s ease;
`;

modalContent.style.cssText = `
    width: 80%;
    max-width: 400px;
    background: #fff;
    height: 100%;
    overflow-y: auto;
    position: absolute;
    right: 0;
    top: 0;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
`;

// Show modal
openButton.addEventListener('click', () => {
    modal.style.right = '0';
});

// Hide modal when clicking outside content
document.addEventListener('click', (e) => {
    if (!modalContent.contains(e.target) && e.target !== openButton && e.target !== closeButton) {
        modal.style.right = '-100%';
    }
});

// Hide modal when clicking close button
closeButton.addEventListener('click', () => {
    modal.style.right = '-100%';
});
