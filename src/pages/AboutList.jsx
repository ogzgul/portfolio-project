import React from "react";
import { Grid, Label, Segment } from "semantic-ui-react";

export default function AboutList() {
  return (
    <div>
      <Grid columns={1}>
        <Grid.Column>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              Overview
            </Label>
            <span>Account Details</span>
          </Segment>
        </Grid.Column>

      </Grid>
    </div>
  );
}
