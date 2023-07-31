
type CardProps = {
    name: string,
    language: string
}

const Card = ({ name, language }: CardProps) => {

    return <div class="bg-white text-black p-10">
        <ul>
            <li>Name: {name}</li>
            <li>Language: {language}</li>
        </ul>
    </div>

}

export default Card;
