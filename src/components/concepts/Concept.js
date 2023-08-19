import "./Concept.css";

export default function Concept(props) {
  return (
    <li className="concept">
      <img src={props.imgSrc} alt={props.imgAlt} />
      <h2>{props.tittle}</h2>
      <p>{props.description}</p>
    </li>
  );
}
