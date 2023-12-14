const getActivity = document.getElementById('getActivity')
const getTime = document.getElementById('getTime')
const add = document.getElementById('add')
const list = document.querySelector('.list')
let num = 1

add.addEventListener('click',()=>{
	if (getActivity.value.length == 0 || getTime.value.length == 0) {
		alert("Data isn't complete")
	} else {
		combine ('option', 'select', 'span', 'div')
	}
})

function createOption(optionTag){
	const options = []
	for(let i = 0; i < 3; i++){
		const option = document.createElement(optionTag)
		if (i == 0) {
			option.setAttribute('value', 'done')
			option.textContent = 'Done'
		}else if (i == 1) {
			option.setAttribute('value', 'failed')
			option.textContent = 'Failed'
		}else if (i == 2) {
			option.setAttribute('value', 'cancel')
			option.textContent = 'Cancel'
		}
		options.push(option)
	}
		return options
}

function createSelect(selectTag) {
	const select = document.createElement(selectTag)

	return select
}

function createDelete(divTag) {
	const deleteTag = document.createElement(divTag)
	deleteTag.classList.add('close')

	return deleteTag
}

function createSpan(spanTag) {
	const spans = []
	for(let s = 0; s < 5; s++){
		const span = document.createElement(spanTag)
		spans.push(span)
	}
	return spans
}

function createHead (divTag) {
	const head = document.createElement(divTag)
	head.classList.add('head')

	return head
}
function combine (optionTag, selectTag, spanTag, divTag) {
	const option = createOption(optionTag)
	const select = createSelect(selectTag)
	const span = createSpan(spanTag)
	const head = createHead(divTag)
	const deleteTag = createDelete(divTag)

	for(let o = 0; o < option.length; o++){
		select.addEventListener('change', ()=>{
			if (select.value == 'done') {
				option[o].parentElement.parentElement.parentElement.style.backgroundColor = 'rgb(0,255,0)'
			}
			else if (select.value == 'failed') {
				option[o].parentElement.parentElement.parentElement.style.backgroundColor = 'rgb(255,0,0)'
			}
			else if (select.value == 'cancel') {
				option[o].parentElement.parentElement.parentElement.style.backgroundColor = 'orange'
			}
		})
		select.append(option[o])
	}
	for(let sp = 0; sp < span.length; sp++){
		span[sp].setAttribute('class','span')
		if (sp == 0) {
			span[sp].setAttribute('class', 'span2')
			span[sp].textContent = num++
		} else if (sp == 1) {
			span[sp].textContent = getActivity.value
		} else if (sp == 2) {
			span[sp].textContent = getTime.value
		} else if (sp == 3) {
			span[sp].append(select)
		}
		else if(sp == 4){
			span[sp].setAttribute('class', 'close')
			span[sp].textContent = 'X'
			span[sp].addEventListener('click', ()=>{
				span[sp].parentElement.remove()
				renumber()
			})
		}
		head.append(span[sp])
	}

	list.append(head)
}

function renumber() {
	const items = document.querySelectorAll('.list .head .span2')
	num = 1
	items.forEach(function(item){
		item.textContent = num++
	})
}