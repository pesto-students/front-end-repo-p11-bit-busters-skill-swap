import { Avatar, Card, Dropdown, Navbar } from "keep-react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import generateUrl from "../../utils/routes";
import { User, List, SignOut } from "phosphor-react";
import UserAvatarCard from "../UserAvatarCard/UserAvatarCard";

const NavbarComponent = ({ logout, toggleSidebar, user, menu }) => {
    return (
        <Navbar fluid={true} className="bg-header_background sticky top-0 z-50">
            <Navbar.Container className="flex items-center justify-between px-0 lg:px-12 py-2">
                <Navbar.Container
                    tag="div"
                    className="flex items-center justify-between gap-8"
                >
                    <Navbar.Brand className="text-xl font-medium">
                        <Link to={generateUrl("dashboard")}>
                            <Logo showImageLogo={true} />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Divider></Navbar.Divider>
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-start justify-between gap-8"
                    >
                        {menu.map((link) => (
                            <Link to={link.link} key={link.id}>
                                {link.label}
                            </Link>
                        ))}
                    </Navbar.Container>
                </Navbar.Container>

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
                                        user.user.profile_picture ||
                                        "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                    }`}
                                />
                            }
                            size="sm"
                            type="linkPrimary"
                            arrowIcon={false}
                            className="bg-transparent hover:bg-transparent"
                        >
                            <UserAvatarCard
                                avatar_size="lg"
                                name={user.user.name}
                                role={user.user?.professional_information?.role}
                                profile_image={user.user.profile_picture}
                            />
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

export default NavbarComponent;
