import React, { Component } from 'react';
import { func, arrayOf, object } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';
import { getHouses } from '../../api/apiCall';
import gif from '../../assets/wolf.gif';
import { Card } from '../Card/Card';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  async componentDidMount() {
    const houses = await getHouses();
    this.props.addHouses(houses);
    if(this.props.houses) {
      this.setState({ loaded: true })
    }
  }

  renderCards = () => {
    return this.props.houses.map( (house, index) => (
      <Card key = { index + house.name } { ...house } />)
    )
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          { !this.state.loaded &&
            <img src={ gif } alt='wolf gif' />
          }
          {
            this.state.loaded &&
              this.renderCards()
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  addHouses: func.isRequired,
  houses: arrayOf(object).isRequired
};

export const mapStateToProps = ({ houses }) => ({ houses });

export const mapDispatchToProps = dispatch => ({ 
  addHouses: houses => dispatch(addHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);