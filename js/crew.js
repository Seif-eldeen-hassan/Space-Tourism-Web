let crew_images = ["./assets/crew/image-douglas-hurley.png","./assets/crew/image-mark-shuttleworth.png","./assets/crew/image-victor-glover.png","./assets/crew/image-anousheh-ansari.png"]
let crew_names = ["DOUGLAS HURLEY","MARK SHUTTLEWORTH","VICTOR GLOVER","ANOUSHEH ANSARI"]
let roles = ["COMMANDER","MISSION SPECHALIST","PILOT","FLIGHT ENGINNER"]
let crew_bio = ["Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.","  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.","Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."," Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."]
let dots = document.querySelectorAll(".dot")
let logo  = document.querySelector(".logo")

function redirect_main(){
    window.location.href="index.html";
}

logo.addEventListener("click" , redirect_main)


function change_crew(i){
    let role = document.querySelector(".job_title")
    let worker_name = document.querySelector(".worker_name")
    let job_pargraph = document.querySelector(".job_pargraph")
    let crew_image = document.querySelector(".worker_image")
    role.innerText = roles[i];
    worker_name.innerText = crew_names[i];
    crew_image.setAttribute("src",crew_images[i])
    job_pargraph.innerHTML = crew_bio[i];
    for(let j = 0 ; j < 4 ; j++){
        if(dots[j].classList.contains("choosed_dot")){
            dots[j].classList.remove("choosed_dot")
        }
    }
    dots[i].classList.add("choosed_dot")
}

for(let i = 0 ; i < 4 ; i++){
    dots[i].addEventListener("click",function(){change_crew(i);})
}