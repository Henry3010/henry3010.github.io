//Navbar reveal
let navbars = document.getElementById('navbars');

function showNavbar () {
    document.getElementById('navTitle').style.visibility = 'visible'
    document.getElementById('navAboutMe').style.visibility = 'visible'
    document.getElementById('navServices').style.visibility = 'visible'
    

};

navbars.addEventListener('click', showNavbar);

//section Reveal 

let textLightingDesign = document.getElementById('textLightingDesign');
let textProgramming = document.getElementById('textProgramming');
let textSoftwareDev = document.getElementById('textSoftwareDev');

function revealLD(){
    textLightingDesign.style.display = 'block';
    textProgramming.style.display = 'none';
    textSoftwareDev.style.display = 'none';
}
function revealP(){
    textLightingDesign.style.display = 'none';
    textProgramming.style.display = 'block';
    textSoftwareDev.style.display = 'none';
}
function revealSD(){
    textLightingDesign.style.display = 'none';
    textProgramming.style.display = 'none';
    textSoftwareDev.style.display = 'block'; 
}

document.getElementById('navLightingDesign').addEventListener('click', revealLD);
document.getElementById('navProgramming').addEventListener('click', revealP);
document.getElementById('navSoftwareDev').addEventListener('click', revealSD);