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

  renderDetails = details => {
    return details.map( (detail, index) => {
      return <p key={ index + detail }>{`${details}`}: { detail }</p>
    } )
  }

  renderSeats = seats => {
    return seats.map( (seat, index) => <p key={ index + seat }>Seats: { seat }</p> )
  }

  renderTitles = titles => {
    return titles.map( (title, index) => <p key={ index + title }>Titles: { title }</p> )
  }

  renderWeapons = ancestralWeapons => {
    return ancestralWeapons.map( (weapon, index) => (
      <p key={ index + weapon }>Ancestral Weapons: { weapon }</p> )
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
        { this.renderSeats(seats) }
        { this.renderTitles(titles) }
        <p>Coat of Arms: { coatOfArms }</p>
        { this.renderWeapons(ancestralWeapons) }
        { this.renderWords(words) }
        {
          this.state.clicked &&
          this.renderMembers(swornMembers)
        }
      </div>
    )
  }
}