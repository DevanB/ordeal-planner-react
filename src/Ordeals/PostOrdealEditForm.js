import React from 'react';
import InputGroup from '../InputGroup';
import Teams from '../Teams/Teams';
import OrdealMasters from '../OrdealMasters/OrdealMasters';
import Clans from '../Clans/Clans';

const PostOrdealEditForm = React.createClass({
  propTypes: {
    ordeal: React.PropTypes.object.isRequired,
    ordealId: React.PropTypes.string.isRequired
  },
  saveOrdeal(event) {
    event.preventDefault();

    const ordeal = {};
    _.each(this.refs, (ref) => {
      if (ref.value) ordeal[ref.id] = ref.value;
    });

    const ordealMasters = [];
    _.each(this.refs.ordealMasters.refs, (ordealMastersRow) => {
      ordealMasters.push({ name: ordealMastersRow.refs.ordealMasterName.value, rating: ordealMastersRow.refs.ordealMasterRating.value, key: Math.random() });
    });

    const preOrdealTeams = [];
    _.each(this.refs.preOrdealTeams.refs, (preOrdealTeamRow) => {
      preOrdealTeams.push({ chapter: preOrdealTeamRow.refs.preOrdealTeamChapter.value, eta: moment(preOrdealTeamRow.refs.preOrdealTeamETA.value).toDate(), performed: preOrdealTeamRow.refs.preOrdealTeamPerformed.checked, key: Math.random() });
    });

    const ordealTeams = [];
    _.each(this.refs.ordealTeams.refs, (ordealTeamRow) => {
      ordealTeams.push({ chapter: ordealTeamRow.refs.ordealTeamChapter.value, eta: moment(ordealTeamRow.refs.ordealTeamETA.value).toDate(), performed: ordealTeamRow.refs.ordealTeamPerformed.checked, key: Math.random() });
    });

    const brotherhoodTeams = [];
    _.each(this.refs.brotherhoodTeams.refs, (brotherhoodTeamRow) => {
      brotherhoodTeams.push({ chapter: brotherhoodTeamRow.refs.brotherhoodTeamChapter.value, eta: moment(brotherhoodTeamRow.refs.brotherhoodTeamETA.value).toDate(), performed: brotherhoodTeamRow.refs.brotherhoodTeamPerformed.checked, key: Math.random() });
    });

    const clans = [];
    _.each(this.refs.clans.refs, (clanRow) => {
      clans.push({ name: clanRow.refs.clanName.value, elangomat: clanRow.refs.clanElangomat.value, candidates: clanRow.refs.clanCandidates.value, poorElangomat: clanRow.refs.clanPoorElangomat.checked, key: Math.random() });
    });

    _.extend(ordeal, {
      ordealMasters,
      preOrdealTeams,
      ordealTeams,
      brotherhoodTeams,
      clans
    });

    console.log(ordeal);

    // Meteor.callPromise('postOrdealUpdate', this.props.ordealId, ordeal)
    //   .then(() => {
    //     Bert.alert('Ordeal successfully updated', 'success');
    //   })
    //   .catch((error) => {
    //     Bert.alert(error.reason, 'danger');
    //   });
  },
  render() {
    return (
      <form onSubmit={ this.saveOrdeal }>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <InputGroup inputName="name" ref="name" label="Name" inputType="text" defaultValue={ this.props.ordeal.name } className="form-control" isReadOnly/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <InputGroup inputName="location" ref="location" label="Location" inputType="text" defaultValue={ this.props.ordeal.location } className="form-control" isReadOnly/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <label htmlFor="datetime">Ordeal Begins</label>
            <div className="input-group datetimepicker">
              <input readOnly className="set-due-date form-control" type="text" ref="date" defaultValue={ this.props.ordeal.date } id="date" placeholder="ex: 10/03/2015 06:00 PM"/>
              <span className="input-group-addon"><i className="fa fa-calendar"></i></span>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <InputGroup inputName="candidates" ref="candidates" label="Candidates" inputType="number" defaultValue={ this.props.ordeal.candidates } className="form-control"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <InputGroup inputName="brotherhoods" ref="brotherhoods" label="Brotherhoods" inputType="number" defaultValue={ this.props.ordeal.brotherhoods } className="form-control"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <InputGroup inputName="members" ref="members" label="Members" inputType="number" defaultValue={ this.props.ordeal.members } className="form-control"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12">
            <h3>Ceremony Teams</h3>
          </div>
        </div>
        <Teams teams={ this.props.ordeal.preOrdealTeams } ref="preOrdealTeams" type="preOrdeal" display="Pre-Ordeal" time="post"/>
        <hr/>
        <Teams teams={ this.props.ordeal.ordealTeams } ref="ordealTeams" type="ordeal" display="Ordeal" time="post"/>
        <hr/>
        <Teams teams={ this.props.ordeal.brotherhoodTeams } ref="brotherhoodTeams" type="brotherhood" display="Brotherhood" time="post"/>
        <hr/>
        <OrdealMasters ordealMasters={ this.props.ordeal.ordealMasters } ref="ordealMasters" time="post"/>
        <hr/>
        <Clans clans={ this.props.ordeal.clans } ref="clans" time="post"/>
        <hr/>
        <div className="row">
          <div className="col-xs-12">
            <label htmlFor="roses">Roses</label>
            <textarea ref="roses" defaultValue={ this.props.ordeal.roses } className="form-control" id="roses" placeholder="Roses"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12">
            <label htmlFor="thorns">Thorns</label>
            <textarea ref="thorns" defaultValue={ this.props.ordeal.thorns } className="form-control" id="thorns" placeholder="Thorns"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12">
            <label htmlFor="additionalComments">Additional Comments</label>
            <textarea ref="additionalComments" defaultValue={ this.props.ordeal.additionalComments } className="form-control" id="additionalComments" placeholder="Additional Comments"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12">
            <label htmlFor="adviserComments">Adviser Comments</label>
            <textarea ref="adviserComments" defaultValue={ this.props.ordeal.adviserComments } disabled={ (Roles.userIsInRole(Meteor.user(), ['admin'])) ? '' : 'disabled' } className="form-control" id="adviserComments" placeholder="Adviser Comments"/>
          </div>
        </div>
        <hr/>
        <div className="row">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    );
  }
});

export default PostOrdealEditForm;