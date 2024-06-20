const favHobbies = (hobby: string | string[]): void => {
    if (Array.isArray(hobby)) {
        hobby.forEach((h) => {
            console.log(h);
        });
    } else {
        console.log(hobby);
    }
}
