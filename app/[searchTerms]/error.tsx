"use client";

type Props = {
	error: Error;
	reset: () => void;
};

export default function error({ reset, error }: Props) {
	return (
		<div className="grid items-center">
			<h2 className="text-red font-bold">Something went wrong!</h2>
			<button onClick={() => reset()}>Try Again</button>
		</div>
	);
}
