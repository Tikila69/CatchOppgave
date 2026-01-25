import "./App.css";
import Divider from "./Atoms/divider";
import Lable from "./Atoms/lable";
import Searchbar from "./Atoms/Searchbar";
import DropdownCard from "./Molecules/dropdownCard";
import DepartmentManagementPage from "./Pages/DepartmentManagementPage";
import { useDepartmentData } from "./hooks/useDepartmentData";
import UserProfile from "./Organisms/UserProfile";

function App() {
    const {
        user,
        companies,
        departments,
        roles,
        loading,
        error,
        addUserToDepartment,
        removeUserFromDepartment,
        setUserAsLeader,
        removeUserAsLeader,
    } = useDepartmentData();

    return (
        <div style={{ backgroundColor: "#1f232B" }}>
            <DepartmentManagementPage />
        </div>
    );
}

export default App;
