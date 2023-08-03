import Topics from '@/components/Topics';
import { getTopics } from '@/lib/flashcard';

export default async function Page() {
    const topics = await getTopics()
    return (
        <>
            <h2 className="text-stone-200 font-bold text-xl mb-5">Les sujets</h2>
            <Topics topics={topics} />
        </>
    );
}
