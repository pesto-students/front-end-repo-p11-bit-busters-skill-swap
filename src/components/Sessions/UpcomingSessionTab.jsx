import { Typography } from "keep-react";
import React, { useEffect } from "react";
import SessionCard from "./SessionCard";
import { getSessions } from "../../redux/actions/sessionAction";
import { connect } from "react-redux";
import moment from "moment";

const UpcomingSessionTab = ({ getSessions, session }) => {
    useEffect(() => {
        getSessions({
            status: "upcoming",
        });
    }, []);
    return (
        <>
            <div>
                {session?.upcoming.map((date_wise_session) => (
                    <div className="mb-6" key={date_wise_session._id}>
                        <Typography
                            variant="heading-3"
                            className="text-xl font-medium tracking-normal mb-4"
                        >
                            {moment(date_wise_session._id).format(
                                "dddd, MMMM DD, YYYY"
                            )}
                        </Typography>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {date_wise_session.sessions.map((session) => (
                                <SessionCard session={session} key={session._id}/>
                            ))}
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingSessionTab);
