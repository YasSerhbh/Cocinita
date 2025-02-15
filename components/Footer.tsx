// import { generatePrompt } from "@/lib/serverFunctions";

const Footer = async () => {

    // const prompt = await generatePrompt();

    // console.log(prompt)

  return (
    <footer dir="rtl" className="bg-[#D1B49D] font-main">
        <p className="text-center py-4 text-sm text-black font-bold">
            كوسينيتا {new Date().getFullYear()} © جميع الحقوق محفوظة
        </p>

        {/* <p className="py-4 px-5 font-bold">
            {prompt}
        </p> */}
    </footer>
  )
}

export default Footer