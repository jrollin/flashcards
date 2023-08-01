import Link from "next/link";

export default function Home() {
    return (
        <div className="z-10 font-mono text-sm ">
            <p className="mb-6">Pour réviser...</p>
            <Link href="/topics" >Voir les cartes</Link>
        </div>
    )
}


