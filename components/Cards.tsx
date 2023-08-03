import CardModel from "@/model/Card";
import Link from "next/link";



const Cards = ({ cards }: { cards: CardModel[] }) => {
    return <div className="md:grid md:grid-cols-4 md:gap-4">
        {cards.map((card, idx: number) => (
            <div key={idx} className="bg-white text-black p-6 mb-6">
                <h2 className="text-xl"><Link href={`/topics/${card.topic}/${card.id}`} >{card.title}</Link></h2>
                <p >{card.description}</p>
            </div>
        ))}
    </div>
}

export default Cards;
