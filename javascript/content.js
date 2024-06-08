import { University } from "./variables.js";
import { aboutMe } from "./variables.js";
import { iconColors } from "./variables.js";
import { backgroundColors } from "./variables.js";
import { texts } from "./variables.js";
import { titles } from "./variables.js";
import { arrows } from "./variables.js";
import { icons } from "./variables.js";
import { pic } from "./variables.js";
import { leftbar } from "./variables.js";
import { controls } from "./variables.js";
import { root } from "./variables.js";
import { container0 } from "./variables.js";
import { container1 } from "./variables.js";

import { setStyle } from "./utils.js";

let lastHoverButtonIndex = -1;

aboutMe.addEventListener('mouseover', function(event) {

    if (event.target == aboutMe) {
        setStyle(aboutMe, {
            width: "0px",
        });
    }
    else {
        setStyle(aboutMe, {
            width: "15px",
        });
    }

});

function handleMouseOverOrClick(event) {

    icons.forEach((icon) => {
        setStyle(icon, {
            backgroundColor: "rgb(120, 120, 120)",
            opacity: "0.4",
        });
    });

    texts.forEach((text) => {
        setStyle(text, {
            display: "none",
            color: "rgb(120, 120, 120)",
        });
    });

    titles.forEach((title) => {
        setStyle(title, {
            display: "none",
        });
    });

    setStyle(University, {
        opacity: "1",
    });

    setStyle(aboutMe, {
        opacity: "1",
    });

    if (lastHoverButtonIndex !== -1) {

        setStyle(icons[lastHoverButtonIndex], {
            backgroundColor: iconColors[lastHoverButtonIndex],
            opacity: "1",
        });

        setStyle(leftbar, {
            backgroundColor: iconColors[lastHoverButtonIndex],
            opactiy: "1",
        });

        setStyle(root, {
            backgroundColor: backgroundColors[lastHoverButtonIndex],
        });

        setStyle(titles[lastHoverButtonIndex], {
            display: "block",
            opacity: "1",
        });

        setStyle(titles[lastHoverButtonIndex].childNodes[1], {
            color: iconColors[lastHoverButtonIndex],
        });

        setStyle(arrows[lastHoverButtonIndex], {
            fill: iconColors[lastHoverButtonIndex],
        });
    }

}

controls.forEach((control, index) => {
    control.addEventListener('mouseover', function(event) {
        controls.forEach((con, idx) => {

            if (idx == index) {

                setStyle(icons[idx], {
                    backgroundColor: iconColors[index],
                    opacity: "1",
                });

                setStyle(texts[index], {
                    color: "white",
                });

                setStyle(container0, {
                    transform: "translateX(-18%)",
                    perspectiveOrigin: "50% 50%",
                });

                setStyle(container1, {
                    transform: "rotateX(30deg) translateY(20%)",
                });

            }

        });

        pic.forEach((p) => {
            setStyle(p, {
                width: "600px",
                height: "4000px",
            });
        });

        texts.forEach((text) => {
            setStyle(text, {
                display: "block",
            });
        });

        titles.forEach((title) => {
            setStyle(title, {
                opacity: "0",
            });
        });

        setStyle(University, {
            opacity: "0",
        });

        setStyle(leftbar, {
            opacity: "0",
        });

        setStyle(aboutMe, {
            opacity: "0",
        });

        setStyle(root, {
            backgroundColor: "black",
        });

        lastHoverButtonIndex = index;

    });

    control.addEventListener('mouseout', handleMouseOverOrClick);
    control.addEventListener('click', handleMouseOverOrClick);

});