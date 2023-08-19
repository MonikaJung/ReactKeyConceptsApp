import "./ConceptList.css";

import Concept from "./Concept";

import componentsImage from "../../assets/images/components.png";
import stateImage from "../../assets/images/state.png";
import eventsImage from "../../assets/images/events.png";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    alt: "",
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    alt: "",
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    alt: "",
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

export default function ConceptList(props) {
  return (
    <ul className="concept-list" id="concepts">
      <Concept
        imgSrc={concepts[0].image}
        imgAlt={concepts[0].alt}
        tittle={concepts[0].title}
        description={concepts[0].description}
      />
      <Concept
        imgSrc={concepts[1].image}
        imgAlt={concepts[1].alt}
        tittle={concepts[1].title}
        description={concepts[1].description}
      />
      <Concept
        imgSrc={concepts[2].image}
        imgAlt={concepts[2].alt}
        tittle={concepts[2].title}
        description={concepts[2].description}
      />
    </ul>
  );
}
