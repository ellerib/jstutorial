const API_URL = 'https://dummyjson.com/todos';

async function gettodos() {
try {
    const response = await fetch(API_URL);
    const data = await response.json();
    displaytodos(data.todos); 
} catch (error) {
    console.log("Fetching todos failed", error);
}
}

    function displaytodos(todos) {
    const posttodos = document.getElementById('posttodos');
    posttodos.innerHTML = '';
    todos.forEach(todo => {
        const todoElement = createposttodos(todo);
        posttodos.appendChild(todoElement);
    });
    }

    function createposttodos(todo) {
        const div = document.createElement('div');
        div.className = 'post';

        const title = document.createElement('h3');
        title.textContent = `Todo ID: ${todo.id}`;

        const body = document.createElement('p');
        body.textContent = `Task: ${todo.todo}`;

        const status = document.createElement('p');
        status.textContent = `Completed: ${todo.completed ? 'Yes' : 'No'}`;

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(status);

        return div;
    }

gettodos();
