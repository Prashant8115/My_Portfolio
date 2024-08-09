let navLinks = document.querySelector(".nav_links");
let navData = ["Home", "About Me", "Educations", "Skills", "Projects", "Experiences", "Contect"];
navData.map((item) => {
    let anchorTag = document.createElement('a');
    anchorTag.append(item);
    navLinks.append(anchorTag);
})

//================================= home page===================================
let content = document.querySelector(".intro");
let homeContainer = document.querySelector(".home");
let h2Tag = document.createElement('h2');
h2Tag.innerHTML = "Hello 👋 <br> I am Prashant Kumar Sharma";
content.append(h2Tag);
let h3Tag = document.createElement('h3');
h3Tag.classList.add('h3Container')
h3Tag.innerHTML = "I am a <h3 class='hColor'>Front End Developer</h3>";
content.append(h3Tag);
let pTag = document.createElement('p');
pTag.classList.add('para');
pTag.innerHTML = "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality result. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.";
content.append(pTag);

// resume download button
let checkResume = document.createElement('button');
checkResume.innerText = "Check Resume"
checkResume.classList.add("checkResume")
content.append(checkResume);
let downloadBtn = document.querySelector(".checkResume");
downloadBtn.addEventListener("click", () => {
    let link = document.createElement('a');
    link.href = "Photos/Prashant Sharma 15.pdf"
    link.download = "Prashant Sharma 15.pdf"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

})

// for profile image 
let div = document.createElement('div');
div.classList.add('imgContainer');
homeContainer.append(div);
let img = document.createElement('img');
img.setAttribute('src', "/Photos/circle_img.png");
img.classList.add('img');
div.append(img);

//======================================= About page=====================================
let aboutContent = document.querySelector(".about1");
let h1About = document.createElement('h1');
h1About.classList.add('h1About');
h1About.innerText = "About Me";
aboutContent.append(h1About);
let para1About = document.createElement('p');
para1About.innerText = "It is the Brief Introduction About Myself.";
aboutContent.append(para1About);
let para2About = document.createElement('p');
para2About.classList.add('p2About');
para2About.innerHTML = "My Name is Prashant Kumar Sharma.<br>I have completed B.tech from Dr. APJ Abdul Kalam Technical University, Lucknow.<br>I Achieved distinction degree in B.tech (computer Science & Engineering) with 7.8 CGPA.<br>My strength are I am curious to learn new technology in the area of web development , i like to solve DSA problems using Java.<br>I am good in soft skills like I am a Good communicator <br> My hobbies are Webdevelopment , DSA Problems solving and Listening songs.";
aboutContent.append(para2About);

let connectMe = document.createElement("button");
connectMe.classList.add("checkResume");
connectMe.innerText = "Connect With Me"
aboutContent.append(connectMe);

let connectId = [
    {
        img: '/Photos/github.svg',
        link: "https://github.com/Prashant8115"
    },
    {
        img: '/Photos/linkedin.svg',
        link: "https://www.linkedin.com/in/prashant-sharma-83ab77246"
    },
    {
        img: '/Photos/insta.svg',
        link: "https://www.instagram.com/"
    },
]
let divTag = document.createElement('div');
divTag.classList.add("datacontainer");
aboutContent.append(divTag);
connectId.map((element) => {

    let aTag = document.createElement('a');
    aTag.setAttribute("href", element.link);
    let imgTag = document.createElement('img');
    imgTag.setAttribute("src", element.img);
    imgTag.classList.add('about-link-img')
    imgTag.classList.add('imgTag');
    aTag.appendChild(imgTag);
    divTag.appendChild(aTag);
})

// =================================Educations page============================
let eductionContent = document.querySelector('.education');
let divContainer = document.createElement('div');
divContainer.classList.add('divContainer');
eductionContent.append(divContainer);

let h1Eduction = document.createElement('h1');
h1Eduction.classList.add('h1About');
h1Eduction.innerText = "Educations";
divContainer.append(h1Eduction);

let p1Education = document.createElement("p");
p1Education.innerText = "My education has been a journey of self-discovery and growth. My educational details are as follows.";
divContainer.append(p1Education);

let dataEduction = [
    {
        college: 'Dr. APJ ABDUL KALAM TECHNICAL UNIVERSITY , LUCKNOW',
        course: "Course:- B.tech",
        branch: "Branch:- Computer Science & Engineering"
    },
    {
        college: 'S.V.M Inter College Bisalpur, Pilibhit',
        course: "Course:- 12th",
        branch: "Branch:- Physics , Chemistry , Mathematics"
    },
    {
        college: 'K.K.S.V.M HSS Bisalpur, Pilibhit',
        course: "Course:- 10th",
        branch: "Branch:- Physics , Chemistry , Mathematics"
    }
]

