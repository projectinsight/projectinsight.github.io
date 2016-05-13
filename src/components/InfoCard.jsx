import React from "react";
import Card from "material-ui/Card/Card";
import CardTitle from "material-ui/Card/CardTitle";
import CardText from "material-ui/Card/CardText";

export default class InfoCard extends React.Component {
  render() {
    return (
      <Card>
        <CardTitle title="What is it?" subtitle="What purpose will it serve?" style={{background: "black"}} titleColor="white" subtitleColor="white" />
        <CardText>
          We are building a modern and customizable take on standard task
          tracking and other project management related details. We feel the
          current offerings, as amazing as they are, are just missing that
          "one" feature that would put them over the top and we plan to deliver
          not just a project management tool that lets you track tasks, but
          one that efficiently and easily track time spent (which is a resource
          of it's own) and better plan the future of your project.
          <br /><br />
          We plan to bring you the <em>insight</em> you expect when managing your <em>projects</em>!
        </CardText>
      </Card>
    );
  }
}
