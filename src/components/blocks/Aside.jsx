import React from 'react';
import '../../assets/scss/components/blocks/_aside.scss';

class Aside extends React.Component {
    constructor () {
        super();
    }

    render () {

        return (
            <>
                <aside className='aside'>
                    Aside block
                </aside>
            </>
        );
    }
}

export default Aside;