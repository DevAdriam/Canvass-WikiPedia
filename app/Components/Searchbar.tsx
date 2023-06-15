"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Searchbar() {
	const [search, setsearch] = useState("");
	const router = useRouter();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setsearch("");
		router.push(`/${search}/`);
	};
	return (
		<form className="relative " onSubmit={handleSubmit}>
			<input
				type="text"
				value={search}
				onChange={(e) => setsearch(e.target.value)}
				className="lg:min-w-[500px]  min-w-[300px] py-[10px] px-[20px] outline-none rounded-full bg-purple-300 border-white"
			/>
			<button
				type="submit"
				className="w-[100px] py-[10px] absolute top-0 right-0 rounded-full bg-purple-200 hover:bg-purple-400 transition-colors duration-300"
			>
				Search
			</button>
		</form>
	);
}
