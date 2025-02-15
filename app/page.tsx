"use client"

import Hero from "@/components/Hero";
import Results from "@/components/Results";
// import { generatePrompt } from "@/lib/serverFunctions";
import { useState } from "react";

export default function Home() {

    const [result, setResult] = useState(null); 

  return (
    <div dir="rtl">
        <Hero getResult={setResult} />
        {result && <Results prompt={result} />}
    </div>
  );
}
