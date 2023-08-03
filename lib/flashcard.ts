import path from 'path';
import fs from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';
import CardModel from '@/model/Card';
import TopicModel from '@/model/Topic';

let cardsCache: Map<string, CardModel> | undefined = undefined;


export async function getTopics(): Promise<TopicModel[]> {
    const cards = await getAllCardsWithContent()
    const topics = Array.from(cards.values())
        .map(card => card.topic)
    return Array.from(new Set(topics)).map((topic) => { return { id: topic, title: topic } })

}

export async function getTopicById(id: string): Promise<TopicModel> {
    const topics = await getTopics();
    const topic = topics.find((topic) => topic.id == id);
    if (topic === undefined) {
        throw Error("Topic not found")
    }
    return topic

}
export async function getCardsByTopicId(id: string): Promise<CardModel[]> {
    const cards = await getAllCardsWithContent()
    const topicCards = Array.from(cards.values())
        .filter(card => card.topic == id)
    return topicCards
}

export async function getCardById(id: string): Promise<CardModel> {
    const cards = await getAllCardsWithContent()
    if (!cards.has(id)) {
        throw Error("Card not found ")
    }
    return cards.get(id)!
}

export async function getAllCardsWithContent(): Promise<Map<string, CardModel>> {
    // cached in global var ?
    if (cardsCache === undefined) {
        console.log('Cache miss !')
        const cards: Map<string, CardModel> = new Map();
        // finds directories in data dir
        const dataPath = path.join(process.cwd(), 'data');
        const files = fs.readdirSync(dataPath, { withFileTypes: true });
        for (const file of files) {
            // get all md in dir
            if (file.isDirectory()) {
                const dirname = dataPath + '/' + file.name;
                let dirCont = fs.readdirSync(dirname, 'utf8');
                let files = dirCont.filter((elm) => elm.match(/.*\.(md?)/ig));
                files.map((file) => {
                    const filePath = dirname + "/" + file;
                    const content = fs.readFileSync(filePath, 'utf8');
                    // convert fronntmatter format 
                    const md: GrayMatterFile<string> = matter(content);
                    // store
                    const card: CardModel = {
                        id: md.data.id,
                        title: md.data.title,
                        description: md.data.description,
                        topic: md.data.topic,
                        content: md.content,
                    }
                    cards.set(md.data.id, card)
                })
            }
        }
        cardsCache = cards
    }
    return cardsCache;
}
