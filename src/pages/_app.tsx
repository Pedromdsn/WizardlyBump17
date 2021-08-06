import "tailwindcss/tailwind.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>WizardlyBump17</title>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
				<meta name="description" content="WizardlyBump17 Portefólio" />
				<meta name="author" content="Coco Blanco" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
