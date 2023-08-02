import Card, { CardProps } from "./Card";


type CardsProps = {
    cards: any
}

const Cards = ({ cards }: CardsProps) => {

    return <div>
        <ul>
            {cards.map((card: CardProps, idx: number) => (
                <li key={idx}>< Card key={idx} title={card.title} content={card.content} /></li>
            ))}
        </ul>
    </div>

}

export default Cards;
