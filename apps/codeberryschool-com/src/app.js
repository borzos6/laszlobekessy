document.addEventListener('DOMContentLoaded', function() {
    var heartButton = document.getElementById('heartButton');
    const heartBackgroundColors = ['#FFE0E9', '#FFD6E8', '#FFC0CB', '#FFB3C2', '#FFA6BA', '#FFDEDE', '#FFECDD', '#FFD7E6', '#FFCEDE', '#FFE2D0', '#E8B6C3', '#E8C4C4', '#9FBBC1', '#DCEBEB', '#C2DAD4'];
    const heartColors = ['#E63946', '#DB2763', '#9D2B4B', '#D7263D', '#C71585', '#F76D6D', '#D82B2B', '#BB2B2B', '#F55151', '#E62B2B', '#5D2442', '#7F3943', '#806491', '#D36D88', '#B5355C'];
    let heartClicked = false;

    // Function to get a random color from an array
    function getRandomColor(colorArray) {
        const randomIndex = Math.floor(Math.random() * colorArray.length);
        return colorArray[randomIndex];
    }

    // Function to handle heart button click for visual effects
    function handleHeartClick() {
        heartButton.classList.add('pulse');
        var backgroundColor = getRandomColor(heartBackgroundColors);
        var heartColor = getRandomColor(heartColors);
        heartButton.style.backgroundColor = backgroundColor;
        heartButton.style.color = heartColor;

        heartButton.addEventListener('animationend', function() {
            heartButton.classList.remove('pulse');
        }, { once: true });
    }

    // Async function to send a heart
    async function sendRequest() {
        if (heartClicked) return;
        heartClicked = true;
        heartButton.disabled = true;

        try {
            const response = await fetch(
                'https://kwmkfhgmaa.execute-api.us-east-1.amazonaws.com/production/add-one'
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const heartCountElement = document.getElementById('heartCount');
            heartCountElement.textContent = data.heartCount;
            heartCountElement.style.color = '#21ca98';
        } catch (error) {
            console.error('Error:', error);
        } finally {
            heartButton.disabled = false;
        }
    }

    // Async function to get the initial heart count
    async function getHeartCount() {
        try {
            const response = await fetch(
                'https://kwmkfhgmaa.execute-api.us-east-1.amazonaws.com/production/get-count'
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            document.getElementById('heartCount').textContent = data.heartCount;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Initialize the heart count and attach event listeners
    getHeartCount();

    heartButton.addEventListener('click', function() {
        handleHeartClick();
        sendRequest();
    });
});