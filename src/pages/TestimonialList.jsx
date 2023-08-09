import React, { useState, useEffect } from "react";
import TestimonialService from "../services/testimonialService";
import { Card, Divider, Image } from "semantic-ui-react";

export default function TestimonialList() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    let testimonialService = new TestimonialService();
    testimonialService
      .getTestimonial()
      .then((result) => setTestimonials(result.data.data));
  }, []);
  return (
    <div id="section6">
      <Card.Group>
        <Card fluid>
          <h2>Testimonials</h2>
          {testimonials.map((testimonial) => (
            <Card.Content>
              <Image
                floated="right"
                size="small"
                src={testimonial.imageUrl}
              />
              <Card.Header>{testimonial.clientName}</Card.Header>
              <Card.Meta>{testimonial.company}</Card.Meta>
              <Card.Meta>
                {testimonial.comment}
              </Card.Meta>
            </Card.Content>
          ))}
        </Card>
      </Card.Group>
      <Divider/>
    </div>
  );
}
