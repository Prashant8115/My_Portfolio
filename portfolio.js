let navLinks = document.querySelector(".nav_links");
let navData = ["Home", "About Me", "Educations","Skills", "Projects", "Experiences", "Contect"];
navData.map((item) => {
    let anchorTag = document.createElement('a');
    anchorTag.append(item);
    navLinks.append(anchorTag);
})

// home page
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

// About page
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

// Educations page
let eductionContent=document.querySelector('.education');
let divContainer=document.createElement('div');
divContainer.classList.add('divContainer');
eductionContent.append(divContainer);

let h1Eduction=document.createElement('h1');
h1Eduction.classList.add('h1About');
h1Eduction.innerText="Educations";
divContainer.append(h1Eduction);

let p1Education=document.createElement("p");
p1Education.innerText="My education has been a journey of self-discovery and growth. My educational details are as follows.";
divContainer.append(p1Education);

let dataEduction=[
    {
        college:'Dr. APJ ABDUL KALAM TECHNICAL UNIVERSITY , LUCKNOW',
        course:"Course:- B.tech",
        branch:"Branch:- Computer Science & Engineering"
    },
    {
        college:'S.V.M Inter College Bisalpur, Pilibhit',
        course:"Course:- 12th",
        branch:"Branch:- Physics , Chemistry , Mathematics"
    },
    {
        college:'K.K.S.V.M HSS Bisalpur, Pilibhit',
        course:"Course:- 10th",
        branch:"Branch:- Physics , Chemistry , Mathematics"
    }
]

dataEduction.map((element)=>{
    let dataContainer=document.createElement('div');
   dataContainer.classList.add('dataContainer');
   divContainer.append(dataContainer);

   let h2Tag=document.createElement("h2");
   h2Tag.innerText=element.college;
   dataContainer.append(h2Tag);

   let pTag=document.createElement("p");
   pTag.innerText=element.course;
   dataContainer.append(pTag);

   let p1Tag=document.createElement("p");
   p1Tag.innerText=element.branch;
   dataContainer.append(p1Tag);

})




