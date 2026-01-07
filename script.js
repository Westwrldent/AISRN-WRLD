// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });

    // Simulate dynamic updates (e.g., for payments)
    setInterval(() => {
        // Example: Update a random payment status
        const paymentsTable = document.querySelector('#payments tbody');
        if (paymentsTable) {
            const rows = paymentsTable.querySelectorAll('tr');
            if (rows.length > 1) {
                const randomRow = rows[Math.floor(Math.random() * rows.length)];
                const statusCell = randomRow.querySelector('td:nth-child(4)');
                statusCell.textContent = Math.random() > 0.5 ? 'Processed' : 'Pending';
            }
        }
    }, 5000); // Update every 5 seconds for "real-time" feel

    // Form submission (simulated)
    const form = document.querySelector('.recruitment-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Application submitted! Welcome to AISRN.');
        form.reset();
    });
});
