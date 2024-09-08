"use strict";
window.addEventListener('load', () => {
    // const resumeData = JSON.parse(localStorage.getItem('resumeData'));
    const resumeData = JSON.parse(localStorage.getItem('resumeData') ?? '{}');
    console.log(resumeData);
    if (resumeData) {
        // Populate the resume preview
        document.getElementById('name').textContent = `${resumeData.firstName} ${resumeData.lastName}`;
        document.getElementById('email').textContent = resumeData.email;
        document.getElementById('phone').textContent = resumeData.phone;
        // Education section
        const educationRow = document.createElement('tr');
        educationRow.innerHTML = `<td>${resumeData.institution}</td><td>${resumeData.degree}</td><td>${resumeData.graduationYear}</td>`;
        document.getElementById('education').appendChild(educationRow);
        // Skills section
        resumeData.skills.forEach((skill) => {
            const skillItem = document.createElement('li');
            skillItem.textContent = skill;
            document.getElementById('skills').appendChild(skillItem);
        });
        // Work experience section
        const experienceItem = document.createElement('li');
        experienceItem.innerHTML = `<strong>${resumeData.jobTitle}</strong> at ${resumeData.company} (${resumeData.startDate} - ${resumeData.endDate || 'Present'}): ${resumeData.description}`;
        document.getElementById('experience').appendChild(experienceItem);
    }
});
