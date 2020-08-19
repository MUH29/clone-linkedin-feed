import React from "react";

import TrendingPanel from "./TrendingPanel";

import { Container } from "./styles";

const RightColumn: React.FC<loadingProps> = ({ isLoading }) => {
    return (
        <Container className="right-column">
            <TrendingPanel />
            <TrendingPanel />
        </Container>
    );
};

export default RightColumn;
