import Header from "./components/Header/Header.jsx";
import Section from "./components/Section/Section.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Section title="Core Concepts" id="core-concepts">
          <CoreConcepts />
        </Section>
        <Section title="Examples" id="examples">
          <Examples />
        </Section>
      </main>
    </div>
  );
}

export default App;
