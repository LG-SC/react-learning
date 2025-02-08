import TabButton from "./TabButton";
import Section from "./Section";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";

function Examples() {
    const [topicContent, setTopicContent] = useState();
    
    const selectHandler = (sender) => {
        console.log(sender.id);
        setTopicContent(sender.id);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (topicContent) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[topicContent].title}</h3>
                <p>{EXAMPLES[topicContent].description}</p>
                <pre>
                    <code>{EXAMPLES[topicContent].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs 
                buttons={
                    <>
                        <TabButton
                            id="components"
                            activeId={topicContent}
                            onSelect={selectHandler}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            id="jsx"
                            activeId={topicContent}
                            onSelect={selectHandler}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            id="props"
                            activeId={topicContent}
                            onSelect={selectHandler}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            id="state"
                            activeId={topicContent}
                            onSelect={selectHandler}
                        >
                            State
                        </TabButton>
                    </>
                }>
                {tabContent}
            </Tabs>


            <menu>
                {/* {EXAMPLES.map((exampleItem) => (
                <TabButton
                    key={exampleItem.id}
                    id={exampleItem.id}
                    isIdSelected={topicContent}
                    onSelect={selectHandler}
                >
                    {exampleItem.title}
                </TabButton>
                ))} */}

                
            </menu>
        </Section>
    )
}
export default Examples;