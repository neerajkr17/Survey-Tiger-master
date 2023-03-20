import React from 'react';
import pawn from '../static/surveytiger.png';

class Header extends React.Component{

    render(){
        return (
                    <div className="heading">
                        <img alt="surveytiger" src={pawn} />
                    </div>
        );
    }
}
export default Header;