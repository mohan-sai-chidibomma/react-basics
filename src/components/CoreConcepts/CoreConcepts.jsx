import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <ul>
      {CORE_CONCEPTS.map((concept) => (
        <CoreConcept key={concept.title} {...concept} />
      ))}
    </ul>
  );
}
