import React from 'react'
import Title from '../shared/Title'
import Item from './EducationItem';
import { style } from "@material-ui/system";
import { Container, Grid } from "@material-ui/core";
import { getGridColumns } from "../../utils/gridColumns";
import { Component } from "../../constants/Component";
import { getWindowSize } from "../../utils/windowSize";
import { IWindowSize } from "../../interfaces/IWindowSize";

export default function Education({ windowSize }: IWindowSize) {
    const cols = getGridColumns(Component.EDUCATION, getWindowSize(windowSize));
    const direction = cols === 12 ? 'column' : 'row';

    return (
        <section className="wrapper">
            <Container fixed>
                <Title title="Education" color='#000000'/>
                <Grid
                    container
                    direction={direction}
                    justify="center"
                    alignItems="center"
                >
                    <Grid item sm={cols}>
                    <Item
                        name="Southern Connecticut State University"
                        color="#2ecc71"
                        degree="Bachelor's of Science"
                        cols={cols}
                        major="Computer Science"
                        minor="Mathematics"
                    />
                    </Grid>

                    <Grid item sm={cols}>
                    <Item
                        name="Norwalk Community College"
                        color="#3498db"
                        degree="Associate's of Science"
                        cols={cols}
                        major="Computer Science"
                    />
                    </Grid>
                </Grid>
            </Container>
            <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background-size: cover;
                        color: #333333;
                    }
                `}</style>
        </section>
    )
}
