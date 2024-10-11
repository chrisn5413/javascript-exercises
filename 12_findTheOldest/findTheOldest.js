const findTheOldest = function(people) {
    let oldestAge = 0;
    let person = {};
    const thisYear = (new Date).getFullYear();

    people.forEach(element => {
        let birth = element.yearOfBirth;
        let death = element.yearOfDeath ? element.yearOfDeath : thisYear;
        let age = death - birth;

        if (age > oldestAge) {
            oldestAge = age;
            person = element;
        }
    })

    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
