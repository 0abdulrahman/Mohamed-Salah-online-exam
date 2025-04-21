import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import QuestionsForm from './questions-form';
import { getQuestion, getQuestions } from '@/lib/api/question.api';
import { useQuery } from '@tanstack/react-query';

type QuestionDialogProps = {
  searchParams: any;
};

export default async function QuestionDialog({ searchParams }: QuestionDialogProps) {
  const payload = await getQuestion(searchParams as string);
  console.log('searchParams payload', searchParams);
  
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='h-8 px-10 rounded-2xl' size={'sm'}>
            Start
          </Button>
        </DialogTrigger>
        <DialogContent>
          {/* header */}
          <DialogHeader>
            <DialogTitle>test</DialogTitle>
            {/* Description */}
            <DialogDescription className='justify-between flex items-center'>
              test
            </DialogDescription>
          </DialogHeader>
          {/* content */}
          <QuestionsForm questions={payload?.questions} />
        </DialogContent>
      </Dialog>
    </>
  );
}
