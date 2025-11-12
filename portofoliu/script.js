//Cache the DOM
var button=document.getElementById("button")

var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var asteptari = document.getElementById("asteptari")
var img = document.querySelector("img")
var body=document.querySelector("body")
var an=document.getElementById("anNastere")

const d = new Date()
var year = d.getFullYear()

//Add event listener to button
button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)

//Define function 

function displayAge()
{
	an.innerHTML=year - an.innerHTML
}

function altaViata(){
	nume.innerHTML = "Messi"
	prenume.innerHTML="Lionel"
        asteptari.innerHTML = "<ul><li>Libertate financiara</li><li>Educatie superioara</li></ul>"

	img.src="images/pisica.png"

	body.style.backgroundImage="url(munti.png)"
	body.style.backgroundRepeat="no-repeat"
	body.style.backgroundSize="cover"
	body.style.backgroundAtachement="fixed"
}