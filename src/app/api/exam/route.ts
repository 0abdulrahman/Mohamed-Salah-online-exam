import { NextResponse } from 'next/server';
import { getToken } from '@/utils/getToken';

export async function GET() {
  try {
    const token = await getToken();
    const response = await fetch(`${process.env.API}/exams`, {
      method: 'GET',
      headers: {
        token: token || '',
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
