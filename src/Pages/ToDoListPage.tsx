import { useState } from "react";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";
import { Toaster, toast } from 'sonner';

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([])

    const createNewToDo = (text: string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        };
        setTodos([...todos, newToDo]);
        toast("Task " + text + " is created");
    }

    const updateToDo = (toDoItem: ToDo) => {
        const newTodos = todos.map((item) => {
            if (item.id === toDoItem.id) {
                item.isDone = !item.isDone;
            }
            return item;
        })
        setTodos(newTodos);
        toast("Task " + toDoItem.text + " is updated");
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newTodos = todos.filter((todo) => todo.id !== toDoItem.id);
        setTodos(newTodos);
        toast("Task " + toDoItem.text + " is deleted");
    }

    return (
        <>
            <Header />
            <Toaster position="bottom-right" expand={true} />
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>

    );
}