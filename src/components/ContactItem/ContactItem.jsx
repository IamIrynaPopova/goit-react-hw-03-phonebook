import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export class ContactItem extends Component {
  handleDelete = () => {
    const { deleteItem, id } = this.props;
    deleteItem(id);
  };

  render() {
    const { name, number } = this.props;
    return (
      <li className={css.item}>
        {name}: {number}
        <button
          className={css.button}
          type="button"
          onClick={this.handleDelete}
        >
          Delete
        </button>
      </li>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
