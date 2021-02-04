import useSWR from "swr";
import fetcher from "./api/fetcher";
import Track from "./Track";
import Layout from "../components/Layout";
export default function TopTracks() {
	const { data } = useSWR("/api/top-tracks", fetcher);

	if (!data) {
		return null;
	}
	return data.tracks.map((track, index) => (
		<div className="bg-gradient-to-r from-green-400 to-green-800">
			<Layout>
				<Track ranking={index + 1} key={track.songUrl} {...track} />
			</Layout>
		</div>
	));
}
