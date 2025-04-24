'use server';

import { getToken } from '@/utils/getToken';

export default async function historyActions() {
  const JWT = await getToken();
  const res = await fetch(`${process.env.API}/questions/history`, {
    headers: {
      token: JWT || '',
    },
  });
  const payload = await res.json();
}
