let cursor = document.querySelector('.cursor');
let cursorScale = document.querySelectorAll('.echelle'); 
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
	repeat: -1,
	onRepeat: function(){
		gsap.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY,
			}
		})
	}
});

window.addEventListener('mousemove', (e)=> {
	mouseX = e.clientX;
	mouseY = e.clientY;
})

cursorScale.forEach(link => {
	link.addEventListener('mousemove', ()=> {
		cursor.classList.add('gros'); 
		if (link.classList.contains('petit')){
			cursor.classList.remove('gros');
			cursor.classList.add('gros-petit');
		}
	});
	
	link.addEventListener('mouseleave', ()=> {
		cursor.classList.remove('gros');
		cursor.classList.remove('gros-petit');
	});
})