import React from "react";
import "./GridCard.css";
import { RxCodesandboxLogo } from "react-icons/rx";

const GridCard = ({ title, embed, hook, link }) => {
    return (
        <div className="main_card">
            <h3>{title}</h3>
            <a
                href={link}
                className="button"
                target="_blank"
                rel="noopener noreferrer">
                Edit on
                <RxCodesandboxLogo className="button_icon" />
            </a>

            <iframe
                src={embed}
                title={hook}
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
        </div>
    );
};

export default GridCard;
