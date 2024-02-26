import { useState } from "react";
import { v4 as uuid } from "uuid";

import {
  ButtonTask,
  CheckIcon,
  Container,
  EmptyList,
  InputTask,
  ListItem,
  ToDoList,
  TrashIcon,
} from "./styles/styles";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  function getInputText(event) {
    setTask(event.target.value);
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function addTask() {
    if (task.trim() !== "") {
      const capitalizedTask = capitalizeFirstLetter(task);

      setList([
        ...list,
        { id: uuid(), task: capitalizedTask, finished: false },
      ]);
      setTask("");
    }
  }

  function finishTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
  }

  function deleteTask(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <Container>
      <ToDoList>
        <InputTask
          onChange={getInputText}
          value={task}
          placeholder=" O que tenho para fazer..."
        />
        <ButtonTask onClick={addTask}>Adicionar</ButtonTask>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <CheckIcon onClick={() => finishTask(item.id)} />
                <li>{item.task}</li>
                <TrashIcon onClick={() => deleteTask(item.id)} />
              </ListItem>
            ))
          ) : (
            <EmptyList>Não há itens na lista</EmptyList>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
