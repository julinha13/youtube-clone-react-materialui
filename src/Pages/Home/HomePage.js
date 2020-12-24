import React from 'react';

import TopBar from '../../TopBar'

function HomePage(props) {
   return (
        <TopBar darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
   );
}
export default HomePage;