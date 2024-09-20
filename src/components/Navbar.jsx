import React from "react";
import Button from "./Button";

function Navbar() {
    return (
        <div className="w-[80vw] flex items-center justify-between mx-auto py-[1.5vh] border-b-[1px] border-zinc-700">
            <div className="nleft flex items-center">
                <img
                    className="w-[6vw]"
                    src="https://gplclub.co/wp-content/uploads/2024/09/logo-mht-copy-1.webp"
                    alt=""
                />
                <div className="links flex gap-[3vw] ml-20">
                    {["Home", "Work", "Culture", "", "News"].map((item, index) => (
                        item.length === 0 ? (
                            <span key={`separator-${index}`} className="w-[1px] h-7 bg-zinc-700"></span>
                        ) : (
                            <a key={item} className="font-regular text-sm flex items-center gap-1" href="#">
                                {index === 1 && (
                                    <span
                                        style={{ boxShadow: "0 0 0.45em #00FF19" }}
                                        className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"
                                    ></span>
                                )}
                                {item}
                            </a>
                        )
                    ))}
                </div>
            </div>
            <Button />
        </div>
    );
}

export default Navbar;
