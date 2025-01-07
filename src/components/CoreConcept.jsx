import "./CoreConcept.css";

/* это классическая версия компонента, который принимает props */
/*function CoreConcept(props) {
 return (
 <li>
 <img src={props.image} alt={props.title}/>
 <h3>{props.title}</h3>
 <p>{props.description}</p>
 </li>
 );
 }*/

/* это версия компонента, который в качестве аргумента принимает деструктуризацию объекта, чтобы использовать названия ключей напрямую*/
export default function CoreConcept({image, title, description}) {
	return (
		<li>
			<img src={image} alt={title}/>
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}