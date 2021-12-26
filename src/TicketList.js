import { List, Datagrid, TextField, TextInput } from "react-admin";

const ticketFilters = [<TextInput source="q" label="Search" alwaysOn />];

export const TicketList = (props) => (
  <List filters={ticketFilters} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="ticket_no" />
      <TextField source="book_ref" />
      <TextField source="passenger_id" reference="passengers" />
      <TextField source="passenger_name" />
      <TextField source="contact_data.phone" />
    </Datagrid>
  </List>
);
