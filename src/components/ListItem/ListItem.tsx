import { ToDo } from "../../models/todo-item"
import { ListItemLink } from "./ListItem.styled"

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <ListItemLink
            isDone={todo.isDone}
            target="_blank"
            rel="noreferrer"
            href={`/list/${todo.id}`}
        >
            {todo.text}
        </ListItemLink>
    )
}