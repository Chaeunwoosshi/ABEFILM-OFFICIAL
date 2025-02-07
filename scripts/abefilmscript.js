


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

