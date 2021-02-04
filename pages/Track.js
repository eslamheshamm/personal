export default function Track(track) {
	return (
		<div className="flex flex-row items-baseline border-b border-gray-100 dark:border-gray-800 max-w-3xl w-full mt-8">
			<p className="text-sm font-semibold text-white dark:text-gray-600 border  p-1 px-2">
				{track.ranking}
			</p>
			<div className="flex flex-col items-start font-mono px-4">
				<a
					className="font-medium text-gray-800 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"
					href={track.songUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					{track.title}
				</a>
				<p
					className=" text-white mb-4 mt-1 ml-2 truncate w-60 sm:w-96 md:w-full"
					color="gray.500"
				>
					{track.artist}
				</p>
			</div>
		</div>
	);
}
