import React from 'react'
import { Grid } from "@material-ui/core";
import { spacing, style } from "@material-ui/system";
import GridListTile from "@material-ui/core/GridListTile";

interface SkillItemProps {
    img: string;
    color: string;
    value: string;
}

export default function SkillItem({ img, color, value }: SkillItemProps) {
        return (
                    <div className={'circle c100 p' + value + ' dark big orange'}>
                        <span>
                            <img src={img} alt=""/>
                        </span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                        <style jsx>{`
                            img {
                                margin-top: 30px;
                                max-width: 60px;
                                -webkit-transition: -webkit-transform 0.5s ease-in-out;
                                transition: transform 0.5s ease-in-out;
                            }
                            .bar {
                                border-color: ${color} !important;
                            }
                            .fill {
                                border-color: ${color} !important;
                            }
                            .circle {
                                margin: 10px auto;
                                -webkit-transition: -webkit-transform 0.5s ease-in-out;
                                transition: transform 0.5s ease-in-out;
                            }
                            
                        `}</style>
                    </div>
        )
}
