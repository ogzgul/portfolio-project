import React, { useState, useEffect } from "react";
import MessagesService from "../services/messagesService";
import { Grid, Form } from "semantic-ui-react";

export default function MessageList() {
  const [contacts, setContact] = useState([]);
  useEffect(() => {
    let contactService = new MessagesService();
    contactService.getContact().then((result) => setContact(result.data.data));
  }, []);
  return (
    <div>
      <h1>
        {" "}
        <strong>My Contacts</strong>
      </h1>
      <br />
      <Grid>
        {contacts.map((contact) => (
          <Grid.Row>
            <Grid.Column width={8}>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input fluid label="First name" placeholder="Name" />
                  <Form.Input fluid label="Mail" placeholder="Email" />
                </Form.Group>
                <Form.TextArea label="Message" />
                <Form.Button content='Primary' primary>
                Send</Form.Button>
              </Form>
            </Grid.Column>
            <Grid.Column key={contact.contactID} width={8}>
              <h2>{contact.title}</h2>
              <p>{contact.description}</p>
              <h4>{contact.mail}</h4>
              <h4>{contact.phone}</h4>
            </Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
      <br />
    </div>
  );
}
