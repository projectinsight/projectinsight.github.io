import React from "react";
import {Card, CardTitle, CardText} from "material-ui";

const cardStyles = {
  width: "500",
  margin: "0 auto",
  background: "black",
  textColor: "white"
};

export default class Test extends React.Component {
  render() {
    return (
      <Card style={cardStyles}>
        <CardTitle title="What Purpose Will We Serve?" />
        <CardText>
          We are building a modern and customizable take on standard task
          tracking and other project management related details. We feel the
          current offerings, as amazing as they are, are just missing that
          "one" feature that would put them over the top and we plan to deliver
          not just a project management tool that lets you track tasks, but
          one that efficiently and easily track time spent (which is a resource
            of it's own) and better plan the future of your project.
        </CardText>
      </Card>
    );
  }
}
