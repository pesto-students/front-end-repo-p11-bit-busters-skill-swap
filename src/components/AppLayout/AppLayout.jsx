import React, { useEffect, useState } from "react";
import { Avatar, Card, Dropdown, Navbar } from "keep-react";
import { Sidebar } from "keep-react";
import { User, MapPinLine, ArrowLeft, List, SignOut } from "phosphor-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import Logo from "../Logo/Logo";
import generateUrl from "../../utils/routes";

const menu = [
    {
        id: "home",
        label: "Home",
        link: "/",
        icon: <User size={24} />,
    },
    {
        id: "message",
        label: "Messages",
        link: "/messages",
        icon: <User size={24} />,
    },
    {
        id: "sessions",
        label: "Sessions",
        link: "/sessions",
        icon: <MapPinLine size={24} />,
    },
];

const AppLayout = ({ user, logout }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div>
            <NavbarComponent
                logout={logout}
                toggleSidebar={toggleSidebar}
                user={user}
            />
            <div className="lg:grid">
                <SidebarComponent
                    user={user?.user}
                    toggleSidebar={toggleSidebar}
                    sidebarOpen={sidebarOpen}
                    logout={logout}
                />
                <main className="w-full">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

const NavbarComponent = ({ logout, toggleSidebar, user }) => {
    return (
        <Navbar fluid={true} className="bg-header_background sticky top-0 z-50">
            <Navbar.Container className="flex items-center justify-between px-0 lg:px-12 py-2">
                <Navbar.Brand className="text-xl font-medium">
                    <Link to={generateUrl("dashboard")}>
                        <Logo showImageLogo={true} />
                    </Link>
                </Navbar.Brand>

                <Navbar.Collapse
                    collapseType="sidebar"
                    className="bg-header_background "
                >
                    <Navbar.Container tag="ul" className="flex flex-col gap-5">
                        {menu.map((item) => (
                            <Navbar.Link
                                linkName={item.label}
                                href={item.link}
                                key={item.id}
                            />
                        ))}
                    </Navbar.Container>
                </Navbar.Collapse>

                <Navbar.Container className="flex items-center gap-3">
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-5"
                    >
                        <Dropdown
                            label={
                                <Avatar
                                    size="md"
                                    shape="circle"
                                    img={`${
                                        user.user.profile_image ||
                                        "https://randomuser.me/api/portraits/men/11.jpg"
                                    }`}
                                />
                            }
                            size="sm"
                            type="linkPrimary"
                            arrowIcon={false}
                            className="bg-transparent hover:bg-transparent"
                        >
                            <Card className="max-w-xs px-6 py-4 md:max-w-lg rounded-none border-t-0 border-x-0 border-b border-metal-50">
                                <Card.Container className="flex items-center">
                                    <Avatar
                                        size="lg"
                                        shape="circle"
                                        img={`${
                                            user.user.profile_image ||
                                            "https://randomuser.me/api/portraits/men/11.jpg"
                                        }`}
                                    />
                                    <Card.Container className="ml-3">
                                        <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">
                                            {user.user.name}
                                        </Card.Title>
                                        <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">
                                            {
                                                user.user
                                                    .professional_information
                                                    .role
                                            }
                                        </Card.Title>
                                    </Card.Container>
                                </Card.Container>
                            </Card>
                            <Dropdown.Item
                                icon={
                                    <Link to={generateUrl("profile")}>
                                        <User size={20} color="#444" />
                                    </Link>
                                }
                            >
                                <Link
                                    to={generateUrl("profile")}
                                    className="w-full"
                                >
                                    Profile
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                                icon={<SignOut size={20} />}
                                onClick={logout}
                            >
                                Logout
                            </Dropdown.Item>
                        </Dropdown>
                    </Navbar.Container>
                </Navbar.Container>
                <div className="lg:hidden">
                    <button onClick={toggleSidebar} className="outline-none">
                        <List className="text-2xl" />
                    </button>
                </div>
            </Navbar.Container>
        </Navbar>
    );
};

const SidebarComponent = ({ user, toggleSidebar, sidebarOpen, logout }) => {
    const location = useLocation();
    return (
        <div
            className={`bg-header_background h-screen md:h-[calc(100vh-72px)] fixed inset-y-0 right-0 transform transition-transform duration-300 ${
                sidebarOpen ? "translate-x-0" : "translate-x-full"
            } lg:relative lg:translate-x-0 z-[85] w-2/3 md:hidden`}
        >
            <div className="py-4 px-6 lg:hidden">
                <button
                    onClick={toggleSidebar}
                    className=" bg-transparent text-sm flex gap-4 items-center outline-none"
                >
                    <ArrowLeft className="text-lg" /> Go Back
                </button>
            </div>
            <Sidebar
                aria-label="Sidebar with multi-level dropdown example"
                className="bg-header_background"
                theme={{
                    root: {
                        inner: "h-full overflow-y-auto overflow-x-hidden rounded py-4 px-3 bg-header_background",
                    },
                }}
            >
                <Sidebar.ItemGroup className="bg-header_background">
                    {menu
                        .filter(
                            (item) =>
                                (item.only_for_admin && user.is_admin) ||
                                !item.only_for_admin
                        )
                        .map((item) => (
                            <Sidebar.Item
                                href={item.link}
                                icon={item.icon}
                                key={item.id}
                                active={location.pathname === item.link}
                            >
                                {item.label}
                            </Sidebar.Item>
                        ))}
                    <Sidebar.Item
                        icon={<SignOut size={24} />}
                        onClick={logout}
                        className="lg:hidden cursor-pointer"
                    >
                        Logout
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar>
        </div>
    );
};

const mapStateToProps = (store) => ({
    user: store.auth,
});

const mapDispatchToProps = {
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
