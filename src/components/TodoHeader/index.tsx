import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const TodoHeader = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <header className="flex justify-between pt-10 pb-5 px-2 sm:pt-20 sm:pb-10">
            <h1 className="text-white text-[2.5rem] font-bold tracking-[1rem]">TODO</h1>
            <button onClick={toggleTheme} className="cursor-pointer"><img src={`${themeConfig[theme].icon}`} alt="Light Mode" className="sm:w-8 sm:h-8" /></button>
        </header>
    );
};

export default TodoHeader;
