import Card from '@/components/Card';
import { getCardById, getTopicById } from '@/lib/flashcard';
import Link from 'next/link';


export default async function Page({ params: { topicid, cardid } }: { params: { topicid: string, cardid: string } }) {
    const topic = await getTopicById(topicid)
    const card = await getCardById(cardid)
    return (
        <>
            {topic && <h2 className="text-stone-200 font-bold text-xl mb-5"><Link href="/topics">Topic: </Link><Link href={`/topics/${topic}`}>{topic}</Link></h2>}

            <Card title={card.data.title} description={card.data.description} {...card} />
        </>
    );
}
