import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-stone-200 font-bold text-2xl">
                Fiches mémos
            </h1>

            <div className="z-10 font-mono text-sm ">
                <Link href="/topics/1" >Voir les cartes</Link>
            </div>
        </main>
    )
}


