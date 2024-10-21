"use strict";
window.addEventListener("load", () => {
    // Setting localStorage values into HTML elements
    let userName = document.getElementById('name').textContent = localStorage.getItem('myName') || 'TAHA AHMED SIDDIQUI';
    document.getElementById('designation').textContent = localStorage.getItem('desig') || 'FRONTEND DEVELOPER';
    document.getElementById('phone').textContent = localStorage.getItem('Phone') || '0300-123-4567';
    document.getElementById('email').textContent = localStorage.getItem('email') || 'taha_ahmed@gmail.com';
    document.getElementById('address').textContent = localStorage.getItem('add') || '123, Karachi';
    document.getElementById('linkId').textContent = localStorage.getItem('LinkedIn') || 'linkedin.com/in/taha-ahmed';
    // Education section
    document.getElementById('year1').textContent = localStorage.getItem('pass') || '2024';
    document.getElementById('course1').textContent = localStorage.getItem('deg') || 'Computer science';
    document.getElementById('institute').textContent = localStorage.getItem('uni') || 'GIAIC';
    document.getElementById('year2').textContent = localStorage.getItem('pass2') || '2020';
    document.getElementById('course2').textContent = localStorage.getItem('deg2') || 'Abc Degree';
    document.getElementById('institute2').textContent = localStorage.getItem('uni2') || 'Xyz University';
    // Experience section
    document.getElementById('ex_start_year').textContent = localStorage.getItem('styear') || '2020';
    document.getElementById('ex_end_year').textContent = localStorage.getItem('endyear') || '2024';
    document.getElementById('company').textContent = localStorage.getItem('company') || 'XYZ Company';
    document.getElementById('location').textContent = localStorage.getItem('comlocation') || 'Karachi';
    document.getElementById('role').textContent = localStorage.getItem('jobTitle') || 'abc Developer';
    document.getElementById('ach1').textContent = localStorage.getItem('achv1') || 'Developed and implemented new features for client-facing applications';
    document.getElementById('ach2').textContent = localStorage.getItem('achv2') || 'Collaborated with cross-functional teams to debug and optimize code for performance improvements';
    document.getElementById('ach3').textContent = localStorage.getItem('achv3') || 'Led code reviews and mentored junior developers';
    document.getElementById('ex_start_year2').textContent = localStorage.getItem('styear2') || '2020';
    document.getElementById('ex_end_year2').textContent = localStorage.getItem('endyear2') || '2024';
    document.getElementById('company2').textContent = localStorage.getItem('company2') || 'XYZ Company';
    document.getElementById('location2').textContent = localStorage.getItem('comlocation2') || 'Karachi';
    document.getElementById('role2').textContent = localStorage.getItem('jobTitle2') || 'abc Developer';
    document.getElementById('ach12').textContent = localStorage.getItem('achv12') || 'Developed and implemented new features for client-facing applications';
    document.getElementById('ach22').textContent = localStorage.getItem('achv22') || 'Collaborated with cross-functional teams to debug and optimize code for performance improvements';
    document.getElementById('ach32').textContent = localStorage.getItem('achv32') || 'Led code reviews and mentored junior developers';
    // Skill section
    document.getElementById('skill1_level1').textContent = localStorage.getItem('skill_level1') || '10';
    document.getElementById('skill1').textContent = localStorage.getItem('skill1') || 'HTML';
    document.getElementById('skill2_level1').textContent = localStorage.getItem('skill_level2') || '20';
    document.getElementById('skill2').textContent = localStorage.getItem('skill2') || 'CSS';
    document.getElementById('skill3_level1').textContent = localStorage.getItem('skill_level3') || '30';
    document.getElementById('skill3').textContent = localStorage.getItem('skill3') || 'TypeScript';
    ;
    document.getElementById('skill4_level1').textContent = localStorage.getItem('skill_level4') || '40';
    document.getElementById('skill4').textContent = localStorage.getItem('skill4') || 'Next.js';
    // Language section
    document.getElementById('lang1').textContent = localStorage.getItem('lang') || 'English';
    document.getElementById('lang2').textContent = localStorage.getItem('lang2') || 'Urdu';
    // Picture section
    document.getElementById('picture').src = localStorage.getItem('form_profilePic') || 'profile.png';
    //-------------- shareable link button ---------------------
    let share_btn = document.getElementById("share_btn");
    let newUserName;
    if (userName) {
        newUserName = userName.toLowerCase().replace(/\s+/g, "-");
    }
    else {
        newUserName = "user";
    }
    let baseUrl = "https://interactive-resume-builder-sigma.vercel.app/simple_layout/simpleLayout.html";
    let uniqueUrl = `${baseUrl}?/${newUserName}`;
    share_btn?.addEventListener("click", () => {
        document.getElementById('anchor')?.setAttribute("href", uniqueUrl);
    });
    //-------------- copy link button ---------------------
    let copy_btn = document.getElementById("copy_btn");
    copy_btn?.addEventListener("click", () => {
        navigator.clipboard.writeText(uniqueUrl).then(() => {
            alert("copy done");
        });
    });
});
//-------------- edit button ---------------------
let edit_btn = document.getElementById("edit_btn");
edit_btn?.addEventListener("click", () => {
    window.history.back();
});
//-------------- contact section ---------------------
let contact = document.getElementById('contact');
let contact_btn = document.getElementById('contact_btn');
contact_btn?.addEventListener('click', () => {
    contact.classList.toggle('hide');
});
//-------------- education section ---------------------
let education = document.getElementById('education');
let edu_btn = document.getElementById('edu_btn');
edu_btn?.addEventListener('click', () => {
    education.classList.toggle('hide');
});
//-------------- language section ---------------------
let language = document.getElementById('language');
let lang_btn = document.getElementById('lang_btn');
lang_btn?.addEventListener('click', () => {
    language.classList.toggle('hide');
});
//-------------- language section ---------------------
let skill = document.getElementById('skill');
let skill_btn = document.getElementById('skill_btn');
skill_btn?.addEventListener('click', () => {
    skill.classList.toggle('hide');
});
//-------------- ref section ---------------------
let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
//-------------- exp section ---------------------
let exp_section = document.getElementById('experience');
let exp_btn = document.getElementById('exp_btn');
exp_btn?.addEventListener('click', () => {
    exp_section.classList.toggle('hide');
});
//-------------- print section ---------------------
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
//--------------- Font type ----------------------------
function changeFontType() {
    const selectedFont = document.getElementById('font-type').value;
    const resumePreview = document.querySelector('.resumeDiv');
    // Apply the selected font to the resume preview section
    resumePreview.style.fontFamily = selectedFont;
}
//--------------- title Case ----------------------------
function changeTitleCase() {
    const selectedCase = document.getElementById('title-case').value;
    const headings = document.querySelectorAll('.resumeDiv h1, .resumeDiv h2, .resumeDiv h3');
    // Apply the selected title case to all headings in the resume preview
    headings.forEach(heading => {
        if (selectedCase === 'uppercase') {
            heading.style.textTransform = 'uppercase';
        }
        else if (selectedCase === 'capitalize') {
            heading.style.textTransform = 'capitalize';
        }
        else if (selectedCase === 'lowercase') {
            heading.style.textTransform = 'lowercase';
        }
    });
}
//--------------- title Case ----------------------------
function changeTitleStyle() {
    const selectedStyle = document.getElementById('title-style').value;
    const headings = document.querySelectorAll('.resumeDiv h1, .resumeDiv h2, .resumeDiv h3');
    // Apply the selected style to all headings in the resume preview
    headings.forEach(heading => {
        if (selectedStyle === 'ruled') {
            heading.style.borderBottom = '2px solid black';
            heading.style.backgroundColor = ''; // Reset background color if previously shaded
        }
        else if (selectedStyle === 'shaded') {
            heading.style.backgroundColor = '#c4c2bc'; // Apply a light shaded background
            heading.style.borderBottom = ''; // Reset border if previously ruled
        }
        else if (selectedStyle === 'none') {
            // Remove both border and background when "none" is selected
            heading.style.borderBottom = '';
            heading.style.backgroundColor = '';
        }
    });
}
//--------------- Ruled Position  ----------------------------
function changeRulePosition() {
    const selectedPosition = document.getElementById('rule-position').value;
    const headings = document.querySelectorAll('.resumeDiv h1, .resumeDiv h2, .resumeDiv h3');
    // Apply the selected rule position to all headings in the resume preview
    headings.forEach(heading => {
        if (selectedPosition === 'above') {
            heading.style.borderBottom = '2px solid black'; // Add border to bottom
            heading.style.borderTop = ''; // Remove border from top
        }
        else if (selectedPosition === 'below') {
            heading.style.borderTop = '2px solid black'; // Add border to top
            heading.style.borderBottom = ''; // Remove border from bottom
        }
    });
}
//--------------- Image on/off  ----------------------------
function toggleImageDisplay() {
    const checkbox = document.getElementById('image-display');
    const image = document.getElementById('picture');
    if (checkbox.checked) {
        image.style.display = 'block';
    }
    else {
        // Hide the image if the checkbox is not checked
        image.style.display = 'none';
    }
}
