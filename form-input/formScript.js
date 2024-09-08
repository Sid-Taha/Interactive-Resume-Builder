"use strict";
document.getElementById('generateResumeBtn').addEventListener('click', async (e) => {
    // Collect data from the form
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const graduationYear = document.getElementById('graduation-year').value;
    const skills = document.getElementById('skills').value;
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const description = document.getElementById('description').value;
    // Handle file input
    const fileInput = document.getElementById('profile-pic');
    let imageData = null;
    if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            imageData = reader.result;
            // Save data to localStorage
            const resumeData = {
                firstName,
                lastName,
                email,
                phone,
                degree,
                institution,
                graduationYear,
                skills: skills.split(',').map(skill => skill.trim()),
                jobTitle,
                company,
                startDate,
                endDate,
                description,
                image: imageData // Add image data to the object
            };
            localStorage.setItem('resumeData', JSON.stringify(resumeData));
            console.log(localStorage.getItem('resumeData'));
        };
        reader.readAsDataURL(file); // Convert file to base64 string
    }
    else {
        // Save data to localStorage without image
        const resumeData = {
            firstName,
            lastName,
            email,
            phone,
            degree,
            institution,
            graduationYear,
            skills: skills.split(',').map(skill => skill.trim()),
            jobTitle,
            company,
            startDate,
            endDate,
            description,
            image: null // No image data
        };
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
        console.log(localStorage.getItem('resumeData'));
    }
});
