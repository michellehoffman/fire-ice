import React from 'react';

export const Card = ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words }) => {
  const cleanFounded = () => {
    return founded !== '' ? founded : 'N/A'
  }

  const renderSeats = () => {
    return seats.map( (seat, index) => <p key={ index + seat }>Seats: { seat }</p> )
  }

  const renderTitles = () => {
    return titles.map( (title, index) => <p key={ index + title }>Titles: { title }</p> )
  }

  const renderWeapons = () => {
    return ancestralWeapons.map( (weapon, index) => <p key={ index + weapon }>Ancestral Weapons: { weapon }</p> )
  }

  const renderWords = () => {
    return words !== '' ? <p>Words: { words }</p> : null
  }

  return (
    <div>
      <h2>{ name }</h2>
      <h3>Founded: { cleanFounded() }</h3>
      { renderSeats() }
      { renderTitles() }
      <p>Coat of Arms: { coatOfArms }</p>
      { renderWeapons() }
      { renderWords() }
    </div>
  )
}

// Things to display: name, founded, seats, titles, coatOfArms, ancestralWeapons, words