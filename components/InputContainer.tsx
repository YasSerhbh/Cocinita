"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { generatePrompt } from "@/lib/serverFunctions";



const InputContainer = ({getResult}: {getResult: any}) => {

    const [ingredients, setIngredients] = useState("");
    const [loading, setLoading] = useState(false)

  return (
    <form onSubmit={async (e) => {  
            e.preventDefault();
            setLoading(true);
            const result = await generatePrompt(ingredients);
            getResult(result);
            setLoading(false);
        
    }} className="mt-12 flex flex-col gap-6 items-start">
        <input
        className="bg-c-back2 text-zinc-600 ring-1 ring-zinc-400 focus:ring-2
         focus:ring-c-primary outline-none duration-300 font-main
          rounded-full pr-4 pl-10 py-3 shadow-md focus:shadow-lg focus:shadow-c-primary
          md:min-w-[550px] max-md:min-w-[300px]
          "
        placeholder="اكتب المكونات هنا..."
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        name="text"
        type="text"
        />
        <Button type="submit"
        disabled={loading}
        className="bg-c-primary hover:bg-c-primary/90 font-bold">{loading ? "جاري البحث... 🍲" : "ابحثي عن وصفة 🍲"}</Button>
    </form>
  )
}

export default InputContainer