import Head from "next/head";
import Link from "next/link";
export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>Eslam Hesham</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
				<h1 className="text-2xl font-bold">
					<Link href="/top-playes">
						<a href="/top-playes">Click here To see my plays on spotify!</a>
					</Link>
				</h1>
				<h1 className="text-2xl mt-2 text-red-600 font-bold">
					<Link href="/blog">
						<a href="/blog">Click here To see my blog!</a>
					</Link>
				</h1>
			</main>
		</div>
	);
}
