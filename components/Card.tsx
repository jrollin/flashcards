
export type CardProps = {
    title: string,
    content: string
}

const Card = ({ title, content }: CardProps) => {

    return <div className="bg-white text-black p-10 mb-6">
        <h1 className="text-xl">{title}</h1>
        <p className="text-sm">{content}</p>
    </div>

}

export default Card;
