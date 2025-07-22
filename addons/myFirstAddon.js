// addons/myFirstAddon.js
document.addEventListener('DOMContentLoaded', () => {
    const toolbar = document.getElementById('toolbar');
    if (toolbar) {
        const customButton = document.createElement('button');
        customButton.className = 'toolbar-button';
        customButton.textContent = 'Highlight';
        customButton.onclick = function() {
            document.execCommand('backColor', false, 'yellow');
        };
        toolbar.appendChild(customButton);
        console.log("Highlight add-on button added.");
    }
});
