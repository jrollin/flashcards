import Topics from '@/components/Topics';
import { getTopics } from '@/lib/flashcard';

export default async function Page() {
    const topics = await getTopics()
    return (
        <>
            <Topics topics={topics} />
        </>
    );
}
