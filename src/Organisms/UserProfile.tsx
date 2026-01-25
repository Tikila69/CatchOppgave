import { CiUser } from "react-icons/ci";
import Lable from "../Atoms/lable";
import { User } from "../types";

interface Props {
    user: User;
}

function UserProfile({ user }: Props) {
    return (
        <div className="absolute flex left-0 items-center p-2 h-fit m-2">
            <CiUser color="white" size={"2em"} />
            <div className="p-1">
                <Lable text={user.name} color="white" fontSize="small" />
                {user.email && <Lable text={user.email} color="white" fontSize="small" />}
            </div>
        </div>
    );
}

export default UserProfile;
