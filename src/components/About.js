import React from "react";
import { useParams } from "react-router-dom";
const About = (props) => {
    const { type } = useParams();

    return (
        <React.Fragment>
            <div className="about__content">Hello world! About: {type}</div>
        </React.Fragment>
    );
};
export default About;
