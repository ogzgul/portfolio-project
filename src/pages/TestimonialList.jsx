import React, { useState, useEffect } from "react";
import TestimonialService from "../services/testimonialService";
import { Card, Image } from "semantic-ui-react";

export default function TestimonialList() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    let testimonialService = new TestimonialService();
    testimonialService
      .getTestimonial()
      .then((result) => setTestimonials(result.data.data));
  }, []);
  return (
    <div>
      <Card.Group>
        <Card fluid>
          {testimonials.map((testimonial) => (
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src={testimonial.imageUrl}
              />
              <Card.Header>{testimonial.clientName}</Card.Header>
              <Card.Meta>{testimonial.company}</Card.Meta>
              <Card.Description>
                {testimonial.comment}
              </Card.Description>
            </Card.Content>
          ))}
        </Card>
      </Card.Group>
    </div>
  );
}
