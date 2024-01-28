import { Typography } from "keep-react";
import React, { useEffect } from "react";
import SessionCard from "./SessionCard";
import { getSessions } from "../../redux/actions/sessionAction";
import { connect } from "react-redux";
import moment from "moment";

const RequestSessionTab = ({ getSessions, session }) => {
    useEffect(() => {
        getSessions({
            status: "requests",
        });
    }, []);
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {session?.requests.map((session) => (
                    <SessionCard session={session} key={session._id} />
                ))}
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    session: state.session,
});

const mapDispatchToProps = {
    getSessions,
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestSessionTab);
