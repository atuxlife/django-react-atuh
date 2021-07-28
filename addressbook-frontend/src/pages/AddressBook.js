import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { rj, useRunRj } from 'react-rocketjump';
import { ajax } from 'rxjs/ajax';
//import { useAuthActions, useAuthUser } from 'use-eazy-auth';

//import ContactCard from '../components/ContactCard';
import Menu from '../components/Menu';
import Contacts from './Contacts';
import Companies from './Companies';
import Users from './Users';

const ContactsState = rj({
  effectCaller: rj.configured(),
  effect: (token) => (search = '') =>
    ajax.getJSON(`/api/contacts/?search=${search}`, {
      Authorization: `Bearer ${token}`,
    }),
});

export default function AddressBook() {
  /*const [search, setSearch] = useState('');
  const [{ data: contacts }] = useRunRj(ContactsState, [search], false);*/

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">

          <Menu/>

          <div className="col-10">
            <Switch>
              <Route path="/contacts" component={Contacts} />
              <Route path="/companies" component={Companies} />
              <Route path="/users" component={Users} />
            </Switch>
          </div>

        </div>
      </div>
      
    </Router>
  )
}
