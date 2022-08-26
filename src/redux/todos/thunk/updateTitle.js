import { editTitle } from "../actions";

const updateTitle = (todoId, text) => {
    return async (dispatch) => {
        const response = await fetch(`https://hidden-mountain-72558.herokuapp.com/todos/${todoId}`, {
            method: "PUT",
            body: JSON.stringify({
                text: text,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const todo = await response.json();

        dispatch(editTitle(todo.id, todo.color));
    };
};

export default updateTitle;