"use client"

import Cards from '@/components/Cards';
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url: String) => fetch(url).then((res) => res.json());

export default function Page({ params }: { params: { topicid: number } }) {
    //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
    const { data, error } = useSWR('/api/cards', fetcher);

    //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div>Loading...</div>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-stone-200 font-bold text-2xl ">
                Fiches mémos
            </h1>

            <div className="z-10 font-mono text-sm mt-10">
                <Cards cards={data} />
            </div>
        </main>
    );
}
