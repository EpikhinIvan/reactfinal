import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCoach } from '../../redux/coachaction';
import { Link } from 'react-router-dom';
import './coach.css';
 
class Coach extends Component {
  render() {
    const { coaches, selectCoach } = this.props;

    return (
      <div>
        <div className='background-contacts'><h1>Наши тренера</h1></div>

        <div className="coaches-page">
          <div className="coaches-list">
            {coaches.map(coach => (
              <Link
                key={coach.id}
                to={`/booking/${coach.id}`}
                className="coach"
                onClick={() => selectCoach(coach.id)}
              >
                <img src={coach.img} alt={coach.name} className="coach-img" />
                <h3 className='h3-coach'>{coach.name}</h3>
                <p className='p-coach'>{coach.bio}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coaches: state.coaches
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCoach: (coachId) => dispatch(selectCoach(coachId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Coach);
