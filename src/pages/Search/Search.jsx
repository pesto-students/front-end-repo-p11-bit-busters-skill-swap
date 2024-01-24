import { Breadcrumb, Button } from "keep-react";
import React, { useState } from "react";
import generateUrl from "../../utils/routes";
import { CaretRight } from "phosphor-react";
import SelectAsyncComponent from "../../components/FormElements/SelectAsyncComponent";
import skillSet from "../../utils/skillSet";
import UserCard from "../../components/UserCard/UserCard";

const Search = () => {
    const [formData, setFormData] = useState({
        skills_offering: "",
        skills_seeking: [],
        page: 0,
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
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

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
                            value={
                                formData.skills_seeking
                            }
                            name="skills_seeking"
                            isMulti={true}
                            cacheOptions
                            onChange={handleChange}
                            loadOptions={handleLoadSkillOptions}
                        />
                         <Button size="sm" type="primary" className="py-0 w-full">Search</Button>
                    </div>
                </div>
                <div className="w-full md:w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
