import React from "react";
import Contents from "./Contents";
import { Grid, GridColumn } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn width={16}>
            <Contents />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
