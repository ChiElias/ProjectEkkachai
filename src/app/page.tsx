import Link from 'next/link';

export default function Home() {
	return (
		<div className="h-screen flex flex-col justify-center items-center">
			<h1 className="text-7xl break-words">	
			BestBooks
				<span className="text-4xl text-slate-400 ml-4"></span>
			</h1>

			<h3 className="my-10 text-2xl font-bold">What Book Should You Read Next?</h3>

			<Link href="/sign-up">
				<button className="bg-green-600 px-20 py-5 rounded-full font-bold text-2xl cursor-pointer hover:opacity-80">
					Let me in 
				</button>
			</Link>
		</div>
	);
}
