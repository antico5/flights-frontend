import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { TicketList } from "./TicketList";

const dataProvider = jsonServerProvider("http://localhost:5000");
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="tickets" list={TicketList} />
  </Admin>
);
export default App;
