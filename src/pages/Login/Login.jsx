import { Button, Typography } from "keep-react";
import React from "react";
import { Lock } from "phosphor-react";
import TextInputComponent from "../../components/FormElements/TextInputComponent";
import { Link } from "react-router-dom";
import generateUrl from "../../utils/routes";

const Login = () => {
    const handleSubmit = (e) => {
        console.log(e);
    };
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="w-full px-6 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="flex flex-col items-center gap-4">
                    <Typography
                        variant="heading-6"
                        className="text-center font-semibold tracking-widest"
                    >
                        Skill Swap
                    </Typography>
                    <Typography variant="paragraph-3" className="text-center">
                        Please enter your details to log in
                    </Typography>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                        <div className="mb-4">
                            <TextInputComponent
                                id="email"
                                name="email"
                                placeholder="Email"
                                label="Email *"
                                handleOnChange={(e) => {
                                    console.log(e);
                                }}
                                value="aa"
                            />
                        </div>
                        <div className="mb-4">
                            <TextInputComponent
                                id="password"
                                name="password"
                                placeholder="Password"
                                label="Password *"
                                handleOnChange={(e) => {
                                    console.log(e);
                                }}
                                value="aa"
                                type="password"
                                addon={<Lock size={20} />}
                                addonPosition="left"
                                addonStyle="text-slate-500"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <Button
                            size="md"
                            type="primary"
                            className="w-full"
                            onClick={handleSubmit}
                        >
                            Log in
                        </Button>
                    </div>
                    <div className="flex justify-center">
                        <Typography
                            variant="paragraph-3"
                            className="text-center"
                        >
                            Don't have an account?{" "}
                            <Link
                                to={generateUrl("register")}
                                className="text-primary-500 font-medium"
                            >
                                Create account
                            </Link>
                        </Typography>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
