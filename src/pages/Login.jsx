import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CryptoJs from 'crypto-js';
import { userHash, userInfo, userToken } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    const { name, email } = this.state;
    const { myUser, hashGravatar } = this.props;
    const hash = CryptoJs.MD5(email).toString();
    myUser(name, email);
    hashGravatar(hash);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { name, email } = this.state;
    const isEnable = !((name && email));
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email do Gravatar:
            <input
              id="email"
              type="email"
              name="email"
              value={ email }
              data-testid="input-gravatar-email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="name">
            Nome do Jogador:
            <input
              id="name"
              type="text"
              name="name"
              value={ name }
              data-testid="input-player-name"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="btn-play"
            disabled={ isEnable }
            onClick={ this.onClick }
          >
          Jogar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  myUser: (name, email) => dispatch(userInfo(name, email)),
  hashGravatar: (hash) => dispatch(userHash(hash)),
  /* requestToken: (token) => dispatch(userToken(token.value)), */
});

Login.propTypes = {
  myUser: PropTypes.func.isRequired,
  hashGravatar: PropTypes.func.isRequired,
  /* requestToken: PropTypes.func.isRequired, */
};

export default connect(null, mapDispatchToProps)(Login);
