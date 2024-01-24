import { Avatar, Typography } from "keep-react";
import React from "react";
import { Camera } from "phosphor-react";
import { Link } from "react-router-dom";
import generateUrl from "../../utils/routes";

const UserCard = () => {
    return (
        <Link to={generateUrl('user_profile', {
            user_id: 1
        })}>
            <div className="border border-slate-50 rounded bg-white text-center shadow-xl relative mt-10">
                <div className="absolute left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <div className="relative">
                        <div className="w-20 h-20">
                            <Avatar
                                shape="circle"
                                img={`https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg`}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-14">
                    <div>
                        <Typography variant="body-3" className="font-semibold">
                            Kathryn Murphy
                        </Typography>
                        <Typography variant="body-6" className="text-slate-400">
                            Product Designer
                        </Typography>
                        <Typography variant="body-6" className="text-slate-400">
                            San Francisco, California
                        </Typography>
                    </div>
                    <div className="my-4">
                        <Typography
                            variant="body-6"
                            className="font-semibold block"
                        >
                            Skills Seeking:
                        </Typography>
                        <Typography
                            variant="body-6"
                            className="text-slate-400 block"
                        >
                            Web Development, Advanced Analytics
                        </Typography>
                    </div>
                    <div className="my-4">
                        <Typography
                            variant="body-6"
                            className="font-semibold block"
                        >
                            Skills to Offer:
                        </Typography>
                        <Typography
                            variant="body-6"
                            className="text-slate-400 block"
                        >
                            SEO, Content Creation, Social Media Marketing
                        </Typography>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default UserCard;
