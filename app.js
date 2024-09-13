"use strict";
const form = document.getElementById("resume-form");
const resumeOutput = document.getElementById("resume-output");
// Sections for displaying the resume
const personalInfoOutput = document.getElementById("personal-info-output");
const educationOutput = document.getElementById("education-output");
const workExperienceOutput = document.getElementById("work-experience-output");
const skillsOutput = document.getElementById("skills-output");
form.addEventListener("submit", (event) => {
  var _a;
  event.preventDefault();
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const education = document.getElementById("education").value;
  const workExperience = document.getElementById("work-experience").value;
  const skills = document.getElementById("skills").value.split(",");
  const profilePic =
    (_a = document.getElementById("profile-pic").files) === null ||
    _a === void 0
      ? void 0
      : _a[0];
  // Display profile picture if uploaded
  if (profilePic) {
    const reader = new FileReader();
    reader.onload = function () {
      const imgElement = document.createElement("img");
      imgElement.src = reader.result;
      personalInfoOutput.innerHTML = "";
      personalInfoOutput.appendChild(imgElement);
    };
    reader.readAsDataURL(profilePic);
  }
  // Populate resume sections
  personalInfoOutput.innerHTML += `<h2>Personal Information</h2>
                                   <p><strong>Name:</strong> ${name}</p>
                                   <p><strong>Email:</strong> ${email}</p>
                                   <p><strong>Phone:</strong> ${phone}</p>`;
  educationOutput.innerHTML = `<h2>Education</h2>
                               <p>${education}</p>`;
  workExperienceOutput.innerHTML = `<h2>Work Experience</h2>
                                    <p>${workExperience}</p>`;
  skillsOutput.innerHTML = `<h2>Skills</h2>
                            <ul>${skills
                              .map((skill) => `<li>${skill.trim()}</li>`)
                              .join("")}</ul>`;
  // Show the resume output
  resumeOutput.classList.remove("hidden");
});
