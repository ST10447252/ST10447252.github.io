const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.menu-items')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const query = document.getElementById("query").value;

    // Basic validation
    if (!name || !email || !mobile || !query) {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate form submission with email check
    if (email) {
        document.getElementById("success-message").style.display = "block";
        setTimeout(() => {
            document.getElementById("success-message").style.display = "none";
        }, 2000);
    }
});

function focusProject(project) {
    // Get all projects
    const allProjects = document.querySelectorAll('.projects-section-detail .project');
    
    // Remove 'focused' class and reset blur for all projects
    allProjects.forEach(p => {
        p.classList.remove('focused');
        p.style.filter = 'blur(5px)';
    });
    
    // Add 'focused' class and remove blur for the clicked project
    project.classList.add('focused');
    project.style.filter = 'none';  // Clear the blur effect for the focused project
}

document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (email === "") {
        alert("Please enter a valid email address.");
        return;
    }

    // If email is valid, show a success message
    alert("Thank you for subscribing!");
    emailInput.value = ""; // Clear the input field after submission
});
