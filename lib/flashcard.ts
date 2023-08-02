import path from 'path';
import fs from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';

let cardsCache: Map<any, any> | undefined = undefined


export async function getTopics() {
    const cards = await getAllCardsWithContent()
    const topics = Array.from(cards.values())
        .map(card => card.data.topic)
    return Array.from(new Set(topics))

}

export async function getTopicById(id: string) {
    const topics = await getTopics();
    const topic = topics.find((topic) => topic == id);
    if (topic === undefined) {
        throw Error("Topic not found")
    }
    return topic

}
export async function getCardsByTopicId(id: string) {
    const cards = await getAllCardsWithContent()
    const topicCards = Array.from(cards.values())
        .filter(card => card.data.topic == id)
    return topicCards
}

export async function getCardById(id: string) {
    const cards = await getAllCardsWithContent()
    if (!cards.has(id)) {
        throw Error("Card not found ")
    }
    return cards.get(id)
}

export async function getAllCardsWithContent() {
    // cached in global var ?
    if (cardsCache === undefined) {
        console.log('Cache miss !')
        const cards = new Map();
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
                    cards.set(md.data.id, md)
                })
            }
        }
        cardsCache = cards
    }
    return cardsCache;
}
