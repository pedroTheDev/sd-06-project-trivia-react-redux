import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import Scoreboard from '../components/Scoreboard';

class Feedback extends React.Component {

  render() {
    const { gameBoard } = this.props;
    const asserts = gameBoard.assertions;
    return (
      <div data-testid="feedback-text">
        <Header />
        <Scoreboard asserts={ asserts }/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gameBoard: state.game.gameBoard,
});

Feedback.propTypes = {
  gameBoard: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, null)(Feedback);
