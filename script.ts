const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
form.addEventListener("submit", (event: Event) => {
	event.preventDefault();
	const Name = (document.getElementById("Name") as HTMLInputElement).value;
	const email = (document.getElementById("Email Address") as HTMLInputElement).value
	const phone = (document.getElementById("Phone Number") as HTMLInputElement).value
	const education_InstitudeName = (document.getElementById("Institude Name") as HTMLInputElement).value
	const Degree = (document.getElementById("Degree") as HTMLInputElement).value
	const Years_Of_Education = (document.getElementById("Years Of Education") as HTMLInputElement).value
	const education_text_area = (document.getElementById("education-text-area") as HTMLInputElement).value;
	const Campany_Name = (document.getElementById("Campany Name") as HTMLInputElement).value
	const Your_Last_job = (document.getElementById("Your Last job") as HTMLInputElement).value
	const Job_Description = (document.getElementById("Job Description") as HTMLInputElement).value;
	const skills = (document.getElementById("Skills") as HTMLInputElement).value;
	const ResumeGenerate = `
	   <h2><b>Resume</b></h2>
	     <h3>Personal Information</h2>
	<p><b>Name :</b>${Name}</p>
	<p><b>Email Address :</b>${email}</p>
	<p><b>Phone Number :</b>${phone}</p>

	    <h3>Education</h2>
	<p><b>Institude Name:</b>${education_InstitudeName}</p>
	<p><b>Degree :</b>${Degree}</p>
	<p><b>Year Of Education :</b>${Years_Of_Education}</p>
	<p><b>Education Details :</b>${education_text_area}</p>
	
		<h3>Work Experience</h2>
	<p><b>Company Name :</b>${Campany_Name}</p>
	<p><b>Your Last Job :</b>${Your_Last_job}</p>
	<p><b>Job Description :</b>${Job_Description}</p>
	<p><b>Education Details :</b>${education_text_area}</p>

			<h3>Skills</h3>
	<p><b>Skills :</b>${skills}</p>
	`;
	if (resumeDisplayElement) {
		resumeDisplayElement.innerHTML = ResumeGenerate;
	} else {
		console.error("The Resume Input is Missing");
	}
});