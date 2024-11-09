const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Collect data
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;

  const school = (document.getElementById("school") as HTMLInputElement).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const field = (document.getElementById("field") as HTMLInputElement).value;
  const graduationYear = (document.getElementById("graduationYear") as HTMLInputElement).value;

  const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
  const company = (document.getElementById("company") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLInputElement).value;

  const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",").map(skill => skill.trim());

  // Generate resume HTML with contenteditable attribute for editing
  resumeOutput.innerHTML = `
    <div contenteditable="true">
      <h2><span contenteditable="true">${name}</span> Resume</h2>
      <p><strong>Email:</strong><span contenteditable="true"> ${email}</span></p>
      <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>

      <h3>Education</h3>
      <p contenteditable="true"><strong>School:</strong> ${school}</p>
      <p contenteditable="true"><strong>Degree:</strong> ${degree}</p>
      <p contenteditable="true"><strong>Field of Study:</strong> ${field}</p>
      <p contenteditable="true"><strong>Graduation Year:</strong> ${graduationYear}</p>

      <h3>Work Experience</h3>
      <p contenteditable="true"><strong>Job Title:</strong> ${jobTitle}</p>
      <p contenteditable="true"><strong>Company:</strong> ${company}</p>
      <p contenteditable="true"><strong>Years of Experience:</strong> ${experience}</p>

      <h3>Skills</h3>
      <ul>
        <span contenteditable="true"> ${skills.map(skill => `<li>${skill}</li>`).join('')} </span>
      </ul>
    </div>
  `;
});
