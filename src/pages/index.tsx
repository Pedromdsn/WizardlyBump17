import FootBar from "../components/FootBar"
import FreeLancer from "../components/Freelancer"
import HeadBar from "../components/HeadBar"
import MyHome from "../components/Home"

export default function Home() {
	return (
		<div>
			<HeadBar />
			<MyHome />
      <FreeLancer/>
      <FootBar/>
		</div>
	)
}
