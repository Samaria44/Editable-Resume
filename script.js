var form = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var school = document.getElementById("school").value;
    var degree = document.getElementById("degree").value;
    var field = document.getElementById("field").value;
    var graduationYear = document.getElementById("graduationYear").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var company = document.getElementById("company").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value.split(",").map(function (skill) { return skill.trim(); });
    // Generate resume HTML with contenteditable attribute for editing
    resumeOutput.innerHTML = "\n    <div contenteditable=\"true\">\n      <h2><span contenteditable=\"true\">".concat(name, "</span> Resume</h2>\n      <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "</span></p>\n      <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n\n      <h3>Education</h3>\n      <p contenteditable=\"true\"><strong>School:</strong> ").concat(school, "</p>\n      <p contenteditable=\"true\"><strong>Degree:</strong> ").concat(degree, "</p>\n      <p contenteditable=\"true\"><strong>Field of Study:</strong> ").concat(field, "</p>\n      <p contenteditable=\"true\"><strong>Graduation Year:</strong> ").concat(graduationYear, "</p>\n\n      <h3>Work Experience</h3>\n      <p contenteditable=\"true\"><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n      <p contenteditable=\"true\"><strong>Company:</strong> ").concat(company, "</p>\n      <p contenteditable=\"true\"><strong>Years of Experience:</strong> ").concat(experience, "</p>\n\n      <h3>Skills</h3>\n      <ul>\n        <span contenteditable=\"true\"> ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), " </span>\n      </ul>\n    </div>\n  ");
});
