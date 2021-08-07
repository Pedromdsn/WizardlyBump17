import FootBar from "../components/FootBar"
import FreeLancer from "../components/Freelancer"
import HeadBar from "../components/HeadBar"
import MyHome from "../components/Home"
import WhyChose from "../components/WhyChose"

export default function Home() {
	return (
		<div>
			<HeadBar />
			<MyHome />
      <FreeLancer/>
      <WhyChose/>
      <FootBar/>
		</div>
	)
}
