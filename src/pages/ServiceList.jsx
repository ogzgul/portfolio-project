import React, { useState, useEffect } from "react";
import ServiceService from "../services/serviceService";
import { Image, Grid, Divider } from "semantic-ui-react";

export default function ServiceList() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    let serviceService = new ServiceService();
    serviceService.getService().then((result) => setServices(result.data.data));
  }, []);
  return (
    <div id="section2">
      <Grid centered columns={6}>
        <h1>My Services</h1>
        <br></br>
        <Grid.Row>
          {services.map((service) => (
            <Grid.Column key={service.serviceID}>
              <Image src={service.imageUrl} />
              <h3>{service.title}</h3>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
      <Divider/>
    </div>
  );
}
