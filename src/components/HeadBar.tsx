import { useState } from "react"
import { burguer, homePage, minecraft } from "../icons/Icons"
import Link from "next/link"

export default function HeadBar() {
	const [menu, setMenu] = useState(!false)

	return (

		<div
			className={
				"flex justify-evenly items-center font-semibold bg-blue-400 text-white py-7 md:justify-around px-10"
			}>
			<div className="text-3xl font-serif">WizardlyBump17</div>
			<div
				className={`transition-basico flex gap-20 text-xl ${
					menu
						? "md:h-0 overflow-y-hidden md:absolute"
						: "md:flex-col md:absolute md:top-20 md:bg-blue-400 md:text-white md:w-screen md:items-center md:gap-5 md:h-40 md:pt-5"
				}`}>
				<HeadObj text="Home" />
				<HeadObj text="Plugins" />
				<HeadObj text="Contacto" />
			</div>
			<div className="hidden cursor-pointer md:flex" onClick={(e) => setMenu(!menu)}>
				{burguer}
			</div>
		</div>
	)
}

type HeadObjType = {
	ico?: any
	link?: string
	text: string
}

function HeadObj(prop: HeadObjType) {
	return (
		<Link href={prop.ico || "/"} passHref>
			<div className="cursor-pointer">
				{prop.ico} <span>{prop.text}</span>
			</div>
		</Link>
	)
}
