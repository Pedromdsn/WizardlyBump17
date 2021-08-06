import Image from "next/image"
import candor from "../../public/candor.jpeg"
import dev from "../../public/dev.jpg"
import devnics from "../../public/devnics.png"

export default function FreeLancer() {
	return (
		<div className="pt-60 pb-96 md:pb-40">
			<h1 className="flex justify-center text-6xl font-extrabold mb-40 text-gray-700 md:text-4xl md:mb-10">I'm Freelancer at:</h1>
			<div className="flex flex-wrap gap-20 justify-evenly items-start">
				<Equips imagem={candor} text="Candor Services" />
				<Equips imagem={dev} text="DevRoom" />
				<Equips imagem={devnics} text="Devnics Services" />
			</div>
		</div>
	)
}

type EquipsProps = {
	imagem: any
	text: string
}

function Equips(props: EquipsProps) {
	return (
		<div className="group flex flex-col w-80 md:w-60 items-center justify-center text-center font-bold">
			<div className="w-2/3 z-10">
				<Image src={props.imagem} />
			</div>
			<h1 className="transition-all duration-200 -mt-20 group-hover:mt-0 group-hover:-mb-20 opacity-0 group-hover:opacity-100 text-3xl text-gray-600">
				{props.text}
			</h1>
		</div>
	)
}
