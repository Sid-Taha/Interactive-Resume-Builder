"use strict";
document.getElementById('generateResumeBtn').addEventListener('click', (e) => {
    // e.preventDefault();
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
        description
    };
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    let myresumeData = localStorage.getItem('resumeData');
    console.log(myresumeData);
});
