import Loader from "../Loader/Loader";

const PrivateRoute = ({ element, ...rest }) => {
    // const dispatch = useDispatch();
    // const userLoginData = useSelector((state) => state.user);

    // useEffect(() => {
    //     dispatch(userProfile());
    // }, [dispatch]);

    // const isLoggedIn = userLoginData.isLoggedIn;
    // if (isLoggedIn === true) {
        return <Outlet />;
    // } else if (isLoggedIn === false) {
    //     return <Navigate to={"/login"} />;
    // }

    return <Loader loading={true} />;
};

export default PrivateRoute;