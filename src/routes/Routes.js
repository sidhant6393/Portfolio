import { Route, Switch } from "react-router-dom";
import { SectionOne } from "../components/SectionOne";

import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../utils/preloader-animation-data.json";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/theme";
import { About } from "../components/about/About";
import { Projects } from "../components/projects/Projects";
import { Footer } from "../components/Footer";
import { Blog } from "../components/blog/Blog";

const lottieOption = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

export const Routes = () => {
    const [loding, setLoding] = useState(true);
    const [theme, setTheme] = useState(lightTheme);

    useEffect(() => {
        setTimeout(() => {
            setLoding(false);
        }, 3200);
    }, []);

    return (
        <Switch>
            <Route path="/" exact>
                <ThemeProvider theme={theme}>
                    {loding ? (
                        <div
                            style={{
                                height: "100vh",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: theme.bg,
                            }}
                        >
                            <Lottie
                                options={lottieOption}
                                height={300}
                                width={300}
                            />
                        </div>
                    ) : (
                        <>
                            <SectionOne theme={theme} setTheme={setTheme} />
                            <About />
                            <Projects />
                            <Blog />
                            <Footer />
                        </>
                    )}
                </ThemeProvider>
            </Route>
            <Route>
                <>
                    <h1>404</h1>
                    <p>Page not fount</p>
                </>
            </Route>
        </Switch>
    );
};
