import { loaded } from "../actions";

const fetchTodos = async (dispatch) => {
    const response = await fetch("https://hidden-mountain-72558.herokuapp.com/todos");
    const todos = await response.json();

    dispatch(loaded(todos.result));
};

export default fetchTodos;
