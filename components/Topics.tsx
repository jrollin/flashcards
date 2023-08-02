import Link from "next/link";

const Topics = ({ topics }: { topics: string[] }) => {
    return topics.map((topic, idx) => (
        <div key={idx} className="bg-white text-black p-6 mb-6">
            <Link href={`/topics/${topic}`}>{topic} </Link>
        </div>))

}

export default Topics;
