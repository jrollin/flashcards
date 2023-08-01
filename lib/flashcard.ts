import path from 'path';
import fs from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';

export async function getCardContent(name: string) {
    const dataDirectory = path.join(process.cwd(), 'data');
    const dirCont = fs.readdirSync(dataDirectory);
    const files = dirCont.filter((elm) => elm.match(/.*\.(md?)/ig));

    const filename = `${name}.md`
    if (!files.includes(filename)) {
        throw Error("Not found topic")
    }
    const content = fs.readFileSync(dataDirectory + "/" + filename, 'utf8');
    const md: GrayMatterFile<string> = matter(content);
    return { content: md.content, language: md.data.content, name: md.data.name };
}
