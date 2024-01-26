import React from "react";
import { PaperPlaneTilt, Image, FileArrowUp } from "phosphor-react";
import { Button } from "keep-react";

const SendMessagesForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("aa");
    };
    return (
        <form onSubmit={handleSubmit} className="p-4">
            <div className="flex gap-4 w-full">
                <div className="w-3/4 sm:w-full  flex border border-slate-300 rounded-lg bg-white gap-4 items-center justify-center px-4">
                    <div className="flex-1">
                        <input
                            className="border-none outline-none w-full"
                            placeholder="Type a message"
                        />
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <input type="file" className="hidden" id="image" />
                            <label
                                htmlFor="image"
                                className="text-slate-500 cursor-pointer"
                            >
                                <Image size={20} />
                            </label>
                        </div>
                        <div>
                            <input type="file" className="hidden" id="file" />
                            <label
                                htmlFor="file"
                                className="text-slate-500 cursor-pointer"
                            >
                                <FileArrowUp size={20} />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button className="hidden" type="submit"></button>
                    <Button
                        size="md"
                        type="primary"
                        className="rounded-lg flex items-center justify-center"
                    >
                        <PaperPlaneTilt size={24} />
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default SendMessagesForm;
