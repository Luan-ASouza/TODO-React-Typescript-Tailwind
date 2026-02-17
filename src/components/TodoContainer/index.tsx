import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import React, { useContext } from "react";

interface TodoContainerProps {
    children: React.ReactElement;
}

const TodoContainer = ({ children }: TodoContainerProps) => {
    const { theme } = useContext(ThemeContext);

    return (
        <main className={`h-screen ${themeConfig[theme].layout.backgroundColor}`}>
            <div className={`${themeConfig[theme].layout.heroClass}`}>
                <div className="max-w-175 m-auto px-6 ">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default TodoContainer;