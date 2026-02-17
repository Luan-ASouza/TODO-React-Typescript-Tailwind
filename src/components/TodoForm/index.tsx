import { useContext, type FormEvent } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

interface TodoInputProps {
    addTodo: (event: FormEvent<HTMLFormElement>) => void;
}

const TodoForm = ({ addTodo }: TodoInputProps) => {
    const { theme } = useContext(ThemeContext);
    return (
        <form className=" relative mb-5 sm:mb-10" onSubmit={addTodo}>
            <span
                className={`absolute w-6 h-6 border ${themeConfig[theme].todo.borderColor} top-1/2 transform -translate-y-1/2 rounded-full left-6`} >

            </span>

            <input
                type="text"
                maxLength={60}
                placeholder="Create a new todo..."
                name="todo"
                autoComplete="off"
                className={`${themeConfig[theme].todo.backgroundColor} w-full ${themeConfig[theme].todo.textColor} rounded-md pl-16 outline-none py-4 text-sm sm:text-lg sm:py-6`} />
        </form>
    );
};

export default TodoForm;