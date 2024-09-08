document.getElementById('generateResumeBtn')!.addEventListener('click', (e) => {
  // e.preventDefault();

  // Collect data from the form
  const firstName = (document.getElementById('first-name') as HTMLInputElement).value;
  
  const lastName = (document.getElementById('last-name') as HTMLInputElement).value;
  
  const email = (document.getElementById('email') as HTMLInputElement).value;

  const phone = (document.getElementById('phone') as HTMLInputElement).value;

  const degree = (document.getElementById('degree') as HTMLInputElement).value;

  const institution = (document.getElementById('institution') as HTMLInputElement).value;

  const graduationYear = (document.getElementById('graduation-year') as HTMLInputElement).value;

  const skills = (document.getElementById('skills') as HTMLInputElement).value;

  const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;

  const company = (document.getElementById('company') as HTMLInputElement).value;

  const startDate = (document.getElementById('start-date') as HTMLInputElement).value;

  const endDate = (document.getElementById('end-date') as HTMLInputElement).value;

  const description = (document.getElementById('description') as HTMLTextAreaElement).value;

  // Save data to localStorage
  const resumeData = {
    firstName,
    lastName,
    email,
    phone,
    degree,
    institution,
    graduationYear,
    skills: skills.split(',').map(skill => skill.trim()), // Convert skills into an array
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
