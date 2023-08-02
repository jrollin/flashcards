import { getTopics } from '@/lib/flashcard';
import Link from 'next/link';

export default async function Page() {
    const topics = await getTopics()
    return (
        <div className="z-10 font-mono text-sm mt-10">
            {topics.map((topic, idx) => <div key={idx}><Link href={`/topics/${topic}`}>{topic} </Link></div>)}
        </div>
    );
}
