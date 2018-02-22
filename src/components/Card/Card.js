import React from 'react';

export const Card = ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words }) => {
  const cleanFounded = () => {
    return founded !== '' ? founded : 'N/A'
  }

  const renderTitles = () => {
    return titles.map( title => <p>Titles: { title }</p> )
  }

  const renderWeapons = () => {
    return ancestralWeapons.map( weapon => <p>Ancestral Weapons: { weapon }</p> )
  }

  const renderWords = () => {
    return words !== '' ? <p>Words: { words }</p> : null
  }

  return (
    <div>
      <h2>{ name }</h2>
      <h3>Founded: { cleanFounded() }</h3>
      <p>Seats: { seats }</p>
      { renderTitles() }
      <p>Coat of Arms: { coatOfArms }</p>
      { renderWeapons() }
      { renderWords() }
    </div>
  )
}

// Things to display: name, founded, seats, titles, coatOfArms, ancestralWeapons, words