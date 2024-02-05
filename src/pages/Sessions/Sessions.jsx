import { Breadcrumb, Button, Tabs, Tag, Typography } from "keep-react";
import React from "react";
import { CaretRight } from "phosphor-react";
import generateUrl from "../../utils/routes";
import { Link } from "react-router-dom";
import SessionCard from "../../components/Sessions/SessionCard";
import UpcomingSessionTab from "../../components/Sessions/UpcomingSessionTab";
import Loader from "../../components/Loader/Loader";
import { connect } from "react-redux";
import CompletedSessionTab from "../../components/Sessions/CompletedSessionTab";
import RequetSessionTab from "../../components/Sessions/RequetSessionTab";

const Sessions = ({ session }) => {
    return (
        <div>
            <div className="w-full bg-white px-6 py-3 flex justify-between items-center shadow-xl ">
                <Breadcrumb
                    separatorIcon={<CaretRight size={20} color="#AFBACA" />}
                >
                    <Breadcrumb.Item>
                        <Link to={generateUrl("sessions")}>Sessions</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="w-full lg:w-4/5 mx-auto p-6">
                <Tabs
                    aria-label="tabs"
                    style="underline"
                    borderPosition="bottom"
                >
                    <Tabs.Item title="Upcoming">
                        <UpcomingSessionTab />
                    </Tabs.Item>
                    <Tabs.Item title="Completed">
                        <CompletedSessionTab />
                    </Tabs.Item>
                    <Tabs.Item title="Requests">
                        <RequetSessionTab />
                    </Tabs.Item>
                </Tabs>
            </div>
            <Loader loading={session.loading} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    session: state.session,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);
