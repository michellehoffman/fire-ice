import React, { Component } from 'react';

export class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }
  }

  cleanFounded = founded => {
    return founded !== '' ? founded : 'N/A'
  }

  renderDetails = (details, type) => {
    return details.map( (detail, index) => (
      <p key={ index + detail }>{ type }: { detail }</p> )
    )
  }

  renderWords = words => {
    return words !== '' ? <p>Words: { words }</p> : null
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  renderMembers = swornMembers => {
    const status = (status) => status !== '' ? status : 'alive' 

    return swornMembers.map( (member, index) => (
      <p key={ index + member.name }>{ member.name }: { status(member.died) } </p>)
    )
  }

  render() {
    const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words, swornMembers } = this.props
    
    return (
      <div onClick={ this.handleClick }>
        <h2>{ name }</h2>
        <h3>Founded: { this.cleanFounded(founded) }</h3>
        { this.renderDetails(seats, 'Seats') }
        { this.renderDetails(titles, 'Titles') }
        <p>Coat of Arms: { coatOfArms }</p>
        { this.renderDetails(ancestralWeapons, 'Ancestral Weapons') }
        { this.renderWords(words) }
        {
          this.state.clicked &&
          this.renderMembers(swornMembers)
        }
      </div>
    )
  }
}