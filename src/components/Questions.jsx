import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import TimerPlayerName from './TimerPlayerName';
import QandA from './QandA';
import Button from './Button';

const Questions = (props) => {
    const { questions } = props;
    return (
        <div>
            <Title />
            <TimerPlayerName />

            {questions.map((question) => {
                return (
                    <QandA key={question.question} question={question} />
                );
            })}
            <Link to="/"><Button text="Home" /></Link>

        </div>
    );
};

export default Questions;
