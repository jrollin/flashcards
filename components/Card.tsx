import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import sectionize from 'remark-sectionize'
import CardModel from '@/model/Card'


const Card = async ({ title, content, description }: CardModel) => {

    const data = await unified()
        .use(remarkParse)
        .use(sectionize)
        .use(remarkHtml, { sanitize: false })
        .process(content)
    const html = String(data);

    return <div className="bg-white text-black p-10 mb-6">
        <h1 className="text-3xl mb-6">{title}</h1>
        <div className="">{description}</div>
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </div>

}

export default Card;
