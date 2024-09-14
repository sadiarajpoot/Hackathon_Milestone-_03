var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var Name = document.getElementById("Name").value;
    var email = document.getElementById("Email Address").value;
    var phone = document.getElementById("Phone Number").value;
    var education_InstitudeName = document.getElementById("Institude Name").value;
    var Degree = document.getElementById("Degree").value;
    var Years_Of_Education = document.getElementById("Years Of Education").value;
    var education_text_area = document.getElementById("education-text-area").value;
    var Campany_Name = document.getElementById("Campany Name").value;
    var Your_Last_job = document.getElementById("Your Last job").value;
    var Job_Description = document.getElementById("Job Description").value;
    var skills = document.getElementById("Skills").value;
    var ResumeGenerate = "\n\t   <h2><b>Resume</b></h2>\n\t     <h3>Personal Information</h2>\n\t<p><b>Name :</b>".concat(Name, "</p>\n\t<p><b>Email Address :</b>").concat(email, "</p>\n\t<p><b>Phone Number :</b>").concat(phone, "</p>\n\n\t    <h3>Education</h2>\n\t<p><b>Institude Name:</b>").concat(education_InstitudeName, "</p>\n\t<p><b>Degree :</b>").concat(Degree, "</p>\n\t<p><b>Year Of Education :</b>").concat(Years_Of_Education, "</p>\n\t<p><b>Education Details :</b>").concat(education_text_area, "</p>\n\t\n\t\t<h3>Work Experience</h2>\n\t<p><b>Company Name :</b>").concat(Campany_Name, "</p>\n\t<p><b>Your Last Job :</b>").concat(Your_Last_job, "</p>\n\t<p><b>Job Description :</b>").concat(Job_Description, "</p>\n\t<p><b>Education Details :</b>").concat(education_text_area, "</p>\n\n\t\t\t<h3>Skills</h3>\n\t<p><b>Skills :</b>").concat(skills, "</p>\n\t");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = ResumeGenerate;
    }
    else {
        console.error("The Resume Input is Missing");
    }
});
