import keyConceptsImage from "./assets/images/key-concepts.png";

import PageHeader from "./components/PageHeader";
import ConceptList from "./components/concepts/ConceptList";

const headerContent = {
  imgSrc: keyConceptsImage,
  imgAlt: "Medal badge with a star",
  tittle: "Key React Concepts",
  description: "Selected key React concepts you should know about",
};

function ConceptsMainPage() {
  return (
    <div>
      <PageHeader
        imgSrc={headerContent.imgSrc}
        imgAlt={headerContent.imgAlt}
        tittle={headerContent.tittle}
        description={headerContent.description}
      />
      <ConceptList />
    </div>
  );
}

export default ConceptsMainPage;
