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