dataEduction.map((element) => {
    let dataContainer = document.createElement('div');
    dataContainer.classList.add('dataContainer');
    divContainer.append(dataContainer);

    let h2Tag = document.createElement("h2");
    h2Tag.innerText = element.college;
    dataContainer.append(h2Tag);

    let pTag = document.createElement("p");
    pTag.innerText = element.course;
    dataContainer.append(pTag);

    let p1Tag = document.createElement("p");
    p1Tag.innerText = element.branch;
    dataContainer.append(p1Tag);

})

// ========================= skills page =====================================>>>

//Frontend skillsContent data =>
const skillsContentData = [
    {
        img: "Photos/html.svg",
        skillsName: "Html",
    },
    {
        img: "Photos/css.svg",
        skillsName: "CSS",
    },
    {
        img: "Photos/js.svg",
        skillsName: "Java Script",
    },
    {
        img: "Photos/tailwind.svg",
        skillsName: "Tailwind Css",
    },
    {
        img: "Photos/bootstrap.svg",
        skillsName: "Bootstrap",
    },
    {
        img: "Photos/reactjs.svg",
        skillsName: "React",
    },
    {
        img: "Photos/redux.svg",
        skillsName: "Redux",
    },
    {
        img: "Photos/redux.svg",
        skillsName: "APIs",
    },
    {
        img: "Photos/redux.svg",
        skillsName: "Media Queries",
    },
]

// Language Skills data =>
let langaugeSkillsData = [
    {
        img: "Photos/java.svg",
        skillsName: "Java",
    },
    {
        img: "Photos/js.svg",
        skillsName: "Java Script",
    }
]

// Others Skills Data =>
let othersSkillsData = [
    {
        img: "Photos/vsCode.svg",
        skillsName: "Vs Code",
    },
    {
        img: "Photos/gitHub.svg",
        skillsName: "Git & Git hub",
    }
]

let skillsContent = document.querySelector('.skills');
let h1Skills = document.createElement('h1');
h1Skills.classList.add('h1About');
h1Skills.innerText = "Skills";
skillsContent.append(h1Skills);

let p1Skills = document.createElement("p");
p1Skills.innerText = "Here are some of my skills on which I have been working on for the past 6 months.";
skillsContent.append(p1Skills);

let div_btn = document.createElement("div");
div_btn.classList.add("div_btn");
skillsContent.append(div_btn);


// skill pages =>
let skillPageContainerTag = document.createElement('div')
skillPageContainerTag.classList.add('skills-page-container');
skillsContent.append(skillPageContainerTag);


// create skills tag =>
const createSkillTag = (frontendSkills, langaugeSkills, othersSkills) => {
    skillPageContainerTag.innerHTML = '';

    frontendSkills();
    langaugeSkills();
    othersSkills();
}


let frontendSkills = () => {
    let tag = document.createElement("div");
    tag.classList.add('frontend-page-container');
    skillPageContainerTag.append(tag);
    let tagContent = document.createElement("p");
    tagContent.classList.add("tagContent");
    tagContent.innerHTML = "Frontend";
    tag.append(tagContent);
    let div_scd = document.createElement('div');
    div_scd.classList.add("div_scd")
    tag.append(div_scd);

    skillsContentData.map((element) => {
        let divSKillsData = document.createElement('div');
        divSKillsData.classList.add("div_skills_data");
        let imgSkillsTag = document.createElement("img");
        imgSkillsTag.classList.add("img-skills-tag");
        imgSkillsTag.setAttribute("src", element.img);
        let pSKillsData = document.createElement("p");
        pSKillsData.innerHTML = element.skillsName;
        div_scd.append(divSKillsData);
        divSKillsData.append(imgSkillsTag);
        divSKillsData.append(pSKillsData);
    })
}
let languageSkills = () => {
    let tag = document.createElement("div");
    tag.classList.add('langauge-page-container');
    skillPageContainerTag.append(tag);
    let tagLanguageContent = document.createElement("p");
    tagLanguageContent.classList.add("tagContent");
    tagLanguageContent.innerHTML = "Language";
    tag.append(tagLanguageContent);
    let div_scd = document.createElement('div');
    div_scd.classList.add("div_scd")
    tag.append(div_scd);

    langaugeSkillsData.map((element) => {
        let divSKillsData = document.createElement('div');
        divSKillsData.classList.add("div_skills_data");
        let imgSkillsTag = document.createElement("img");
        imgSkillsTag.classList.add("img-skills-tag");
        imgSkillsTag.setAttribute("src", element.img);
        let pSKillsData = document.createElement("p");
        pSKillsData.innerHTML = element.skillsName;
        div_scd.append(divSKillsData);
        divSKillsData.append(imgSkillsTag);
        divSKillsData.append(pSKillsData);
    })
}

