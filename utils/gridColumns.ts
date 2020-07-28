import { Component } from "../constants/Component";
import { Window } from "../constants/Window";

export const getGridColumns = (component, windowSize) => {
    if (component === Component.HEADER) {
        if (windowSize === Window.DESKTOP || windowSize === Window.TABLET) {
            return 1;
        }

        return 12;
    }

    if (component === Component.SKILLS) {
        if (windowSize === Window.DESKTOP) {
            return 6;
        }

        if (windowSize === Window.TABLET) {
            return 4;
        }

        return 2;
    }

    if (component === Component.EDUCATION) {
        if (windowSize === Window.DESKTOP || windowSize === Window.TABLET) {
            return 6;
        }

        return 12;
    }
};
