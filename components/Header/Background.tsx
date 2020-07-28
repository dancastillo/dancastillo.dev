import React, { useEffect, useState } from 'react'
import Particles from "react-tsparticles";
import { IWindowSize } from "../../interfaces/IWindowSize";

export default function HeaderBackground({ windowSize }: IWindowSize) {

    const bgStyle = {
            position: "absolute",
            width: "100%",
            zIndex: -1,
            top: 0,
            left: 0,
            backgroundColor: "#f5f5f5"
        };

        if (windowSize <= 769) {
            // @ts-ignore
            return <div style={bgStyle} className="hero is-fullheight"> </div>
        } else {
            // @ts-ignore
            return (<Particles id="tsparticles"
                    style={bgStyle}
                    options={{
                        background: {
                            color: {
                                value: "#f5f5f5",
                            },
                        },
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: "canvas",
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#4A4A4A",
                            },
                            links: {
                                color: "#4A4A4A",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />
            );
        }
}
