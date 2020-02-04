import React, { useState } from 'react';
import '../App.css';

import questions, { LETTERS } from '../constants/questions';

const total = questions.length;
const { A, B, C, D, E } = LETTERS;

const countAlternative = alternative => (acc, curr) => acc + (curr === alternative);

const Totals = ({ answers }) => (
  <>
    <div>Total:</div>
    <br />
    <div>{`A (${answers.reduce(countAlternative(A), 0)}): Palavras de afirmação`}</div>
    <div>{`B (${answers.reduce(countAlternative(B), 0)}): Tempo de qualidade`}</div>
    <div>{`C (${answers.reduce(countAlternative(C), 0)}): Receber presentes`}</div>
    <div>{`D (${answers.reduce(countAlternative(D), 0)}): Atos de serviço`}</div>
    <div>{`E (${answers.reduce(countAlternative(E), 0)}): Toque físico`}</div>
  </>
);

const Question = ({ question, onClick, onBack }) => (
  <>
    <button onClick={() => onClick(question[0].alternative)}>{question[0].body}</button>
    <button onClick={() => onClick(question[1].alternative)}>{question[1].body}</button>
    <button onClick={onBack}>Voltar</button>
  </>
);

const Gary = () => {
  const [answers, setAnswers] = useState([]);
  const [showResult, toggleResult] = useState(false);
  const idx = answers.length;
  const end = idx === total;
  return (
    <div className="App">
      <header className="App-header">
        {end || showResult ? (
          <Totals answers={answers} />
        ) : (
          <>
            <div>{`Questão ${idx + 1} de ${total}`}</div>
            <Question
              question={questions[idx]}
              onClick={alt => {
                setAnswers(answers.concat([alt]));
              }}
              onBack={() => {
                setAnswers(answers.slice(0, answers.length - 1));
              }}
            />
          </>
        )}
        <br />
        <br />
        {end ? (
          <button onClick={() => setAnswers([])}>Voltar para início</button>
        ) : (
          <button onClick={() => toggleResult(!showResult)}>
            {showResult ? 'Voltar para questionário' : 'Ver resultados'}
          </button>
        )}
      </header>
    </div>
  );
};

export default Gary;
