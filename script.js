document.querySelectorAll('button[data-component]').forEach(btn => {
    btn.addEventListener('click', function() {
        const component = this.getAttribute('data-component');
        addComponentToMachine(component);
        updateMachineBehavior(component);
    });
});

function addComponentToMachine(component) {
    const div = document.createElement('div');
    div.className = 'machine-component';
    div.innerText = component;
    document.getElementById('machine').appendChild(div);
}

function updateMachineBehavior(component) {
    const info = document.createElement('p');
    switch (component) {
        case 'consciousness':
            info.innerText = 'Consciousness adds self-awareness to the machine.';
            break;
        case 'emotion':
            info.innerText = 'Emotion introduces affective processing capabilities.';
            break;
        // Add other cases as necessary
    }
    document.getElementById('machine').appendChild(info);
}
