import "./PageHeader.css";

export default function ConceptsHeader(props) {
    return (
        <header className="page-header">
            <img src={props.imgSrc} alt={props.imgAlt} />
            <h1>{props.tittle}</h1>
            <p>{props.description}</p>
        </header>
    );
};