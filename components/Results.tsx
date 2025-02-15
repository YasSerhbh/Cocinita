import ExpandableCardDemo from "./expandable-card-demo-standard"


interface ResultsProps {
  prompt: any;
}

const Results = ({ prompt }: ResultsProps) => {

    const cleanedPrompt = prompt.replace('```json', '').replace('```', '');



  return (
    <section className="container pb-20" id="results">
        <h2 className="font-bold text-2xl">جربي هذه الوصفات</h2>
        <div>
            <ExpandableCardDemo prompt={JSON.parse(cleanedPrompt)} />
        </div>
    </section>
  )
}

export default Results