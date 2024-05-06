document.querySelectorAll('button[data-component]').forEach(btn => {
    btn.addEventListener('click', function() {
        const component = this.getAttribute('data-component');
        addComponentToMachine(component);
        updateMachineBehavior(component);
        checkAllComponentsAdded();
    });
});

const requiredComponents = ['Consciousness', 'Emotion', 'Reasoning', 'Memory', 'Imagination'];
const addedComponents = new Set();

function addComponentToMachine(component) {
    const div = document.createElement('div');
    div.className = 'machine-component';
    div.textContent = component;
    document.getElementById('machine').appendChild(div);
    addedComponents.add(component);
    console.log('Added component:', component); // Debugging log
}

function updateMachineBehavior(component) {
    const info = document.createElement('p');
    switch (component) {
        case 'Consciousness':
            info.innerText = 'Consciousness adds self-awareness to the machine, akin to La Mettrie’s view that consciousness is a fundamental aspect of the human machine.';
            break;
        case 'Emotion':
            info.innerText = 'Emotion introduces affective processing capabilities, highlighting the complex emotional responses that machines could emulate.';
            break;
        case 'Reasoning':
            info.innerText = 'Reasoning allows the machine to perform logical operations, embodying La Mettrie’s belief in the mechanistic nature of thought processes.';
            break;
        case 'Memory':
            info.innerText = 'Memory equips the machine with the ability to retain and recall information, essential for learning and intelligence.';
            break;
        case 'Imagination':
            info.innerText = 'Imagination infuses creativity into the machine, echoing La Mettrie’s assertion that imagination plays all the roles of the soul.';
            break;
    }
    document.getElementById('machine').appendChild(info);
}

function checkAllComponentsAdded() {
    if (requiredComponents.every(comp => addedComponents.has(comp))) {
        displayGenerateImageButton();
        console.log('All components added.'); // Debugging log
    }
}

function displayGenerateImageButton() {
    const generateButton = document.getElementById('generate-image-button');
    generateButton.style.display = 'block';
    generateButton.addEventListener('click', generateMachineImage);
    console.log('Generate image button displayed.'); // Debugging log
}

function generateMachineImage() {
    const canvas = document.getElementById('machineCanvas');
    const ctx = canvas.getContext('2d');
    canvas.style.display = 'block';
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set colors for visibility against a dark background
    ctx.fillStyle = 'white'; // Color for the text
    ctx.strokeStyle = 'white'; // Color for the lines

    // More detailed body outline
    // Head
    ctx.beginPath();
    ctx.arc(250, 100, 50, 0, Math.PI * 2, true); // Head
    ctx.stroke();
    
    // Body
    ctx.beginPath();
    ctx.moveTo(250, 150); // Neck
    ctx.lineTo(250, 200); // Upper torso
    ctx.lineTo(220, 250); // Left side of torso
    ctx.lineTo(280, 250); // Right side of torso
    ctx.closePath();
    ctx.stroke();

    // Arms
    ctx.beginPath();
    ctx.moveTo(250, 170); // Shoulders
    ctx.lineTo(180, 200); // Left arm
    ctx.lineTo(180, 220); // Left forearm
    ctx.moveTo(250, 170); // Shoulders
    ctx.lineTo(320, 200); // Right arm
    ctx.lineTo(320, 220); // Right forearm
    ctx.stroke();

    // Legs
    ctx.beginPath();
    ctx.moveTo(220, 250); // Left hip
    ctx.lineTo(200, 330); // Left thigh
    ctx.lineTo(200, 360); // Left lower leg
    ctx.moveTo(280, 250); // Right hip
    ctx.lineTo(300, 330); // Right thigh
    ctx.lineTo(300, 360); // Right lower leg
    ctx.stroke();

    // Set font for labels
    ctx.font = '14px Arial';

    // Define labels and their placement
    const labels = {
        consciousness: {x: 250, y: 60}, // Centered above head
        emotion: {x: 250, y: 180}, // Near the heart
        reasoning: {x: 250, y: 45}, // Centered above head
        memory: {x: 250, y: 30}, // Centered above head
        imagination: {x: 250, y: 15} // Centered above head
    };

    // Draw labels
    Object.keys(labels).forEach(key => {
        const label = labels[key];
        ctx.fillText(key, label.x - ctx.measureText(key).width / 2, label.y); // Centering text by measuring its width
    });
}
