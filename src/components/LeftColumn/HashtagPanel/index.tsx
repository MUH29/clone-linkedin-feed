import React from "react";

import Panel from "../../Panel";

import { Container, HashtagIcon } from "./styles";

const tags = ["ReactJS", "React Native", "NodeJS", "Vue.js", "FrontEnd"];

const HashtagPanel: React.FC = () => {
    return (
        <Container>
            <Panel>
                <span className="title">Hashtags seguidas</span>

                {tags.map((item) => (
                    <span className="tag">
                        <HashtagIcon />
                        {item}
                    </span>
                ))}
            </Panel>
        </Container>
    );
};

export default HashtagPanel;
