import { Window } from "../constants/Window";

export const getWindowSize = (windowWidth: number) => {
    if (windowWidth >= 1008) {
        return Window.DESKTOP;
    }

    if (windowWidth < 1008 && windowWidth >=641) {
        return Window.TABLET;
    }

    return Window.MOBILE;
};
