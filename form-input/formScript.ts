document.getElementById('generateResumeBtn')!.addEventListener('click', async (e) => {

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

  // Handle file input
  const fileInput = document.getElementById('profile-pic') as HTMLInputElement;
  let imageData: string | null = null;

  if (fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      imageData = reader.result as string;
      
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
        description,
        image: imageData  // Add image data to the object
      };

      localStorage.setItem('resumeData', JSON.stringify(resumeData));
      console.log(localStorage.getItem('resumeData'));
    };
    
    reader.readAsDataURL(file); // Convert file to base64 string
  } else {
    // Save data to localStorage without image
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
      description,
      image: null  // No image data
    };

    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    console.log(localStorage.getItem('resumeData'));
  }
});
