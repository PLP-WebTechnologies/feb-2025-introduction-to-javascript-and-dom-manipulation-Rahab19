
document.addEventListener('DOMContentLoaded', function() {

   
    const textChangerBtn = document.getElementById('text-changer');
    const textToChange = document.getElementById('text-to-change');

    textChangerBtn.addEventListener('click', function() {
        textToChange.textContent = "You did it! The text has changed!";
        textToChange.style.color = "pink";
    });

    
    const styleChangerBtn = document.getElementById('style-changer');
    const styleBox = document.getElementById('style-box');

    styleChangerBtn.addEventListener('click', function() {
        styleBox.style.backgroundColor = "#ffe6e6";
        styleBox.style.border = "2px dashed red";
        styleBox.style.padding = "20px";
    });

    
    const toggleButton = document.getElementById('toggle-button');
    const toggleBox = document.getElementById('toggle-box');
    let isVisible = true;

    toggleButton.addEventListener('click', function() {
        if (isVisible) {
            toggleBox.style.display = "none";
            toggleButton.textContent = "Show Box";
        } else {
            toggleBox.style.display = "block";
            toggleButton.textContent = "Hide Box";
        }
        isVisible = !isVisible;
    });
});
