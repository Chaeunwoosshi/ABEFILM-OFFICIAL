<script>
// <![CDATA[

document.addEventListener("DOMContentLoaded", function() {
    let iframe = document.querySelector(".abefilm-iframe"); // Select the unique iframe
    if (iframe) {
        iframe.style.overflowX = "auto"; // Allow horizontal scrolling if needed
        iframe.style.overflowY = "hidden"; // Hide the vertical scrollbar
        iframe.setAttribute("scrolling", "no"); // Prevent scrolling
    }
});

// ]]>
</script>


    
<script type='text/javascript'>
//<![CDATA[

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
//]]>
</script>



     
  <script type='text/javascript'>
// <![CDATA[
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
// ]]>
</script>

      
    
 


   
// MAKE THE HEADER WITH BACKGROUND WHEN SCROLLED DOWN

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



    
   //BACK BUTTON FOR THE VIDEO 
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




// TO MAKE THE IFRAME, OVERLAY, TABS TO BE FIXED
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

    // Function to create overlay for an iframe
    function createOverlay(iframe) {
        // Create overlay
        let overlay = document.createElement("div");
        overlay.setAttribute("id", "videoOverlay");

        // Apply overlay styles
        Object.assign(overlay.style, {
            position: "fixed", // Follows iframe when scrolling
            top: "0",
            left: "0",
            width: "100%",
            height: "400px", // Match iframe height
            background: "#000", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            zIndex: "1100", // Higher than iframe
        });

        // Hide the iframe
        iframe.style.visibility = "hidden"; // Hide iframe initially

        // Play button
        let playButton = document.createElement("button");
        playButton.innerHTML = "▶";
        Object.assign(playButton.style, {
            fontSize: "20px", // Smaller font size
            color: "#fff",
            marginTop: "-20px",
            background: "green",
            border: "2px solid black",
            borderRadius: "50%", // Ensure it's a circle
            width: "60px", // Ensure the width is equal to the height
            height: "60px", // Ensure the height is equal to the width
            padding: "0", // Remove padding so the button size is controlled by width and height
            cursor: "pointer",
            outline: "none",
            position: "relative",
            animation: "pulsate 1.5s ease-out infinite", // Pulsating effect
            boxShadow: "0 0 15px rgba(0, 255, 0, 0.7)", // Glowing shadow
            zIndex: "1200" // Make sure it's above overlay
        });

        // Create an inner glow for the button to simulate layers
        let innerGlow = document.createElement("div");
        innerGlow.style.position = "absolute";
        innerGlow.style.top = "50%";
        innerGlow.style.left = "50%";
        innerGlow.style.width = "60%";
        innerGlow.style.height = "60%";
        innerGlow.style.background = "rgba(255, 255, 255, 0.4)";
        innerGlow.style.borderRadius = "50%";
        innerGlow.style.transform = "translate(-50%, -50%)";
        innerGlow.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.7)";
        playButton.appendChild(innerGlow); // Add inner glow to the button

        overlay.appendChild(playButton);
        document.body.appendChild(overlay); // Append to body

        // Add keyframe for pulsating effect
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

        // Position overlay over the iframe
        function updateOverlayPosition() {
            let rect = iframe.getBoundingClientRect();
            overlay.style.top = rect.top + "px";
            overlay.style.left = rect.left + "px";
            overlay.style.width = rect.width + "px";
            overlay.style.height = rect.height + "px";
        }

        // Update overlay when scrolling & resizing
        window.addEventListener("scroll", updateOverlayPosition);
        window.addEventListener("resize", updateOverlayPosition);

        // Hide overlay and show iframe on button click
        playButton.addEventListener("click", function () {
            overlay.style.display = "none"; // Hide overlay
            iframe.style.visibility = "visible"; // Show iframe
            iframe.play(); // Play video (for iframe-supported videos)
        });

        updateOverlayPosition(); // Set initial position
    }

    // Function to check if screen is mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Apply the overlay to both iframes only if it's a mobile screen
    if (isMobile()) {
        if (iframeFullScreen) createOverlay(iframeFullScreen);
        if (iframeSeries) createOverlay(iframeSeries);
    }
});



//FULLSCREEN BUTTON FOR WATCH NOW

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





//TO HIDE THE FOOTER OR THE OTHER CONTENT WHEN CLICKING THE TAB
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



//APPLYING COLOR TO LABEL IN THE SIDEBAR
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





//APPLYING COLOR TO LABEL OF THE INSIDE THE POST
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



//   TO DISPLAY THE AUTHOR PROFILE
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".entry-author").forEach(author => {
        let authorName = author.querySelector(".author-name");
        if (authorName) {
            let profilePic = document.createElement("img");
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
            authorName.parentNode.insertBefore(profilePic, authorName);
        }
    });
});
