import CoreConcept from "./CoreConcept";
import {CORE_CONCEPTS} from "../data";

export default function CoreConcepts() {
	return (
		<section id="core-concepts">
			<h2>Time to get started!</h2>
			<ul>
				{CORE_CONCEPTS.map((conceptItem) =>
					(<CoreConcept key={conceptItem.title} {...conceptItem} />)
				)}

				{/*title={CORE_CONCEPTS[0].title}
				 description={CORE_CONCEPTS[0].description}
				 image={CORE_CONCEPTS[0].image}/>
				 {/!*если props names одинаковы с названиями ключей в импортируемом объекте CORE_CONCEPTS
				 можно использовать spread operator для того, чтобы вытянуть все значения*!/}
				 <CoreConcept {...CORE_CONCEPTS[1]}/>
				 <CoreConcept {...CORE_CONCEPTS[2]}/>
				 <CoreConcept {...CORE_CONCEPTS[3]}/>*/}
			</ul>
		</section>
	)
}