import React from 'react'
import Title from '../shared/Title'
import Group from './SkillItemGroup';
import { Grid } from "@material-ui/core";
import { style } from "@material-ui/system";
import Container from "@material-ui/core/Container";
import { IWindowSize } from "../../interfaces/IWindowSize";
import { getGridColumns } from "../../utils/gridColumns";
import { Component } from "../../constants/Component";
import { getWindowSize } from "../../utils/windowSize";

export default function Skills({ windowSize }: IWindowSize) {
    const cols = getGridColumns(Component.SKILLS, getWindowSize(windowSize));
    const skillImgs = [
        {
            name: 'Back-ends',
            list: [
                { name: 'nodejs', color: '#81ca2a' },
                { name: 'php', color: '#8993be' },
            ]
        },
        {
            name: 'Frameworks',
            list: [
                { name: 'nextjs', color: '#FFFFFF' },
                { name: 'laravel', color: '#FF0000' },
                { name: 'symfony', color: '#FFFFFF' },
                { name: 'meteorjs', color: '#FF0000' },
                { name: 'cakephp', color: '#FF0000' },
            ]
        },
        {
            name: 'Front-ends',
            list: [
                { name: 'angularjs', color: '#dd0330' },
                { name: 'reactjs', color: '#61d9fa' },
                { name: 'javascript', color: '#f7df1e' },
                { name: 'html5', color: '#f16529' },
                { name: 'css3', color: '#29a9df' },
                { name: 'bootstrap', color: '#8b57d9' },
                { name: 'sass', color: '#cb6699' },
                { name: 'jquery', color: '#288cc4' },
            ]
        },
        {
            name: 'Databases',
            list: [
                { name: 'mysql', color: '#0784af' },
                { name: 'mongodb', color: '#ffcb2c' },
                { name: 'sqlserver', color: '#ffcb2c' },
                { name: 'dynamodb', color: '#ffcb2c' }
            ]
        },
        {
            name: 'Tools and Skills',
            list: [
                { name: 'git', color: '#F05032' },
                { name: 'bash', color: '#2c8ebb' },
                { name: 'aws', color: '#6dcdff' }
            ]
        }
    ]

    return (
        <section className="hero wrapper has-text-centered">
            <Container fixed>
                <Title title="Skills" color='#ffffff'/>
                <Grid>
                    {
                        skillImgs.map((item, key) => (
                            <Group key={key} name={item.name} items={item.list} cols={cols}/>
                        ))
                    }
                </Grid>
            </Container>

            <style jsx>{`
                .wrapper {
                    padding-top: 50px;
                    padding-bottom: 50px;
                    background: #2f353f;
                    background-size: cover;
                    color: #333333;
                    font-size: 1.3em;
                }
            `}</style>
        </section>
    )
}
