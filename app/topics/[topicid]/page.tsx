import Cards, { CardsProp } from '@/components/Cards';
import { getCardsByTopicId, getTopicById } from '@/lib/flashcard';
import Link from 'next/link';



export default async function Page({ params: { topicid } }: { params: { topicid: string } }) {
    const topic = await getTopicById(topicid)
    const cards = await getCardsByTopicId(topicid) as CardsProp
    return (
        <>
            {topic && <h2 className="text-stone-200 font-bold text-xl mb-5"><Link href="/topics">Topic: </Link><Link href={`/topics/${topic}`}>{topic}</Link></h2>}

            <Cards cards={cards} />
        </>
    );
}
