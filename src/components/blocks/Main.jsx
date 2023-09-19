import React from 'react';
import '../../assets/scss/components/blocks/_main.scss';

//Detail Components
import SmileyCard from '../details/SmileyCard';

class Main extends React.Component {
    constructor () {
        super();
    }

    render () {

        return (
            <>
                <main className='main'>
                        <SmileyCard></SmileyCard>
                </main>
            </>
        );
    }
}

export default Main;