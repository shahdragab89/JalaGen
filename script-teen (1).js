let total = 0;          // Global: tracks total points
let currentLevel = 0;   // Global: tracks current level

function random() {
    return Math.floor(Math.random() * 20) + 1;
}

function levelUp() {
    currentLevel += 1;  // Increment the global level
    console.log("Congratulations! You've leveled up! You are now level " + currentLevel);
}

function points() {
    console.log("Congratulations! You've earned points!");
    //Get random points between 1 and 20
    const gainedPoints = random();

    //Add gained points to total
    total += gainedPoints;
    console.log("Total Points: " + total);
    
    //check level up condition
    if (total >= 100) {
        levelUp();
        total = total - 100;
    } else {
        console.log("You need " + (100 - total) + " more points to level up.");
    }
}