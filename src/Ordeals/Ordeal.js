import React from 'react';
import { Link, browserHistory } from 'react-router';
import * as firebase from 'firebase';

const Ordeal = React.createClass({
  propTypes: {
    ordeal: React.PropTypes.string.isRequired
  },
  deleteOrdeal(event) {
    event.preventDefault();
    // Meteor.callPromise('deleteOrdeal', this.props.ordeal._id)
    //   .then(() => {
    //     Bert.alert('Successfully deleted ordeal.', 'success');
    //   })
    //   .catch((error) => {
    //     Bert.alert(error.reason, 'danger');
    //   });
  },
  editOrdeal() {
    browserHistory.push(`/ordeals/${this.props.ordeal.id}/edit`);
    // FlowRouter.go('ordeals-edit', { _id: this.props.ordeal._id });
  },
  options() {
    if (firebase.auth().currentUser) {
      return (
        <div className="btn-group">
          <button type="button" className="btn btn-sm btn-default" onClick={ this.editOrdeal }>Edit</button>
          <button type="button" className="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><Link to={ `/ordeals/${this.props.ordeal.id}` }>View</Link></li>
            <li><Link to={ `/ordeals/${this.props.ordeal.id}/edit/schedule` }>Schedule</Link></li>
            <li><a onClick={ this.deleteOrdeal }>Delete</a></li>
          </ul>
        </div>
      );
    } else if (firebase.auth().currentUser && (this.createdBy === firebase.auth().currentUser.uid)) {
      return (
        <div className="btn-group">
          <button type="button" className="btn btn-sm btn-default" onClick={ this.editOrdeal }>Edit</button>
          <button type="button" className="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><Link to={ `/ordeals/${this.props.ordeal.id}` }>View</Link></li>
            <li><Link to={ `/ordeals/${this.props.ordeal.id}/edit/schedule` }>Schedule</Link></li>
          </ul>
        </div>
      );
    }
    return (<Link className="btn btn-default" to={ `/ordeals/${this.props.ordeal.id}` }>View</Link>);
  },
  render() {
    return (
      <div>
        <div className="col-xs-3">{ this.props.ordeal.name }</div>
        <div className="col-xs-3">{ this.props.ordeal.location }</div>
        <div className="col-xs-3">{ this.props.ordeal.date }</div>
        <div className="col-xs-3">{ this.options() }</div>
      </div>
    );
  }
});

export default Ordeal;
