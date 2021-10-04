import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "./utils/preloader-animation-data.json";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";

const lottieOption = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

function App() {
    const [loding, setLoding] = useState(true);
    const [theme, setTheme] = useState(lightTheme);

    useEffect(() => {
        setTimeout(() => {
            setLoding(false);
        }, 6000);
    }, []);

    return (
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
                    <Lottie options={lottieOption} height={300} width={300} />
                </div>
            ) : (
                <h1> Hi, All</h1>
            )}
        </ThemeProvider>
    );
}

export default App;
