import Title from "../shared/Title";
import React from "react";
import { Grid } from "@material-ui/core";

export default function About() {
    return  (
        <section className="wrapper">
            <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item>
                    <Title title="About me" color='#ffffff'/>
                </Grid>

                <Grid item>
                    <dl>
                        <dt>FULL NAME</dt>
                        <dd>Daniel Castillo</dd>
                        <dt>EMAIL</dt>
                        <dd>dancastillo99@gmail.com</dd>
                    </dl>
                </Grid>
            </Grid>
        <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #34495e;
                        color: #ffffff;
                        font-size: 1.3em;
                    }
                    dl > dt {
                        color: #ffcc00;
                        font-weight: bold;
                        margin-bottom: 5px;
                    }
                    dl > dd {
                        margin-bottom: 30px;
                        margin-left: 0px;
                    }
                `}</style>
    </section>
)
}
