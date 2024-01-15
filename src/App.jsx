import { Button } from "keep-react";
import AppRouter from "./components/AppRouter/AppRouter";

const App = () => {
    return (
        <div>
            {/* <Provider store={store}> */}
                <AppRouter />
            {/* </Provider> */}
        </div>
    );
}

export default App;