let othersSkills = () => {
    let tag = document.createElement("div");
    tag.classList.add('others-page-container');
    skillPageContainerTag.append(tag);
    let tagOthersContent = document.createElement("p");
    tagOthersContent.classList.add("tagContent");
    tagOthersContent.innerHTML = "Others";
    tag.append(tagOthersContent);
    let div_scd = document.createElement('div');
    div_scd.classList.add("div_scd")
    tag.append(div_scd);

    othersSkillsData.map((element) => {
        let divSKillsData = document.createElement('div');
        divSKillsData.classList.add("div_skills_data");
        let imgSkillsTag = document.createElement("img");
        imgSkillsTag.classList.add("img-skills-tag");
        imgSkillsTag.setAttribute("src", element.img);
        let pSKillsData = document.createElement("p");
        pSKillsData.innerHTML = element.skillsName;
        div_scd.append(divSKillsData);
        divSKillsData.append(imgSkillsTag);
        divSKillsData.append(pSKillsData);
    })
}



// button functionalities =>
const skillPageBtn = (element) => {
    let value = element.target.innerHTML;
    switch (value) {
        case 'Frontend':
            createSkillTag(frontendSkills);
            break;
        case 'Language':
            createSkillTag(languageSkills);
            break;
        case 'Others':
            createSkillTag(othersSkills);
            break;
    }
}


// Data and loop on button =>
let btnData = ["Frontend", "Language", "Others"];
for (const btn of btnData) {
    let button = document.createElement("button");
    button.classList.add("skills_btn");
    button.innerText = btn;
    div_btn.append(button);
    button.addEventListener('click', skillPageBtn)
    if (btn == "Frontend") {
        frontendSkills();
    }
}


//====================== projects page ===================================

// projects data =>
let projectsContentData = [
    {
        projectName: "Todo List",
        language1: "Html",
        language2: "CSS",
        language3: "Java Script",
    },
    {
        projectName: "Simon Game",
        language1: "Html",
        language2: "CSS",
        language3: "Java Script",
    },
    {
        projectName: "Calculator",
        language1: "Html",
        language2: "CSS",
        language3: "Java Script",
    },
    {
        projectName: "Password Manager",
        language1: "Html",
        language2: "CSS",
        language3: "Java Script",
    },
    {
        projectName: "Microsoft Clone Page",
        language1: "Html",
        language2: "Tailwind CSS",
    },
    {
        projectName: "Instagram Clone Page",
        language1: "Html",
        language2: "Tailwind CSS",
    },
    {
        projectName: "Facebook Clone Page",
        language1: "Html",
        language2: "Tailwind CSS",
    },
    {
        projectName: "Word counter & Character counter App ",
        language1: "Html",
        language2: "Bootstrap",
        language3: "React Js",
    },
    {
        projectName: "Connect Four Game",
        language1: "Java",
        language2: "Java Fx",
        language3: "Oops",
    },
]


let projectsContent = document.querySelector('.projects');
let h1Projects = document.createElement('h1');
h1Projects.classList.add('h1About');
h1Projects.innerText = "Projects";
projectsContent.append(h1Projects);

let p1Projects = document.createElement("p");
p1Projects.innerText = "Whatever Skills I have learnt yet , By using all of them I have been made some projects.";
projectsContent.append(p1Projects);

let divProjectsContainer = document.createElement('div');
divProjectsContainer.classList.add('divProjectsContainer');
projectsContent.append(divProjectsContainer);
let projectsTag = document.createElement("p");
projectsTag.classList.add("projectsTag")
projectsTag.innerHTML = "Projects";
divProjectsContainer.append(projectsTag);

let contentProjectAllDiv = document.createElement('div');
contentProjectAllDiv.classList.add("contentProjectAllDiv");
divProjectsContainer.append(contentProjectAllDiv);

projectsContentData.map((element) => {
    let contentProjectDiv = document.createElement('div');
    contentProjectDiv.classList.add("contentProjectDiv");
    contentProjectAllDiv.append(contentProjectDiv);

    let contentProjectTag = document.createElement('p');
    contentProjectTag.classList.add("contentProjectTag");
    contentProjectTag.innerHTML = element.projectName;
    contentProjectDiv.append(contentProjectTag);

    let languageProjectContainer = document.createElement('div');
    languageProjectContainer.classList.add("languageProjectContainer");
    contentProjectDiv.append(languageProjectContainer);

    let projectLanguage1_Div = document.createElement('div');
    projectLanguage1_Div.classList.add("projectLanguageDiv");
    projectLanguage1_Div.innerHTML = element.language1
    languageProjectContainer.append(projectLanguage1_Div);

    let projectLanguage2_Div = document.createElement('div');
    projectLanguage2_Div.classList.add("projectLanguageDiv");
    projectLanguage2_Div.innerHTML = element.language2
    languageProjectContainer.append(projectLanguage2_Div);

    let projectLanguage3_Div = document.createElement('div');
    projectLanguage3_Div.classList.add("projectLanguageDiv");
    if (element.language3 === undefined) {
    } else {
        projectLanguage3_Div.innerHTML = element.language3
        languageProjectContainer.append(projectLanguage3_Div);
    }

})

