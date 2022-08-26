import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

export default function TodoList({completed}) {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos);
    }, [dispatch, todos]);

    const filterByStatus = (todo) => {
        const { status } = filters;
        switch (status) {
            case "Complete":
                return todo.completed;

            case "Incomplete":
                return !todo.completed;

            default:
                return true;
        }
    };

    const filterByColors = (todo) => {
        const { colors } = filters;
        if (colors.length > 0) {
            return colors.includes(todo?.color);
        }
        return true;
    };

    const filterByCompleted = (todo) => {
        if (todo.completed) {
          return true;  
        };
    };

    const filterByInCompleted = (todo) => {
        if (!todo.completed) {
          return true;  
        };
    };

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                completed ?
                    todos
                    .filter(filterByCompleted)
                    .map((todo) => (
                        <Todo todo={todo} key={todo._id} completed/>
                    ))
                :
                    todos
                    .filter(filterByStatus)
                    .filter(filterByColors)
                    .filter(filterByInCompleted)
                    .map((todo) => (
                        <Todo todo={todo} key={todo._id} completed={false}/>
                    ))
            }
        </div>
    );
}
