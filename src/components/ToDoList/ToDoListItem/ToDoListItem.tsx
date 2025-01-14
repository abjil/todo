import './ToDoListItem.scss'

export const ToDoListItem = () => {
    return (
        <li className="todo-list-item__wrapper">
            <span>First task</span>
            <div className="todo-list-item__buttons">
                <button className="btn-trash"></button>
                <button className="btn-check"></button>
            </div>
        </li>
    )
}