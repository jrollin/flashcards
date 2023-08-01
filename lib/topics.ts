
export async function getTopics() {
    return [{ topicid: 'cs', title: 'Computer Science' }, { topicid: 'network', title: 'Network' }]
}

export async function getTopicById(id: string) {
    const topics = await getTopics();
    const topic = topics.find((topic) => topic.topicid == id);
    return topic

}
