import React from 'react';
import OrdealScheduler from './OrdealScheduler';

const OrdealSchedulerContainer = React.createClass({
  propTypes: {
    ordealId: React.PropTypes.string.isRequired
  },
  getMeteorData() {
    // const subscription = Meteor.subscribe('ordeal', this.props.ordealId);
    return {
      // isLoading: !subscription.ready(),
      // ordeal: Ordeals.findOne({ _id: this.props.ordealId })
    };
  },
  render() {
    if (this.data.isLoading) return <Loading/>;
    return (
      <OrdealScheduler ordeal={ this.data.ordeal }/>
    );
  }
});
