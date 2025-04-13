import { authOptions } from "@/auth"
import { getServerSession } from "next-auth"
import Logout from "../auth/_components/logout";


export default  async function Dashboard() {
    const session = await getServerSession(authOptions)
    // console.log(session);
    
  return (
    <div>
      Dashboard - {session?.user.firstName}


      <div>
        <Logout />
      </div>
    </div>
  )
}
