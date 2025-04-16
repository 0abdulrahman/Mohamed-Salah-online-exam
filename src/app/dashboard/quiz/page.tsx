import { JSON_HEADER } from "@/lib/constants/api.constants";
import { getToken } from "@/utils/getToken";
 


export default async function Quiz() {
    const authToken = await getToken();
  
    const quies = await fetch(`${process.env.API}/exams`, {
      method: 'GET',
      headers: {
        ...JSON_HEADER,
        token: authToken as string,
      },
      cache: 'no-store',
    });
    const payload = await quies.json();
    console.log(payload);
  return (
    <div>
      Quiz
    </div>
  )
}
