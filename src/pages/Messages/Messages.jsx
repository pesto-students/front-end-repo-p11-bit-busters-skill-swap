import { Avatar, Breadcrumb, Button, Card } from "keep-react";
import React, { useState } from "react";
import { CaretRight, List, PaperPlaneTilt, Image, FileArrowUp } from "phosphor-react";
import { Link } from "react-router-dom";
import generateUrl from "../../utils/routes";
import MessagesSidebar from "../../components/Messages/MessagesSidebar";
import UserAvatarCard from "../../components/UserAvatarCard/UserAvatarCard";
import SendMessagesForm from "../../components/Messages/SendMessagesForm";
import ShowMessages from "../../components/Messages/ShowMessages";

const Messages = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            <div className="w-full bg-white px-6 py-3 flex justify-between items-center shadow-xl border-b ">
                <Breadcrumb
                    separatorIcon={<CaretRight size={20} color="#AFBACA" />}
                >
                    <Breadcrumb.Item>
                        <Link to={generateUrl("dashboard")}>Home</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div>
                <div className="bg-slate-100">
                    <div className="lg:grid lg:grid-cols-[0.25fr_0.75fr] xl:grid-cols-[0.2fr_0.8fr] 2xl:grid-cols-[0.15fr_0.85fr]">
                        <MessagesSidebar
                            toggleSidebar={toggleSidebar}
                            sidebarOpen={sidebarOpen}
                        />
                        <div className="w-full ">
                            <div className="w-full bg-header_background border-b flex justify-between items-center">
                                <UserAvatarCard
                                    cardClassNames="bg-header_background"
                                    name="Anand Bhagat"
                                    role="Sr. frontend developer"
                                />
                                <div className="lg:hidden px-6 flex items-center justify-center">
                                    <button
                                        onClick={toggleSidebar}
                                        className="outline-none"
                                    >
                                        <List className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                            <div className="w-full flex flex-col h-[calc(100vh-76px-49px-75px)] bg-white">
                                <div className="flex-1 overflow-y-scroll h-[calc(100vh-76px-49px-75px-82px)] custom-scrollbar ">
                                    <ShowMessages />
                                </div>
                                <SendMessagesForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
