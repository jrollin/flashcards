import CardModel from "@/model/Card";
import Link from "next/link";



const Cards = ({ cards }: { cards: CardModel[] }) => {
    return <>
        {cards.map((card, idx: number) => (
            <div key={idx} className="bg-white text-black p-6 mb-6">
                <h2 className="text-xl"><Link href={`/topics/${card.topic}/${card.id}`} >{card.title}</Link></h2>
                <p >{card.description}</p>
            </div>
        ))}
    </>
}

export default Cards;
