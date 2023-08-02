import Topics from "@/components/Topics"
import { getTopics } from "@/lib/flashcard"

export default async function Home() {
    const topics = await getTopics()
    return (
        <div >
            <Topics topics={topics} />
        </div>
    )
}


