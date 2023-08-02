import Link from "next/link";


export type CardsProp = [{ data: { id: string, title: string, topic: string, description: string } }]

const Cards = ({ cards }: { cards: CardsProp }) => {
    return <>
        {cards.map((card, idx: number) => (
            <div key={idx} className="bg-white text-black p-6 mb-6">
                <h2 className="text-xl"><Link href={`/topics/${card.data.topic}/${card.data.id}`} >{card.data.title}</Link></h2>
                <p >{card.data.description} </p>
            </div>
        ))}
    </>
}

export default Cards;
