var toggleBtn = document.getElementById("hamburgerIcon");
var navBar = document.getElementById("navbar");

var bars = document.querySelectorAll(".bar")


toggleBtn.addEventListener("click", ()=>{

		navBar.classList.toggle("navBar_Open");
		
		Array.from(bars).forEach(bar=>{

			bar.classList.toggle("color_Change");

		});

})

