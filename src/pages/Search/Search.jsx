import { Breadcrumb, Button, Typography } from "keep-react";
import React, { useEffect, useState } from "react";
import generateUrl from "../../utils/routes";
import { CaretRight } from "phosphor-react";
import SelectAsyncComponent from "../../components/FormElements/SelectAsyncComponent";
import skillSet from "../../utils/skillSet";
import UserCard from "../../components/UserCard/UserCard";
import { searchUser } from "../../redux/actions/userAction";
import Loader from "../../components/Loader/Loader";
import { connect } from "react-redux";

const Search = ({ searchUser, users, auth }) => {
    const [formData, setFormData] = useState({
        skills_offering: "",
        skills_seeking: [],
        page: 1,
        limit: 10,
    });

    const handleLoadSkillOptions = (search, callback) => {
        const result = skillSet
            .filter((i) => i.toLowerCase().includes(search.toLowerCase()))
            .map((option) => ({
                label: option,
                value: option,
            }));
        callback(result);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSearch = () => {
        searchUser(formData);
    };

    useEffect(() => {
        handleSearch();
    },[]);

    return (
        <div>
            <div className="w-full bg-white px-6 py-3 flex justify-between items-center shadow-xl ">
                <Breadcrumb
                    separatorIcon={<CaretRight size={20} color="#AFBACA" />}
                >
                    <Breadcrumb.Item href={generateUrl("profile")}>
                        Home
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="flex flex-col md:flex-row w-full lg:w-4/5 mx-auto relative gap-6 py-6 px-6">
                <div className="w-full md:w-1/4 ">
                    <div className="rounded-lg shadow-xl border border-slate-50 p-6 bg-white">
                        <SelectAsyncComponent
                            label="Skills Offering"
                            placeholder="Select Skills"
                            containerClassName="mb-6"
                            defaultOptions={[
                                ...new Set([
                                    ...skillSet.slice(0, 10),
                                    formData.skills_offering,
                                ]),
                            ]}
                            value={formData.skills_offering}
                            name="skills_offering"
                            isMulti={false}
                            cacheOptions
                            onChange={handleChange}
                            loadOptions={handleLoadSkillOptions}
                            isClearable={true}
                        />
                        <SelectAsyncComponent
                            label="Skills Seeking"
                            placeholder="Select Skills"
                            containerClassName="mb-6"
                            defaultOptions={[
                                ...new Set([
                                    ...skillSet.slice(0, 10),
                                    ...formData.skills_seeking,
                                ]),
                            ]}
                            value={formData.skills_seeking}
                            name="skills_seeking"
                            isMulti={true}
                            cacheOptions
                            onChange={handleChange}
                            loadOptions={handleLoadSkillOptions}
                        />
                        <Button
                            size="sm"
                            type="primary"
                            className="py-0 w-full"
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </div>
                </div>
                <div className="w-full md:w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {users.users.map((user) => (
                            <UserCard key={user._id} user={user}/>
                        ))}
                        {users.users.length === 0 && (
                            <div className="border border-dashed text-center p-6 my-6 rounded text-blue-600 border-slate-300 col-span-3">
                                <Typography
                                    variant="paragraph-1"
                                    className="font-medium text-blue-400"
                                >
                                    Please change filters and try searching again.
                                </Typography>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Loader loading={users.loading} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    users: state.users,
    auth: state.auth,
});

const mapDispatchToProps = {
    searchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
