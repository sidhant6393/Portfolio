import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "./utils/preloader-animation-data.json";

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
    useEffect(() => {
        setTimeout(() => {
            setLoding(false);
        }, 6000);
        return () => {
            // alert("Somthing went wrong in Preloader");
        };
    }, []);
    return (
        <>
            {loding ? (
                <div
                    style={{
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        //color name importent-text
                        // background: "#4EB785",
                        // background: "#AFAFFF",
                        background: "#fff",
                        // background: "#262626",
                    }}
                >
                    <Lottie options={lottieOption} height={300} width={300} />
                </div>
            ) : (
                <h1> Hi, All</h1>
            )}
        </>
    );
}

export default App;
