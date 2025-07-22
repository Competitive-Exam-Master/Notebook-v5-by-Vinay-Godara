// addons/anotherAddon.js
document.addEventListener('DOMContentLoaded', () => {
    const toolbar = document.getElementById('toolbar');
    if (toolbar) {
        const imageButton = document.createElement('button');
        imageButton.className = 'toolbar-button';
        imageButton.textContent = 'Insert Image';
        imageButton.onclick = function() {
            const imageUrl = prompt('Enter image URL:');
            if (imageUrl) {
                document.execCommand('insertImage', false, imageUrl);
            }
        };
        toolbar.appendChild(imageButton);
        console.log("Insert Image add-on button added.");
    }
});
