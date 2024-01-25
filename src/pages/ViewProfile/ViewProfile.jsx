import {
    Avatar,
    Breadcrumb,
    Popover,
    Statistic,
    Tabs,
    Typography,
} from "keep-react";
import React, { useEffect, useRef, useState } from "react";
import { CaretRight, Info, Link as LinkIcon } from "phosphor-react";
import generateUrl from "../../utils/routes";
import banner from "../../assets/images/profile/banner.svg";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { getUserProfile } from "../../redux/actions/userAction";
import { Link, useParams } from "react-router-dom";
import SkillScoreStatistic from "../../components/SkillScoreStatics/SkillScoreStatistic";
import moment from "moment";

const ViewProfile = ({ users, getUserProfile }) => {
    const params = useParams();
    const { user_id } = params;
    const [user, setUser] = useState(null);
    const personalInformationRef = useRef();
    const [personalInformationHeight, setPersonalInformationHeight] =
        useState(0);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setPersonalInformationHeight(entry.target.offsetHeight);
            }
        });

        if (personalInformationRef.current) {
            resizeObserver.observe(personalInformationRef.current);
        }

        return () => {
            if (personalInformationRef.current) {
                resizeObserver.unobserve(personalInformationRef.current);
            }
        };
    }, [users.user]);

    useEffect(() => {
        if (users.user) {
            setUser(users.user);
        }
    }, [users.user]);

    useEffect(() => {
        getUserProfile(user_id);
    }, [user_id]);

    return (
        <div className="">
            <div className="w-full bg-white px-6 flex justify-between items-center shadow-xl py-3">
                {/*  sticky top-[76px] z-50 */}
                <Breadcrumb
                    separatorIcon={<CaretRight size={20} color="#AFBACA" />}
                >
                    <Breadcrumb.Item href={generateUrl("dashboard")}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href={generateUrl("profile")}>
                        Profile
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            {user && (
                <div className="">
                    <div
                        style={{
                            height: `${personalInformationHeight + 128}px`,
                        }}
                    >
                        <div className={`relative`}>
                            <img
                                src={banner}
                                className="w-full object-cover h-64"
                            />
                            <div className="flex justify-center items-center">
                                <div
                                    className="w-4/5 md:w-3/4 absolute top-1/2"
                                    ref={personalInformationRef}
                                >
                                    <div className="relative bg-white rounded-lg shadow-xl  w-full mb-6 border border-slate-50">
                                        <div className="absolute left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                            <div className="relative">
                                                <div className="w-40 h-40">
                                                    <Avatar
                                                        shape="circle"
                                                        img={`https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg`}
                                                        className="w-full h-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-6 pt-24 md:grid md:grid-cols-2 pb-4 border-b">
                                            <TextContent
                                                title="Full Name :"
                                                value={user.name}
                                            />
                                            <TextContent
                                                title="Located :"
                                                value={` ${
                                                    user.city
                                                        ? `${user.city} ,`
                                                        : ""
                                                } ${
                                                    user.state ? user.state : ""
                                                } ${
                                                    !user.city && !user.state
                                                        ? "--"
                                                        : ""
                                                }`}
                                            />
                                            <TextContent
                                                title="About :"
                                                value={user.about}
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="font-medium text-2xl md:text-heading-6 flex items-center gap-4">
                                                Skill Scores
                                                <Popover
                                                    trigger="hover"
                                                    className="shadow-2xl"
                                                    icon={<></>}
                                                >
                                                    <Popover.Description>
                                                        AI generates these
                                                        scores according to the
                                                        details included in the
                                                        profile, like projects,
                                                        educational background,
                                                        and certifications.
                                                    </Popover.Description>
                                                    <Popover.Action>
                                                        <Info
                                                            size={35}
                                                            className="md:mt-1"
                                                        />
                                                    </Popover.Action>
                                                </Popover>
                                            </div>
                                        </div>
                                        {(user?.professional_information
                                            ?.skills_to_offer?.length === 0 ||
                                            !user?.professional_information
                                                ?.skills_to_offer) && (
                                            <div className=" px-6 mb-6">
                                                <p className="font-medium text-orange-500">
                                                    Looks like {user.name}{" "}
                                                    haven't added any skills
                                                    yet.
                                                </p>
                                            </div>
                                        )}
                                        {user?.professional_information
                                            ?.skills_to_offer?.length > 0 &&
                                            user?.skill_scores?.length ===
                                                0 && (
                                                <div className=" px-6 mb-6">
                                                    <p className="font-medium text-blue-500">
                                                        We're now processing the
                                                        user informations to
                                                        provide personalized
                                                        scores. Please check
                                                        back in some time.
                                                    </p>
                                                </div>
                                            )}
                                        {user?.skill_scores?.length > 0 && (
                                            <div className="px-6 flex flex-wrap gap-6 mb-6">
                                                {user?.skill_scores?.map(
                                                    (skill) => (
                                                        <SkillScoreStatistic
                                                            skill={skill}
                                                            key={
                                                                skill.skill_name
                                                            }
                                                        />
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col md:flex-row gap-6 w-4/5 md:w-3/4 mx-auto">
                        <div className="bg-white rounded-lg shadow-xl w-full md:w-1/2 border border-slate-50 mb-6">
                            <div className="pt-6 px-6">
                                <Typography
                                    variant="heading-6"
                                    className="font-medium text-2xl md:text-heading-6"
                                >
                                    Professional Information
                                </Typography>
                            </div>
                            <div className="p-6 flex flex-col gap-0.5">
                                <TextContent
                                    title="Current Occupation/Role :"
                                    value={user.role}
                                />
                                <TextContent
                                    title="Industry/Sector :"
                                    value={user.role}
                                />
                                <TextContent
                                    title="Skills to Offer :"
                                    value={user?.professional_information?.skills_to_offer?.join(
                                        ", "
                                    )}
                                />
                                <TextContent
                                    title="Skills Seeking :"
                                    value={user?.professional_information?.skills_seeking?.join(
                                        ", "
                                    )}
                                />
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-xl w-full md:w-1/2 border border-slate-50 mb-6">
                            <div className="pt-6 px-6">
                                <Typography
                                    variant="heading-6"
                                    className="font-medium text-2xl md:text-heading-6"
                                >
                                    Interests and Goals
                                </Typography>
                            </div>
                            <div className="p-6">
                                <TextContent
                                    title="Short Term Goal :"
                                    value={user?.interests?.short_goal}
                                />
                                <TextContent
                                    title="Long Term Goal :"
                                    value={user?.interests?.long_goal}
                                />
                                <TextContent
                                    title="Hobbies and Interests :"
                                    value={user?.interests?.hobbies?.join(", ")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-xl w-4/5 md:w-3/4 mx-auto border border-slate-50 mb-6 p-6">
                        <Tabs
                            aria-label="Tabs"
                            style="underline"
                            borderPosition="bottom"
                            iconPosition="left"
                        >
                            <Tabs.Item title="Projects" className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {user?.projects?.map((project) => (
                                        <div
                                            className="border border-slate-400 rounded-lg p-6"
                                            key={project._id}
                                        >
                                            <div className="flex gap-2 items-center">
                                                <TextContent
                                                    title="Title :"
                                                    value={project?.title}
                                                />
                                                {project?.link && (
                                                    <Link
                                                        to={project?.link}
                                                        target="_blank"
                                                        className="mt-1"
                                                    >
                                                        <LinkIcon size={18} />
                                                    </Link>
                                                )}
                                            </div>
                                            <TextContent
                                                title="Role :"
                                                value={project?.role}
                                            />
                                            <TextContent
                                                title="Skills Utilized :"
                                                value={project?.skills?.join(
                                                    ", "
                                                )}
                                            />
                                            <TextContent
                                                title="Description :"
                                                value={project?.description}
                                            />
                                            <TextContent
                                                title="Outcome :"
                                                value={project?.outcome}
                                            />
                                        </div>
                                    ))}
                                    {user?.projects?.length === 0 && (
                                        <div className="col-span-2">
                                            {user.name} has not added any
                                            projects yet.
                                        </div>
                                    )}
                                </div>
                            </Tabs.Item>
                            <Tabs.Item title="Education" className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {user?.education?.map((education) => (
                                        <div
                                            className="border border-slate-400 rounded-lg p-6"
                                            key={education._id}
                                        >
                                            <TextContent
                                                title="Degree or Program :"
                                                value={education?.degree}
                                            />
                                            <TextContent
                                                title="Instituation Name :"
                                                value={
                                                    education?.institute_name
                                                }
                                            />
                                            <TextContent
                                                title="Start Date :"
                                                value={
                                                    education?.start_date
                                                        ? moment(
                                                              education?.start_date
                                                          ).format(
                                                              "D MMMM YYYY"
                                                          )
                                                        : null
                                                }
                                            />
                                            <TextContent
                                                title="End Date :"
                                                value={
                                                    education?.end_date
                                                        ? moment(
                                                              education?.end_date
                                                          ).format(
                                                              "D MMMM YYYY"
                                                          )
                                                        : null
                                                }
                                            />
                                        </div>
                                    ))}
                                    {user?.education?.length === 0 && (
                                        <div className="col-span-2">
                                            {user.name} has not added any
                                            education details yet.
                                        </div>
                                    )}
                                </div>
                            </Tabs.Item>
                            <Tabs.Item title="Certifications" className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {user?.certifications?.map(
                                        (certification) => (
                                            <div
                                                className="border border-slate-400 rounded-lg p-6"
                                                key={certification._id}
                                            >
                                                <TextContent
                                                    title="Certification Title :"
                                                    value={certification?.title}
                                                />
                                                <TextContent
                                                    title="Issuing Organization :"
                                                    value={
                                                        certification?.issuing_organization
                                                    }
                                                />
                                                <TextContent
                                                    title="Issuing Date :"
                                                    value={
                                                        certification?.issuing_date
                                                            ? moment(
                                                                  certification?.issuing_date
                                                              ).format(
                                                                  "D MMMM YYYY"
                                                              )
                                                            : null
                                                    }
                                                />
                                                <TextContent
                                                    title="Expiry Date :"
                                                    value={
                                                        certification?.expiry_date
                                                            ? moment(
                                                                  certification?.expiry_date
                                                              ).format(
                                                                  "D MMMM YYYY"
                                                              )
                                                            : null
                                                    }
                                                />
                                            </div>
                                        )
                                    )}
                                    {user?.certifications?.length === 0 && (
                                        <div className="col-span-2">
                                            {user.name} has not added any
                                            certification details yet.
                                        </div>
                                    )}
                                </div>
                            </Tabs.Item>
                        </Tabs>
                    </div>
                </div>
            )}

            <Loader loading={users.loading} />
        </div>
    );
};

const TextContent = ({ title, value }) => (
    <div className="my-1 md:flex gap-2 items-center mb-4 md:mb-0 flex-wrap">
        <Typography
            variant="heading-6"
            className="text-base text-slate-700 font-bold"
        >
            {title}
        </Typography>
        <Typography variant="heading-6" className="text-base text-slate-700">
            {value ? value : "--"}
        </Typography>
    </div>
);

const mapStateToProps = (state) => ({
    users: state.users,
});

const mapDispatchToProps = {
    getUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
