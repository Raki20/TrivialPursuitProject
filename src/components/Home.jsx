import React from 'react';
import Title from './Title';
import Settings from './Settings';
import Button from './Button';


const Home = () => {
    return (
        <div>
            <Title />
            <Settings />
            <Button startQuestions={() => this.loadQuestions()}/>
        </div>
    );
};

export default Home;
