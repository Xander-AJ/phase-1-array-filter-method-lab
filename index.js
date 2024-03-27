// Code your solution here
// Helper function to find matching drivers
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Helper function to find drivers with names that begin with provided letters
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// Helper function to match drivers based on exact name
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

module.exports = {
    findMatching,
    fuzzyMatch,
    matchName
};
