import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createUser = user => {
     this.setState(prevState => {
      return { contacts: [...prevState.contacts, user] };
    });
  };

  filter = value => {
    this.setState({
      filter: value,
    });
  };

  getVisibleFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          createUser={this.createUser}
        />
        <Filter filter={this.filter} />
        <ContactList
          deleteItem={this.deleteContact}
          contacts={this.getVisibleFilter()}
        />
      </div>
    );
  }
}
