import React from 'react'
import { Grid } from "@material-ui/core";
import { IEducationItem } from "../../interfaces/IEducationItem";

export default function EducationItem(
    { color, name, degree, cols, major, minor }: IEducationItem
) {
        return <section className="hero wrapper has-text-centered">
                <div className="item">
                    <h4 className="name">
                        {name}
                    </h4>
                    <div className="degree">
                      <p>Degree {degree}</p>
                    </div>
                    <div className="major-minor">
                        {major && <span>Major: {major} </span>}
                        {minor && <span> - Minor: {minor} </span>}
                    </div>
                </div>
            <style jsx>{`
                .item {
                    border-left: 8px solid ${color};
                    background-color: #ffffff;
                    box-shadow: 10px 10px 0px #333333;
                    margin: 10px;
                    padding: 10px;
                }
                .major-minor span {
                    font-size: .9em;
                    font-style: italic;
                    margin: 2px 0px;
                }
                .degree {
                    font-size: 1em;
                    margin: 2px 0px;
                }
                .name {
                    font-weight: bold;
                    font-size: 1.4em;
                    color: ${color};
                    margin: 2px 0px;
                }
            `}</style>
        </section>
}
