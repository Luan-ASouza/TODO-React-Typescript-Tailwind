import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import type { Todo } from "../../hooks/useTodo";
import iconCheck from "../../../public/images/icon-check.svg";
import iconCross from "../../../public/images/icon-cross.svg";

interface TodoListProps {
  deleteTodo: (id: number) => void;
  clearCompleted: () => void;
  filter: 'all' | 'active' | 'completed';
  todoList: Todo[];
  filteredTodo: Todo[];
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  toggleTodoCompleted: (id: number) => void;
}

const TodoList = ({ deleteTodo, clearCompleted, filter, todoList, filteredTodo, setFilter, toggleTodoCompleted }: TodoListProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {todoList.length > 0 && (
        <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>

          {filteredTodo.length > 0 && (
            <ul>
              {filteredTodo.map(todo =>
                <li className={`p-4 text-sm sm:text-lg sm:py-6 border-b ${themeConfig[theme].todo.borderColor}`} key={todo.id}>
                  <div className="flex items-center gap-4">
                    <span className={`w-6 h-6 rounded-full hover:p-[-1px] hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]`}>
                      <button
                        onClick={() => toggleTodoCompleted(todo.id)}
                        className={`${themeConfig[theme].todo.borderColor} w-full h-full rounded-full cursor-pointer border
                    ${todo.completed
                            ? 'bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]'
                            : `${themeConfig[theme].todo.backgroundColor}`
                          }`}> {todo.completed && <img src={iconCheck} className="h-2 w-2 m-auto" />}
                      </button>
                    </span>

                    <p
                      className={`${todo.completed && "line-through opacity-20"} ${themeConfig[theme].todo.textColor} break-all`}>{todo.text}
                    </p>
                    <span className="ml-auto w-6 h-6">
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="cursor-pointer ml-auto w-6 h-6">
                        <img src={iconCross} />
                      </button>
                    </span>

                  </div>
                </li>
              )}
            </ul>
          )};


          <div className={`text-sm flex justify-between px-3 pb-5 ${themeConfig[theme].layout.textColor} sm:pb-5 sm:text-lg`}>
            <p className={`cursor-pointer ${theme === "dark"
              ? "hover:text-neutral-light-grayish-blue"
              : "hover:text-neutral-very-dark-grayish-blue"
              }
              `}>{filteredTodo.length} items {filter === 'all' ? 'total' : filter}</p>
            <div className="hidden sm:flex gap-4">
              <button
                onClick={() => setFilter("all")}
                className={`cursor-pointer ${theme === "dark"
                  ? "hover:text-neutral-light-grayish-blue"
                  : "hover:text-neutral-very-dark-grayish-blue"
                  }
                  ${filter === 'all'
                    ? "text-bright-blue"
                    : ""
                  }
                  `}>All</button>
              <button
                onClick={() => setFilter("active")}
                className={`cursor-pointer ${theme === "dark"
                  ? "hover:text-neutral-light-grayish-blue"
                  : "hover:text-neutral-very-dark-grayish-blue"
                  }
                  ${filter === 'active'
                    ? "text-bright-blue"
                    : ""
                  }
                  `}>Active</button>
              <button
                onClick={() => setFilter("completed")}
                className={`cursor-pointer ${theme === "dark"
                  ? "hover:text-neutral-light-grayish-blue"
                  : "hover:text-neutral-very-dark-grayish-blue"
                  }
                  ${filter === 'completed'
                    ? "text-bright-blue"
                    : ""
                  }
                  `}>Completed</button>
            </div>
            <button
              onClick={clearCompleted}
              className={`cursor-pointer ${theme === "dark"
                ? "hover:text-neutral-light-grayish-blue"
                : "hover:text-neutral-very-dark-grayish-blue"
                }
              `}>Clear Completed
            </button>

          </div>
        </div>
      )};
      {todoList.length > 0 && (

        <div className={`sm:hidden ${themeConfig[theme].todo.backgroundColor} ${themeConfig[theme].layout.textColor} flex justify-center gap-4 mt-5 py-3 rounded-md text-sm sm:text-lg`}>
          <button
            onClick={() => setFilter("all")}
            className={`cursor-pointer ${theme === "dark"
              ? "hover:text-neutral-light-grayish-blue"
              : "hover:text-neutral-very-dark-grayish-blue"
              } text-bright-blue cursor-pointer
              ${filter === 'all'
                ? "text-bright-blue"
                : ""
              }
              `}
          >All</button>
          <button
            onClick={() => setFilter("active")}
            className={`cursor-pointer ${theme === "dark"
              ? "hover:text-neutral-light-grayish-blue"
              : "hover:text-neutral-very-dark-grayish-blue"
              }
              ${filter === 'active'
                ? "text-bright-blue"
                : ""
              }
              `}
          >Active</button>
          <button
            onClick={() => setFilter("completed")}
            className={`cursor-pointer ${theme === "dark"
              ? "hover:text-neutral-light-grayish-blue"
              : "hover:text-neutral-very-dark-grayish-blue"
              }
              ${filter === 'completed'
                ? "text-bright-blue"
                : ""
              }
              `}
          >Completed</button>
        </div>
      )};
    </>
  );
};

export default TodoList;