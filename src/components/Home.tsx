import { ARROW } from "../icons/HeadBar"

export default function Home() {
	return (
		<>
			<div className={`flex text-center justify-center items-center flex-col py-72 md:py-52`}>
				<div className="text-7xl text-gray-700 font-extrabold mb-5 md:text-4xl">WizardlyBump17</div>
				<div className="text-3xl text-gray-500">Spigot Plugins Developer</div>
			</div>
			<div className="flex justify-center animate-bounce cursor-pointer">{ARROW}</div>
		</>
	)
}
