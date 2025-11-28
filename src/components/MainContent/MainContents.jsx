import MainContent from "./MainContent.jsx";
import {myData} from "../../../data.js";
import Section from "./Section.jsx";
export default function MainContents() {
    return (
        <Section id="core-concepts" title="Khái niệm chính trong React">
            <ul>
                {myData.map((item) => (
                <MainContent key={item.title} {...item} />
        
                ))}
              </ul>
        </Section>
    )
}