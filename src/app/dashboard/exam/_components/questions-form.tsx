'use client';
import { getQuestions } from '@/lib/api/question.api';
import { useForm } from 'react-hook-form';

type QuestionDialogProps = {
  questions: Question[];
};

export default function QuestionsForm({ questions }: QuestionDialogProps) {
  const form = useForm();

  return (
    <>
      <div className='flex'>hgh</div>
      <div>
        {questions &&
          questions?.map((question) => (
            <div key={question._id}>
              <h4> {question.question}</h4>
              <ul>
                {question.answers.map((el) => (
                  <li key={el.key}>{el.answer}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </>
  );
}
