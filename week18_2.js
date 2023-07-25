const addToTask = () => {
	const taskInput = document.getElementById('taskInput');
	let task = taskInput.value;

	if (task.trim() !== '') {
		let taskItems = localStorage.getItem('cartItems');
		taskItems = taskItems ? JSON.parse(taskItems) : []; //код из подсказки
		taskItems.push(task);
        taskInput.value = "";
		localStorage.setItem('taskItems', JSON.stringify(taskItems));
		
        console.log(`Задача "${task}" добавлен и сохранен в Local Storage.`);
        
        const li = document.createElement("li");
               
        for (const key in taskItems) {
			const value = taskItems[key];
            const t = document.createTextNode(value);
            li.appendChild(t);
            document.getElementById("tasks").appendChild(li);
	
        }
    } else {
		console.log('Введите название задачи');
	}
};
document.querySelector('.add').addEventListener('click', addToTask);

// Добавить "checked" символ при нажатии на элемент списка
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
 }
}, false);

const clearTasks = () => {
	window.localStorage.removeItem('taskItems');
    const t = document.getElementById("tasks");
    let li = document.getElementById("tasks");
    li.remove(li);
}
/*for (var i = 0, len = li.length; i < len; i++) {
  li[i].onclick = function() {
    console.log('parentNode', this.parentNode);
    console.log('element => this', this);
    this.parentNode.removeChild(this);
  }
}
	console.log('Корзина очищена.');
};*/

document.querySelector('.delete').addEventListener('click', clearTasks);