import React from 'react'
import { ITitle } from "../../interfaces/ITitle";

export default function Title({ title, color}: ITitle) {
    return (
        <div>
            {title}
            <style jsx>{`
                div {
                    margin-bottom: 30px;
                    color: ${color};
                    font-size: 2.8em;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                @media screen and ( max-width: 769px ) {
                    div {
                        font-size: 2em;
                    }
                }
            `}</style>
        </div>
    )
}
