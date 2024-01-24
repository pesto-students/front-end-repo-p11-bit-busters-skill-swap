import {
    Avatar,
    Breadcrumb,
    Button,
    Popover,
    Statistic,
    Tabs,
    Typography,
} from "keep-react";
import React, { useEffect, useRef, useState } from "react";
import { CaretRight, Camera, Plus, Trash, Info } from "phosphor-react";
import generateUrl from "../../utils/routes";
import banner from "../../assets/images/profile/banner.svg";
import TextInputComponent from "../../components/FormElements/TextInputComponent";
import TextAreaComponent from "../../components/FormElements/TextAreaComponent";
import DatePickerComponent from "../../components/FormElements/DatePickerComponent";
import { connect } from "react-redux";
import SelectAsyncComponent from "../../components/FormElements/SelectAsyncComponent";
import skillSet from "../../utils/skillSet";
import hobbySet from "../../utils/hobbySet";
import moment from "moment";
import { updateUserProfile } from "../../redux/actions/authAction";
import Swal from "sweetalert2";
import Loader from "../../components/Loader/Loader";

const ViewProfile = ({ user, updateUserProfile }) => {
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
    }, []);

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
            <div className="">
                <div style={{ height: `${personalInformationHeight + 128}px` }}>
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
                                    <div className="px-6 pb-6 pt-24 md:grid md:grid-cols-2 md:gap-6"></div>
                                    <div className="pb-6 px-6">
                                        <div className="font-medium text-2xl md:text-heading-6 flex items-center gap-4">
                                            Skill Scores
                                            <Popover
                                                trigger="hover"
                                                className="shadow-2xl"
                                                icon={<></>}
                                            >
                                                <Popover.Description>
                                                    AI generates these scores
                                                    according to the details
                                                    included in the profile,
                                                    like projects, educational
                                                    background, and
                                                    certifications.
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
                                    {user?.user?.skill_scores?.length > 0 && (
                                        <div className="px-6 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-6">
                                            {user?.user?.skill_scores?.map(
                                                (skill) => (
                                                    <div
                                                        className="border border-metal-50 bg-metal-100 rounded p-4 mb-6 md:mb-0"
                                                        key={skill.skill_name}
                                                    >
                                                        <Statistic>
                                                            <Popover
                                                                trigger="hover"
                                                                className="shadow-2x bg-slate-500"
                                                                icon={<></>}
                                                            >
                                                                <Popover.Description>
                                                                    {
                                                                        skill.explanation
                                                                    }
                                                                </Popover.Description>
                                                                <Popover.Action>
                                                                    <Statistic.Title className="flex items-center gap-2">
                                                                        {
                                                                            skill.skill_name
                                                                        }

                                                                        <Info
                                                                            size={
                                                                                20
                                                                            }
                                                                        />
                                                                    </Statistic.Title>
                                                                </Popover.Action>
                                                            </Popover>
                                                            <Statistic.Amount>
                                                                {skill.score}
                                                            </Statistic.Amount>
                                                        </Statistic>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col md:flex-row gap-6 w-4/5 md:w-3/4 mx-auto">
                    <div className="bg-white rounded-lg shadow-xl w-full md:w-1/2 border border-slate-50 mb-6">
                        <div className="pt-6 px-6">
                            <Typography
                                variant="heading-6"
                                className="font-medium text-2xl md:text-heading-6"
                            >
                                Professional Information
                            </Typography>
                        </div>
                        <div className="p-6 md:grid md:grid-cols-2 md:gap-6"></div>
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
                        <div className="p-6 md:grid md:grid-cols-2 md:gap-6"></div>
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
                            <div className="">projects</div>
                        </Tabs.Item>
                        <Tabs.Item title="Education" className="p-6">
                            <div className="">Education</div>
                        </Tabs.Item>
                        <Tabs.Item title="Certifications" className="p-6">
                            <div className="">Certifications</div>
                        </Tabs.Item>
                    </Tabs>
                </div>
            </div>
            <Loader loading={user.loading} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.auth,
});

const mapDispatchToProps = {
    updateUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
