        function addTask() {
            const input = document.getElementById('taskInput');
            const taskText = input.value.trim();

            if (taskText === '') {
                alert('Por favor, digite uma tarefa.');
                return;
            }

            const taskList = document.getElementById('taskList');

            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';

            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.onclick = () => {
                taskList.removeChild(taskDiv);
            };

            taskDiv.appendChild(taskContent);
            taskDiv.appendChild(removeButton);
            taskList.appendChild(taskDiv);

            input.value = '';
        }