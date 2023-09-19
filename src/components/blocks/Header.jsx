import React from 'react';
import '../../assets/scss/components/blocks/_header.scss';

class Header extends React.Component {
    constructor () {
        super();
    }

    render () {

        return (
            <>
                <header className='header'>
                    Header block
                </header>
            </>
        );
    }
}

export default Header;