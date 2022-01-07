import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { TicketList } from "./TicketList";

const dataProvider = jsonServerProvider(process.env.REACT_APP_BACKEND_URL);
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="tickets" list={TicketList} />
  </Admin>
);
export default App;
