import React from "react";

import DesktopHeader from "../DesktopHeader";
import MobileHeader from "../MobileHeader";
import AdBanner from "../AdBanner";
import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import RightColumn from "../RightColumn";

import { Container } from "./styles";

const Layout: React.FC = () => {
    return (
        <Container>
            <DesktopHeader />
            <MobileHeader />

            <span>
                <AdBanner />
            </span>

            <main>
                <LeftColumn />
                <MiddleColumn />
                <RightColumn />
            </main>
        </Container>
    );
};

export default Layout;
