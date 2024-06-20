"use strict";
const favHobbies = (hobby) => {
    if (Array.isArray(hobby)) {
        hobby.forEach((h) => {
            console.log(h);
        });
    }
    else {
        console.log(hobby);
    }
};
