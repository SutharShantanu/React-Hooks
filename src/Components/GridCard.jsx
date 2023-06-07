import React from "react";
import { TbExternalLink, TbCode } from "react-icons/tb";

const GridCard = ({ title, code }) => {
    return (
        <div className="main_card">
            <h1>{title}</h1>
            <div className="card_button">
                <button onClick={() => window.open(code, "_blank")}>
                    Code
                    <TbCode />
                </button>
                <iframe
                    style={{
                        width: "100%",
                        height: "250px",
                        border: "0",
                        borderRadius: "8px",
                        overflow: "hidden",
                        margin:"15px"
                    }}
                    src="https://codesandbox.io/embed/contexthook-2l9gq3?fontsize=14&hidenavigation=1&theme=dark&view=preview"
                    title="ContextHook"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
            </div>
        </div>
    );
};

export default GridCard;
