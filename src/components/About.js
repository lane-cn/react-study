import React from "react";
import { useParams } from "react-router-dom";
const About = (props) => {
    const { type } = useParams();

    return (
        <React.Fragment>
            <div>Hello world! About: {type}</div>
        </React.Fragment>
    );
};
export default About;
