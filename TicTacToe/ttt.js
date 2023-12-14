 // {} []
 const rows = [];
 let turn = 'X';
 [...document.querySelectorAll('.col')].forEach((node)=>{
 	rows.push(node)
 })

 rows.forEach(node => {
 	node.addEventListener("click", (e)=>{
 		if (turn == 'X') {
 			e.currentTarget.textContent = 'X'
 		} else {
 			e.currentTarget.textContent = 'O'
 		}

 		turn = turn == "X" ? "O" : "X"
 	})
 })