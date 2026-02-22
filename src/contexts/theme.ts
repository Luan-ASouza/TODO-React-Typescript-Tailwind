import IconSun from "../assets/images/icon-sun.svg";
import MoonIcon from "../assets/images/icon-moon.svg";

export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            heroClass: 'light-theme-hero',
            backgroundColor:'bg-neutral-very-light-grayish-blue',
            textColor: 'text-neutral-dark-grayish-blue'
        },
        todo: {
            backgroundColor: 'bg-neutral-very-light-gray',
            borderColor: 'border-neutral-light-grayish-blue',
            textColor: 'text-neutral-very-dark-grayish-blue'
        },
        icon: MoonIcon
    },
    dark: {
        name: 'dark',
        layout: {
            heroClass: 'dark-theme-hero',
            backgroundColor:'bg-neutral-very-dark-blue',
            textColor: 'text-neutral-dark-grayish-blue'
        },
        todo: {
            backgroundColor: 'bg-neutral-very-dark-desaturated-blue',
            borderColor: 'border-neutral-very-dark-grayish-blue',
            textColor: 'text-neutral-light-grayish-blue'
        },
        icon: IconSun
    },
}