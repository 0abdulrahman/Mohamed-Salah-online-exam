'use client';

import { useQuery } from '@tanstack/react-query';
import QuestionDialog from './questions-dialog';
import { BookCheck } from 'lucide-react';

async function getExamsClient() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/exam`);
  const payload: APIResponse<PaginatedResponse<{ exams: Exam[] }>> = await res.json();
  if ('code' in payload) {
    throw new Error(payload.message);
  }

  return payload;
}

export default function ExamsList() {
  const { data, isLoading } = useQuery({
    queryKey: ['exams'],
    queryFn: getExamsClient,
  });

  return (
    <div>
      <h2 className='text-2xl font-bold mb-2'>Exam</h2>
      <div className='flex flex-col gap-4 w-full'>
        {data?.exams.map((item) => (
          <div
            key={item._id}
            className='p-4 flex bg-white justify-between rounded-lg shadow-sm items-center w-full'
          >
            <div className='flex items-center gap-4'>
              <BookCheck size={32} className='text-gray-600' />
              <div>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-gray-500 mt-1'>{item.numberOfQuestions} Question</p>
              </div>
            </div>
            <div className='text-center space-y-2'>
              <p className='text-sm text-gray-800 '>{item.duration} Minutes</p>
              <QuestionDialog exam={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
