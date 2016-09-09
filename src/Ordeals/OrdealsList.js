import React from 'react';
import Ordeal from './Ordeal';
import * as firebase from 'firebase';

const OrdealsList = React.createClass({
  getInitialState() {
    return {
      ordeals: []
    };
  },
  componentDidMount() {
    const db = firebase.database();
    const ordealsRef = db.ref().child('ordeals');
    ordealsRef.on('value', snapshot => {
      this.setState({ ordeals: snapshot.val() });
    });
  },
  addOrdealBtn() {
    if (firebase.auth().currentUser) {
      return (<a href="ordeals-create" className="pull-right btn btn-sm btn-success"><i className="fa fa-plus"></i>&nbsp;Add Ordeal</a>);
    }
  },
  render() {
    console.log(this.state.ordeals);
    return (
      <div>
        <div className="row">
          <h1>Ordeals</h1>
          { this.addOrdealBtn() }<br/>
        </div>
        <div className="row">
          <div className="col-xs-3">Name</div>
          <div className="col-xs-3">Location</div>
          <div className="col-xs-3">Begins</div>
          <div className="col-xs-3">Options</div>
        </div>
        <hr/>
        <div className="row">
          {
            Object.keys(this.state.ordeals).map((ordeal, index) => {
              console.log(ordeal);
              return <Ordeal key={ index } ordeal={ ordeal } />;
            })
          }
        </div>
      </div>
    );
  }
});

export default OrdealsList;