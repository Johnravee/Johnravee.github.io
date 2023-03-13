
const dark = document.querySelector('#moon')

// Get the key value of theme
let darkCheck = localStorage.getItem('dark-theme')

const darkmode = () =>{
    document.body.classList.add("darkmode");
    dark.classList.toggle('bi-sun-fill')
    localStorage.setItem("dark-theme","enable");
}

const lightmode = () =>{
    document.body.classList.remove("darkmode");
    dark.classList.toggle('bi-sun-fill')
    localStorage.setItem("dark-theme","disable")
}

if(darkCheck === "enable"){
    darkmode() //set the dark-theme on load page
}

dark.addEventListener('click', ()=>{
 darkCheck = localStorage.getItem('dark-theme') //update the value of darktheme

    if(darkCheck === 'enable'){
        lightmode()
    }
   else{
    darkmode()
   }
})

// Hamburger Menu 
document.querySelector('#Hamburger').addEventListener('click', ()=>{
    document.querySelector('.links').classList.toggle('left')
    document.body.classList.toggle("forscroll")
    document.querySelector("#Hamburger").classList.toggle("bi-x-lg")
})

//Link events
document.querySelectorAll("#link").forEach(li => li.addEventListener('click',()=>{
    document.querySelector('.links').classList.remove('left')
    document.body.classList.remove("forscroll")
    document.querySelector("#Hamburger").classList.remove("bi-x-lg")
}))








