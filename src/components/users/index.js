import VisitorIcon from '@material-ui/icons/People';
import UserList from "./UserList";
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";
import {ShowGuesser} from "react-admin";

export default {
    list: UserList,
    icon: VisitorIcon,
    create: UserCreate,
    edit : UserEdit,
    // show : ShowGuesser,
};