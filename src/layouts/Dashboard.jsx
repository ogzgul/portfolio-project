import React from "react";
import Contents from "./Contents";
import { Grid, GridColumn } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import SkillAdd from "../pages/SkillAdd";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn width={16}>
            <Routes>
              <Route exact path="/" element={<Contents />} />
              <Route  path="/Feature" element={<Contents />} />
              <Route  path="/skill/add" element={<SkillAdd />} />
            </Routes>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
