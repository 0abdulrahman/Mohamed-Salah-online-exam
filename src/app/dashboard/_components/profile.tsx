import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { Clock5, Flag, CircleCheck } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const fullName = session!.user.firstName + ' ' + session!.user.lastName;

  return (
    <>
      <div className='w-full p-5 rounded-lg bg-white flex flex-wrap lg:flex-nowrap items-start h-[250px] gap-5'>
        <div className=' rounded-lg h-full flex items-center justify-center'>
          <img
            src={'https://avatar.iran.liara.run/public/18'}
            alt='users'
            width={230}
            loading='lazy'
          />
        </div>
        <div className='flex flex-col items-start justify-around  w-full mt-3 h-full'>
          {/* Full Name And Paragraph */}
          <div>
            <h2 className='text-primary font-semibold text-3xl capitalize mb-2'>{fullName}</h2>
            <p>Voluptatem aut</p>
          </div>

          <div>
            <Progress value={80} className='bg-gray-100' />

            <div className='grid grid-cols-3 gap-5 mt-3'>
              {/* Quiz Passed */}
              <div className='flex items-center gap-3'>
                <div className='bg-gray-100 p-4 rounded-lg'>
                  <Flag size={30} className='text-primary' />
                </div>
                <div>
                  <h4 className='font-bold text-2xl text-gray-500'>27</h4>
                  <p>Quiz Passed</p>
                </div>
              </div>

              {/* Quiz Passed */}
              <div className='flex items-center gap-3'>
                <div className='bg-gray-100 p-4 rounded-lg'>
                  <Clock5 size={30} className='text-primary' />
                </div>
                <div>
                  <h4 className='font-bold text-2xl text-gray-500'>13 min</h4>
                  <p>Fastest Time</p>
                </div>
              </div>

              {/* Quiz Passed */}
              <div className='flex items-center gap-3'>
                <div className='bg-gray-100 p-4 rounded-lg'>
                  <CircleCheck size={30} className='text-primary' />
                </div>
                <div>
                  <h4 className='font-bold text-2xl text-gray-500'>200</h4>
                  <p> Correct Answers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
