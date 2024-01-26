import { Avatar, Button } from "keep-react";
import React from "react";
import { DownloadSimple } from "phosphor-react";
import FileIcon from "./FileIcon";

const ShowMessages = () => {
    return (
        <div className="p-4">
            <MessageContainer data={{ content_type: "text" }} />
            <MessageContainer
                data={{ content_type: "image" }}
                showImage={true}
            />
            <MessageContainer
                data={{ content_type: "text" }}
                isFromAuth={true}
                showImage={true}
            />
            <MessageContainer
                data={{ content_type: "text" }}
                showImage={true}
            />
            <MessageContainer
                data={{ content_type: "file", file_name: "Tailwind.pdf" }}
                isFromAuth={true}
            />
            <MessageContainer
                data={{ content_type: "text" }}
                isFromAuth={true}
                showImage={true}
            />
        </div>
    );
};

const MessageContainer = ({ data, showImage, isFromAuth }) => (
    <div
        className={`w-5/6 lg:w-2/3 xl:w-2/3 2xl:w-1/3 my-4 ${
            isFromAuth ? "ml-auto" : ""
        }`}
    >
        <div className={`flex gap-2 ${isFromAuth ? "flex-row-reverse" : ""}`}>
            <AvatarContainer showImage={showImage} />
            {data.content_type === "image" && <ImageMessage />}
            {data.content_type === "text" && <TextMessage />}
            {data.content_type === "file" && (
                <FileMessage file_name={data.file_name} />
            )}
        </div>
        <div className={`flex gap-2 ${isFromAuth ? "flex-row-reverse" : ""}`}>
            <div className="w-10"></div>
            <div className={`flex-1 px-1 ${isFromAuth ? "text-end" : ""}`}>
                <p className="text-xs text-slate-400">3:23PM</p>
            </div>
        </div>
    </div>
);

const TextMessage = () => (
    <div className="flex-1 bg-slate-50 border border-slate-100 p-4 rounded">
        <p className="text-slate-800 text-sm ">
            Hey, I need your helping in understanding basis of Tailwind. Can you
            help me?
        </p>
    </div>
);

const ImageMessage = () => (
    <div className="flex-1 bg-slate-50 border border-slate-100 rounded h-52">
        <img
            src="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
            className="w-full h-[100%] object-cover rounded"
        />
    </div>
);

const FileMessage = ({ file_name }) => (
    <div className="flex-1 bg-slate-50 border border-slate-100 rounded flex p-4 gap-4">
        <FileIcon file_name={file_name} />
        <p className="font-semibold text-sm text-slate-700 flex-1">
            {file_name}
        </p>
        <button
            type="button"
            className="flex items-center justify-center p-0 m-0 border-none outline-none"
        >
            <DownloadSimple size={20} />
        </button>
    </div>
);

const AvatarContainer = ({ showImage }) => {
    if (showImage) {
        return (
            <div className="w-10 flex items-end">
                <Avatar
                    size="md"
                    shape="circle"
                    img={"https://randomuser.me/api/portraits/men/11.jpg"}
                />
            </div>
        );
    }
    return <div className="w-10"></div>;
};

export default ShowMessages;
