import Image from "next/image";
import { IoMenu } from "react-icons/io5";

export default function Navbar() { 
  return ( 
    <nav className="flex items-center justify-between bg-background p-2 border-b border-gray-200 shadow-sm">

        <div arial-label="logo and site name" className="flex items-center gap-2">
          
          <Image src="/site/Logo.png" alt="GĐPT Vạn Hạnh Logo" width={45} height={45} />
          
          <h1 className="text-secondary text-brand-title font-bold">GĐPT Vạn Hạnh</h1>
          
        </div>

      <IoMenu size={35} color="#192B45"/>
    </nav>
  )
}