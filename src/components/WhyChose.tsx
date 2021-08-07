import { CLOCK, GEAR, MEDAL, SUPPORT } from "../icons/Icons"

export default function WhyChose() {
	return (
		<div className="flex flex-col text-center justify-center items-center pb-80 md:pb-40">
			<h1 className="text-5xl text-gray-700 mb-20 font-bold">Why choose my services?</h1>
			<div className="flex flex-wrap gap-20 justify-center">
				<Chose icon={CLOCK} texto="Performance" />
				<Chose icon={MEDAL} texto="High quality" />
				<Chose icon={GEAR} texto="Configuration" />
				<Chose icon={SUPPORT} texto="Support" />
			</div>
		</div>
	)
}

type ChoseType = {
	icon: any
	texto: string
}

function Chose(props: ChoseType) {
	return (
		<div className="flex flex-col justify-center items-center px-6 py-14 bg-blue-400 rounded-2xl text-white text-2xl w-52 hover:scale-110 transition-transform duration-200 hover:brightness-105">
			<div className="mb-5">{props.icon}</div>
			<h1>{props.texto}</h1>
		</div>
	)
}
