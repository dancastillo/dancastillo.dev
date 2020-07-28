import React from 'react';
import Button from '@material-ui/core/Button';
import ProfileImage from "./ProfileImage";
import { Grid } from "@material-ui/core";
import Brace from "./Brace"
import Background from "./Background";
import { IWindowSize } from "../../interfaces/IWindowSize";
import { Component } from "../../constants/Component";
import { getGridColumns } from "../../utils/gridColumns";
import { getWindowSize } from "../../utils/windowSize";

export default function Header({ windowSize }: IWindowSize) {

    const cols = getGridColumns(Component.HEADER, getWindowSize(windowSize));
    const direction = cols === 12 ? 'column' : 'row';

    return (
        <section>
            <Grid
                container
                spacing={3}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item container>
                    <Grid item xs
                          container
                          direction="row"
                          spacing={2}
                          alignItems="center"
                          justify="center">
                        <Grid item>
                            <Brace type="left" color="#000" />
                        </Grid>
                        <Grid item>
                            <ProfileImage />
                        </Grid>
                        <Grid item>
                            <Brace type="right" color="#000" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container>
                    <Grid item xs
                          container
                          spacing={2}
                          alignItems="center"
                          justify="center"
                          direction={direction}
                    >
                        <Grid item sm={cols}>
                            <Button
                                variant="contained"
                                href="https://github.com/dancastillo"
                                target="_blank"
                            >
                                GitHub
                            </Button>
                        </Grid>
                        <Grid item sm={cols}>
                            <Button
                                variant="contained"
                                href="https://www.linkedin.com/in/daniel-castillo/"
                                target="_blank"
                                color="primary"
                            >
                                LinkedIn
                            </Button>
                        </Grid>
                        <Grid item sm={cols}>
                            <Button variant="contained" color="secondary">
                                Contact Me
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Background windowSize={windowSize}/>
            </Grid>
        </section>
    )
}
