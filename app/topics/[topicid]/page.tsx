import Card from '@/components/Card';
import { getCardContent } from '@/lib/flashcard';
import { getTopicById, getTopics } from '@/lib/topics';
import Link from 'next/link';


// generated at build time
export async function generateStaticParams() {
    return getTopics()
}

export default async function Page({ params: { topicid } }: { params: { topicid: string } }) {
    const data = await getCardContent(topicid)
    const topic = await getTopicById(topicid)
    return (
        <div className="z-10 font-mono text-sm mt-10">
            {topic && <h2 className="text-stone-200 font-bold text-xl mb-5"><Link href={`/topics/${topic.topicid}`}>{topic.title}</Link></h2>}
            <Card {...data} />
        </div >
    );
}
