import React, { useEffect, useState } from 'react'
import Item from './SkillItem'
import { Grid } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { ISkillItemGroup } from "../../interfaces/ISkillItemGroup";

export default function SkillItemGroup({ name, items, cols }: ISkillItemGroup) {
    return (
        <div>
            <Grid item>
                <h3 className="text-center font-white">{name}</h3>
            </Grid>
            <Grid item xs={12}>
                <GridList cols={cols}>
                    {
                        items.map((item, key) => {
                            return (
                                <GridListTile cols={1} key={key}>
                                    <Item key={key}
                                          img={'/images/skills/' + item.name + '.png'}
                                          color={item.color}
                                          value="100"/>
                                </GridListTile>
                            )
                        })
                    }
                </GridList>
            </Grid>
            <style jsx>{`
            h4 {
                margin: 10px 20px;
                color: #ffffff;
                font-weight: bold;
            }
        `}</style>
        </div>
    )
};
