import { useState, useEffect, type FormEvent } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodo = () => {

    const [todoList, setTodoList] = useState<Todo[]>(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList]);

    const addTodo = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const todoItem = formData.get('todo') as string

        if (!todoItem.trim()) return
        setTodoList(prev => [...prev, {
            id: Date.now(),
            text: todoItem,
            completed: false,
        },])
    };

    const toggleTodoCompleted = (id: number) => {
        const newTodoList = todoList.map(todo => {
            if (id === todo.id) {
                const completed = !todo.completed;

                return {
                    ...todo,
                    completed: completed,
                };
            }

            return todo;
        });


        setTodoList(newTodoList);
    };

    const clearCompleted = () => {
        const newTodoList = todoList.filter(todo => !todo.completed);
        setTodoList(newTodoList);
    }

    const filteredTodo = todoList.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;

    });

    const deleteTodo = (id:number) => {
        const newTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(newTodoList);
    }

    return {
        addTodo,
        toggleTodoCompleted,
        clearCompleted,
        filteredTodo,
        setFilter,
        filter,
        todoList,
        deleteTodo
    }

}