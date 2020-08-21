import React from 'react';
import { AnswerObject } from '../App';
import { ButtonWrapper, Wrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callBack,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <Wrapper>
    <p className='number'>
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          key={answer}
        >
          <button disabled={!!userAnswer} value={answer} onClick={callBack}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
