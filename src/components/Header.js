import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const Header = ({title} ) => {
  const onClick = () =>{
    console.log('Clicked');
  }
  return (
    <header className ='header'>
         <h1>{ title }</h1>
         <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
