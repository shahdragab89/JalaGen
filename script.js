function checkStrength(password) {
    let strength = 0;
    const bar = document.getElementById('strength-bar');

    if (password.length > 5) strength += 25;
    if (password.length > 10) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;

    bar.style.width = strength + "%";

    if (strength <= 25) bar.style.backgroundColor = "red";
    else if (strength <= 50) bar.style.backgroundColor = "orange";
    else if (strength <= 75) bar.style.backgroundColor = "yellow";
    else bar.style.backgroundColor = "green";
}