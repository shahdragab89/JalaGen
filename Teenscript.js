let total = 0;          
let currentLevel = 1;   
let completedTasks = 0; 

function levelUp() {
    currentLevel += 1;  
    document.getElementById("streak").textContent = currentLevel;
    alert("LEVEL UP! You are now Level " + currentLevel + "!");
} 

function done() {
    completedTasks += 1;  
    document.getElementById("done").textContent = completedTasks;
}

function points(button, pointValue) {
    // Add specific points passed from the HTML
    total += pointValue;
    
    // Update score display
    document.getElementById("score").textContent = total;
    
    // Increment missions counter
    done();

    // Disable button and change appearance
    button.disabled = true;
    button.textContent = "Completed ✓";
    button.style.background = "#e0e0e0";
    button.style.cursor = "not-allowed";
    button.style.opacity = "0.7";
    
    // Check level up (Every 100 points)
    if (total >= 100) {
        levelUp();
        total = total - 100;
        document.getElementById("score").textContent = total;
    }
}

// Ensure stats are correct when page loads
window.onload = function() {
    document.getElementById("score").textContent = total;
    document.getElementById("streak").textContent = currentLevel;
    document.getElementById("done").textContent = completedTasks;
}