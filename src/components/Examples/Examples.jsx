import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "./TabButton";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <menu>
        {Object.keys(EXAMPLES).map((item) => (
          <TabButton
            key={item}
            isSelected={selectedTopic === item}
            onClick={() => handleSelect(item)}
          >
            {item}
          </TabButton>
        ))}
      </menu>
      {tabContent}
    </>
  );
}
