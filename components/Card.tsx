
export type CardProps = {
    name: string,
    language: string,
    content: string
}

const Card = ({ name, language, content }: CardProps) => {

    return <div className="bg-white text-black p-10">
        <ul>
            <li>Name: {name}</li>
            <li>Language: {language}</li>
            <li>{content}</li>
        </ul>
    </div>

}

export default Card;
