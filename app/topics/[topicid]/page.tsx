import { getCardsByTopicId, getTopicById } from '@/lib/flashcard';
import Link from 'next/link';



export default async function Page({ params: { topicid } }: { params: { topicid: string } }) {
    const topic = await getTopicById(topicid)
    const cards = await getCardsByTopicId(topicid)
    return (
        <div className="z-10 font-mono text-sm mt-10">
            {topic && <h2 className="text-stone-200 font-bold text-xl mb-5"><Link href={`/topics/${topic}`}>{topic}</Link></h2>}

            {cards.map((card, idx) => (
                <div key={idx} ><Link href={`/topics/${topicid}/${card.data.id}`}>{card.data.title}</Link></div>
            ))}
        </div >
    );
}