// ======================Experience Page=====================

// Company Experience Data =>

let companyData = [
    {
        key: 'Company Name - ',
        details: "Harshly Educations and skills PVT. LTD. Sector-62 Noida",
    },
    {
        key: 'Duration - ',
        details: "(Jan-July)",
    },
    {
        key: 'Role As - ',
        details: "Frontend Developer/ReactJS developer",
    },
    {
        key: 'Working On - ',
        details: "Worked on Frontend of EASYHAI-ONLINE web application.",
    },
    {
        key: 'Skills - ',
        details: "HTML ,CSS ,Javascripts ,ReactJS ,Redux ,Bootstraps ,Tailwind CSS ,Material UI",
    },
]

let experienceContent = document.querySelector('.experience');
let h1Experience = document.createElement('h1');
h1Experience.classList.add('h1About');
h1Experience.innerText = "Experience";

let p1Experience = document.createElement("p");
p1Experience.innerText = "My work experience as a software engineer and working on different companies and projects.";

let numberTag = document.createElement('p');
numberTag.classList.add("numberTag");
numberTag.innerHTML = "1";

let experienceContainer = document.createElement('div');
experienceContainer.classList.add("experienceContainer")
experienceContent.append(h1Experience, p1Experience, numberTag, experienceContainer);

companyData.map((element) => {
    let experienceDivTag = document.createElement('div');
    experienceDivTag.classList.add("experienceDivTag");
    experienceContainer.append(experienceDivTag);

    let keyTag = document.createElement('p');
    keyTag.classList.add("keyTag");
    keyTag.innerHTML = element.key;

    let detailsTag = document.createElement('p');
    detailsTag.classList.add("detailsTag");
    detailsTag.innerHTML = element.details;
    experienceDivTag.append(keyTag, detailsTag);

})

// ======================== Contect Me ================================
let contectContent = document.querySelector('.contect');
let h1Contect = document.createElement('h1');
h1Contect.classList.add('h1About');
h1Contect.innerText = "Contect";

let p1Contect = document.createElement("p");
p1Contect.innerText = "Feel free to reach out to me for any questions or opportunities!";

let contectContainer = document.createElement('div');
contectContainer.classList.add('contectContainer');
contectContent.append(h1Contect, p1Contect, contectContainer);

let contectFormContainer = document.createElement('div');
contectFormContainer.classList.add('contectFormContainer');

let emailMe = document.createElement('p');
emailMe.classList.add('emailMe');
emailMe.innerText = "Email Me";
contectFormContainer.append(emailMe);

let contectName = document.createElement('input');
contectName.classList.add('contectName');
contectName.setAttribute("placeholder","Name....")
contectFormContainer.append(contectName);

let contectEmail = document.createElement('input');
contectEmail.classList.add('contectName');
contectEmail.setAttribute("placeholder","Email....")
contectFormContainer.append(contectEmail);

let contectNumber = document.createElement('input');
contectNumber.classList.add('contectName');
contectNumber.setAttribute("placeholder","Number....")
contectNumber.setAttribute("type","number")
contectFormContainer.append(contectNumber);

let contectButton = document.createElement('button');
contectButton.classList.add('contectButton');
contectButton.innerHTML="Submit"
contectFormContainer.append(contectButton);




// contect right container ==>
let contectMailContainer = document.createElement('div');
contectMailContainer.classList.add('contectMailContainer');
contectContainer.append(contectFormContainer, contectMailContainer);

let phoneAnchorTag=document.createElement('a');
phoneAnchorTag.setAttribute("href","tel:+918115325972");
let phoneImgTag=document.createElement("img");
phoneImgTag.classList.add("phoneImgTag");
phoneImgTag.setAttribute("src","Photos/callbtn.svg");
phoneAnchorTag.append(phoneImgTag);

let gmailAnchorTag=document.createElement('a');
gmailAnchorTag.setAttribute("href","mailto:prashantks2223@gmail.com");
let gmailImgTag=document.createElement("img");
gmailImgTag.classList.add("phoneImgTag");
gmailImgTag.setAttribute("src","Photos/emailbtn.svg");
gmailAnchorTag.append(gmailImgTag);

contectMailContainer.append(phoneAnchorTag, gmailAnchorTag);










