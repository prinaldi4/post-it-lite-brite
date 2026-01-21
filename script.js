document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('lite-brite-grid');
    const resetButton = document.getElementById('reset-button');
    const rows = 7;
    const cols = 11;
    const totalSquares = rows * cols;

    // Create the grid
    for (let i = 0; i < totalSquares; i++) {
        const pegSquare = document.createElement('div');
        pegSquare.classList.add('peg-square');
        
        // Add data attribute to track click state (0-3)
        pegSquare.dataset.state = '0';
        
        // Create the light element
        const light = document.createElement('div');
        light.classList.add('light');
        pegSquare.appendChild(light);

        pegSquare.addEventListener('click', () => {
            // Get current state and increment (cycle through 0-3)
            let currentState = parseInt(pegSquare.dataset.state);
            currentState = (currentState + 1) % 4;
            pegSquare.dataset.state = currentState.toString();
            
            // Reset all classes first
            pegSquare.classList.remove('lit-pink', 'lit-green', 'lit-blue');
            
            // Apply appropriate class based on state
            if (currentState === 1) {
                pegSquare.classList.add('lit-pink');
            } else if (currentState === 2) {
                pegSquare.classList.add('lit-green');
            } else if (currentState === 3) {
                pegSquare.classList.add('lit-blue');
            }
        });

        gridContainer.appendChild(pegSquare);
    }

    // Reset button functionality
    resetButton.addEventListener('click', () => {
        const allSquares = document.querySelectorAll('.peg-square');
        allSquares.forEach(square => {
            square.classList.remove('lit-pink', 'lit-green', 'lit-blue');
            square.dataset.state = '0';
        });
    });
});