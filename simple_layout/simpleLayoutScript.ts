window.addEventListener('load', () => {
  const resumeData = JSON.parse(localStorage.getItem('resumeData') ?? '{}');
  console.log(resumeData);

  if (resumeData) {
    // Populate the resume preview
    document.getElementById('name')!.textContent = `${resumeData.firstName} ${resumeData.lastName}`;
    document.getElementById('email')!.textContent = resumeData.email;
    document.getElementById('phone')!.textContent = resumeData.phone;

    // Education section
    const educationRow = document.createElement('tr');
    educationRow.innerHTML = `<td>${resumeData.institution}</td><td>${resumeData.degree}</td><td>${resumeData.graduationYear}</td>`;
    document.getElementById('education')!.appendChild(educationRow);

    // Skills section
    resumeData.skills.forEach((skill: string | null) => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      document.getElementById('skills')!.appendChild(skillItem);
    });

    // Work experience section
    const experienceItem = document.createElement('li');
    experienceItem.innerHTML = `<strong>${resumeData.jobTitle}</strong> at ${resumeData.company} (${resumeData.startDate} - ${resumeData.endDate || 'Present'}): ${resumeData.description}`;
    document.getElementById('experience')!.appendChild(experienceItem);

    // Handle profile picture
    const profilePic = document.getElementById('profile-pic-preview') as HTMLImageElement;
    if (resumeData.image) {
      profilePic.src = resumeData.image;
      profilePic.style.display = 'block';  // Show the image
    }
  }
});

function changeFontType() {
  const selectedFont = (document.getElementById('font-type') as HTMLSelectElement).value;
  const resumePreview = document.querySelector('.resume-preview') as HTMLElement;
  
  // Apply the selected font to the resume preview section
  resumePreview.style.fontFamily = selectedFont;
}

function changeTitleCase() {
  const selectedCase = (document.getElementById('title-case') as HTMLSelectElement).value;
  const headings = document.querySelectorAll('.resume-preview h1, .resume-preview h2, .resume-preview h3') as NodeListOf<HTMLElement>;

  // Apply the selected title case to all headings in the resume preview
  headings.forEach(heading => {
    if (selectedCase === 'uppercase') {
      heading.style.textTransform = 'uppercase';
    } else if (selectedCase === 'capitalize') {
      heading.style.textTransform = 'capitalize';
    } else if (selectedCase === 'lowercase') {
      heading.style.textTransform = 'lowercase';
    }
  });
}

function changeTitleStyle() {
  const selectedStyle = (document.getElementById('title-style') as HTMLSelectElement).value;
  const headings = document.querySelectorAll('.resume-preview h1, .resume-preview h2, .resume-preview h3') as NodeListOf<HTMLElement>;

  // Apply the selected style to all headings in the resume preview
  headings.forEach(heading => {
    if (selectedStyle === 'ruled') {
      heading.style.borderBottom = '2px solid black';
      heading.style.backgroundColor = '';  // Reset background color if previously shaded
    } else if (selectedStyle === 'shaded') {
      heading.style.backgroundColor = '#c4c2bc';  // Apply a light shaded background
      heading.style.borderBottom = '';  // Reset border if previously ruled
    } else if (selectedStyle === 'none') {
      // Remove both border and background when "none" is selected
      heading.style.borderBottom = '';
      heading.style.backgroundColor = '';
    }
  });
}

function changeRulePosition() {
  const selectedPosition = (document.getElementById('rule-position') as HTMLSelectElement).value;
  const headings = document.querySelectorAll('.resume-preview h1, .resume-preview h2, .resume-preview h3') as NodeListOf<HTMLElement>;

  // Apply the selected rule position to all headings in the resume preview
  headings.forEach(heading => {
    if (selectedPosition === 'above') {
      heading.style.borderBottom = '2px solid black';  // Add border to bottom
      heading.style.borderTop = '';  // Remove border from top
    } else if (selectedPosition === 'below') {
      heading.style.borderTop = '2px solid black';  // Add border to top
      heading.style.borderBottom = '';  // Remove border from bottom
    }
  });
}

function toggleImageDisplay() {
  const checkbox = document.getElementById('image-display') as HTMLInputElement;
  const image = document.getElementById('profile-pic-preview') as HTMLImageElement | null;

  if (image) {
    if (checkbox.checked) {
      // Show the image if the checkbox is checked
      image.style.display = 'block';
    } else {
      // Hide the image if the checkbox is not checked
      image.style.display = 'none';
    }
  }
}

function changeMargin() {
  const marginValue = (document.getElementById('margin') as HTMLInputElement).value;
  const resumePreview = document.querySelector('.resume-preview') as HTMLElement;
  
  // Apply the margin value to the left and right margins of the resume preview
  resumePreview.style.marginLeft = `${marginValue}px`;
  resumePreview.style.marginRight = `${marginValue}px`;
}

function changeLineSpacing() {
  const lineSpacingValue = (document.getElementById('line-spacing') as HTMLInputElement).value;
  const resumePreview = document.querySelector('.resume-preview') as HTMLElement;
  
  // Apply the line spacing value to the resume preview
  resumePreview.style.lineHeight = `${lineSpacingValue}`;
}

