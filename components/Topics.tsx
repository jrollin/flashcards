import TopicModel from "@/model/Topic";
import Link from "next/link";

const Topics = ({ topics }: { topics: TopicModel[] }) => {
    return topics.map((topic, idx) => (
        <div key={idx} className="bg-white text-black p-6 mb-6">
            <Link href={`/topics/${topic.id}`}>{topic.title} </Link>
        </div>))

}

export default Topics;
