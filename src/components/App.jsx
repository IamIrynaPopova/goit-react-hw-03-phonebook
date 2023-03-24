import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
   
  }

  componentDidUpdate(_, prevState) {
    const contacts = this.state.contacts;
    if (this.state.contacts !== prevState.contacts) 
      localStorage.setItem('contacts', JSON.stringify(contacts));
     }

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
