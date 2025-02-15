import { DownloadIcon } from "lucide-react"
import Image from "next/image"
import InstallButton from "./InstallButton"

const Nav = () => {
  return (
    <nav className="bg-[#FFF5E1] shadow-2xl shadow-[#D1B49D] md:container">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="w-40 sm:w-48 md:w-56 lg:w-64">
          <Image
            src="/images/cocinita.png"
            alt="Cocinita Logo"
            width={1500}
            height={340}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="max-md:hidden">
        {/* <Button 
        borderRadius="1.75rem" 
        className="text-c-primary border border-c-primary font-main bg-transparent text-lg font-bold
        "
        duration={4000}
        >اعطنا رأيك</Button> */}
        </div>
        <InstallButton />
        {/* <span className="text-c-primary font-main font-bold ">حمل التطبيق <DownloadIcon className="inline" /></span> */}
      </div>
    </nav>
  )
}

export default Nav