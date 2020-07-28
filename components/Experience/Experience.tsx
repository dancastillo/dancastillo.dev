import React from 'react'
import Title from '../shared/Title'
import Timeline from './ExperiencesTimelineItem'
import Container from '@material-ui/core/Container';
import { AccordionDetails } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Experiences() {
    return (
        <section className="hero wrapper has-text-centered">
            <Container fixed>
                <Title title="Experiences" color='#2c3e50'/>
                <div className="container">
                    <Timeline side="left" time="January 2020 - Present" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>School Family Media</h4>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>
                                    <i className="position">Software Engineer</i>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a href="​https://www.teacherlists.com/​">Teacher Lists</a>
                                    - Making and sharing lists for classroom supplies and teacher supplies. <br />
                                    Full Stack developer who developed and designed new user interface experience
                                    for all users, debugged and updated data source, created API endpoints.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <p>
                            <b>​ React, JavaScript, MySQL, API Design and Development, PHP, CakePHP,
                            Agile, Git.</b>
                        </p>
                    </Timeline>
                    <Timeline side="right" time="May 2018 - January 2020" color="#3498db">
                        <h4 style={{'color': '#3498db'}}>Dun & Bradstreet</h4>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>
                                    <i className="position">Software Developer</i>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a href="​https://data.mdreducation.com/​">ConnectED</a>
                                     - Creating and sharing school data lists via download or integration.
                                    Designed and developed data integration application to push data to Customer
                                    Relational Management and Marketing Automation. Designed and developed APIs to
                                    internal systems, third-party systems,and cloud data storages.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <p>
                            <b>​​Angular, NgRx, Laravel, JavaScript, Node.JS PHP,, TypeScript, SQL, Agile, Git,
                            API Design and Development, Apex, Symfony .</b>
                        </p>
                    </Timeline>
                    <Timeline side="left" time="December 2016 - May 2018" color="#9b59b6">
                        <h4 style={{'color': '#9b59b6'}}>Innovative Engineering Services</h4>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>
                                    <i className="position">Software Developer</i>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a href="​https://building-files.com/​">Building Files</a>
                                     - Digitizing construction documents to make them available on the cloud.
                                    Designed and developed features for existing web application based on customer
                                    feedback.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <p>
                            <b>​JavaScript, AWS, PHP, DynamoDB, jQuery, Git, Ubuntu, Linux, Waterfall.</b>
                        </p>
                    </Timeline>
                    <Timeline side="right" time="August 2017 - September 2017" color="#ff0000">
                        <h4 style={{'color': '#ff0000'}}>Software Instructor Mentor</h4>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>
                                    <i className="position">Software Instructor Mentor</i>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Mentored and tutored students in-person and online to help
                                    develop and learn development skills.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <p>
                            <b>​​Node.js, PHP, Git, JavaScript, HTML, CSS, MySQL.</b>
                        </p>
                    </Timeline>
                    <Timeline side="left" time="August 2016 - March 2017" color="#ffff00">
                        <h4 style={{'color': '#ffff00'}}>Grace and Goby LLC</h4>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>
                                    <i className="position">Software Developer</i>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Launch Island - Teaching kids entrepreneur skills and qualities by allowing them
                                    to buy and sell products. Scrum Master for development team in order to design
                                    and develop a Minimum Viable Product for start up venture. Designed NoSQL data
                                    storage and implemented third-party APIs.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <p>
                            <b>React, Meteor.js, MongoDB, Agile, Git, AWS, Agile.</b>
                        </p>
                    </Timeline>
                    <Timeline side="right" time="May 2016 - September 2016" color="#cc0066">
                        <h4 style={{'color': '#cc0066'}}>Independent Software</h4>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>
                                    <i className="position">Software Apprentice</i>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Project Xavier - Building a software developer profile to allow companies
                                    to view and contact developers for hire. Scrum master for local start up venture.
                                    Trained in Full Stack Web Development, Agile process and technical communication.
                                    Distributed tasks for software team, weekly demos for stakeholders, code review
                                    and peer programming.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <p>
                            <b>​Meteor.js, MongoDB, Agile methodologies, Git, Agile.</b>
                        </p>
                    </Timeline>
                    <Timeline side="left" time="September 2014 - May 2016" color="#009999">
                        <h4 style={{'color': '#009999'}}>Innovative Engineering Services​</h4>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>
                                    <i className="position">Information Technology Technician / Programmer</i>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Designed and developed features on customer facing web application.
                                    (PHP/JavaScript), performing remote troubleshooting through diagnostic techniques
                                    and pertinent questions,and troubleshooting hardware and software issues.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <p>
                            <b>JavaScript, PHP, jQuery, Git, Waterfall.</b>
                        </p>
                    </Timeline>
                </div>
            </Container>
            <style jsx>{`
                .wrapper {
                    padding-top: 50px;
                    padding-bottom: 50px;
                    background: #bdc3c7;
                    color: #333333;
                    font-size: 1.3em;
                }
                h4 {
                    font-size: 1.2em;
                    font-weight: bold;
                }
                p {
                    font-size: 0.8em;
                }
                i.position {
                    color: #c0392b;
                }
            `}</style>
        </section>
    )
}
