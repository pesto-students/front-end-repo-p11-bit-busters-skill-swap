import { Typography } from "keep-react";
import React from "react";
import logoImage from "../../assets/logo.png";

const Logo = ({ showImageLogo }) => {
    return (
        <>
            {!showImageLogo && (
                <Typography
                    variant="heading-6"
                    className="text-center font-semibold tracking-widest"
                >
                    Skill Swap
                </Typography>
            )}
            {showImageLogo && <img src={logoImage} className="w-[180px] md:w-[250px]"/>}
        </>
    );
};

export default Logo;
