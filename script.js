document.querySelectorAll('#components-list button').forEach(button => {
    button.addEventListener('click', function() {
        const component = document.createElement('div');
        component.innerText = this.getAttribute('data-component');
        document.querySelector('#machine').appendChild(component);
    });
});

// Add more interactivity as needed
