function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById("darkModeToggle");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
}
