import React from 'react';
import {Route, Switch} from "react-router-dom";
import contacts from "./container/contacts";
import addContactPage from "./component/addContactPage";
import editPage from "./component/editPage";

const App = () => {
    return (
        <div>

          <Switch>
            <Route path="/" exact component={contacts}/>
            <Route path="/add" component={addContactPage}/>
            <Route path="/edit:id" component={editPage}/>
          </Switch>
        </div>
    );
};

export default App;