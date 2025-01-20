import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { EXAMPLES } from "./data.js";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton";
import {Component} from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedBtn) {
    // selectedBtn => "components", "jsx", "props", "state"
    setSelectedTopic(selectedBtn);
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
      <Header/>
      <main>
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}>
              Components
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}>
              JSX
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}>
              Props
            </TabButton>

            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}>
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
