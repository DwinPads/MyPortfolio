

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}



let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		setTheme(mode)

	})
}
document.getElementById("Page1").addEventListener("click", function(){
  	var win = window.open('pages/vs.html#about');
});

document.getElementById("Page1").addEventListener("click", function(){
  	var win = window.open('pages/ve.html');
});

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'css/main.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'css/blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'css/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'css/purple.css'
	}

	localStorage.setItem('theme', mode)

}

