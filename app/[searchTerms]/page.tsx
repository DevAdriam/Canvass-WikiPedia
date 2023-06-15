import getWikiData from "@/lib/getWikiData";
import React, { Suspense } from "react";
import Items from "./Components/items";
import Loading from "./loading";

type Props = {
	params: {
		searchTerms: string;
	};
};

export async function generateMetadata({ params: { searchTerms } }: Props) {
	const wikiData: Promise<SearchResult> = getWikiData(searchTerms);
	const data = await wikiData;

	const displayTerm = searchTerms.replaceAll("%20", " ");

	if (!data?.query?.pages) {
		return {
			title: `${displayTerm} is not Found`,
		};
	}

	return {
		title: displayTerm,
		description: `Search result for ${displayTerm}`,
	};
}

export default async function SearchResults({ params: { searchTerms } }: Props) {
	const wikiData: Promise<SearchResult> = getWikiData(searchTerms);
	const data = await wikiData;

	const results: Result[] | undefined = data?.query?.pages;

	const pageContent = (
		<Suspense fallback={<Loading />}>
			<main className="bg-purple-300/80 rounded-lg h-[500px] md:w-[50%] mt-3 mb-14 py-2 px-5  w-full overflow-y-scroll">
				{results ? (
					Object.values(results).map((result) => {
						return <Items key={result.pageid} result={result} />;
					})
				) : (
					<h2 className="text-purple-500 font-bold text-center">{`${searchTerms} is not found`}</h2>
				)}
			</main>
		</Suspense>
	);
	return pageContent;
}
