import Card from '@/components/Card';
import { getCardById, getTopicById } from '@/lib/flashcard';
import Link from 'next/link';


export default async function Page({ params: { topicid, cardid } }: { params: { topicid: string, cardid: string } }) {
    const topic = await getTopicById(topicid)
    const card = await getCardById(cardid)
    return (
        <>
            {topic && <h2 className="text-stone-200 font-bold text-xl mb-5"><Link href="/topics">Sujets &gt; </Link><Link href={`/topics/${topic.id}`}>{topic.title}</Link></h2>}
            <Card {...card} />
        </>
    );
}
