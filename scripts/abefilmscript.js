


//APPLYING COLOR TO LABEL OF THE INSIDE THE POST
document.addEventListener("DOMContentLoaded", function () {
    let allLabels = new Set();
    document.querySelectorAll(".label-link").forEach(link => {
        let labelText = link.textContent.trim().toLowerCase();
        allLabels.add(labelText);
    });
    console.log([...allLabels]); // Log all unique labels in console    
    applyDynamicLabelColors([...allLabels]);
    function applyDynamicLabelColors(labels) {
        document.querySelectorAll(".label-link").forEach(link => {
            let labelText = link.textContent.trim().toLowerCase();
            let color = getLabelColor(labelText, labels);            
            link.style.setProperty("color", color, "important");
            link.style.setProperty("background-color", color.replace("rgb", "rgba").replace(")", ", 0.2)"), "important");
            link.style.setProperty("padding", "2px 5px", "important");
            link.style.setProperty("border-radius", "3px", "important");
            link.style.setProperty("display", "inline-block", "important");
            link.style.setProperty("font-weight", "bold", "important"); 
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
