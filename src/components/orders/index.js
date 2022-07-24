import OrderIcon from '@material-ui/icons/AttachMoney';
import OrdersList from "./OrdersList";
import OrdersCreate from "./OrdersCreate";
import {ShowGuesser} from "react-admin";
import {OrderShow} from "./OrderShow";
import OrderEdit from "./OrderEdit";

export default {
    list: OrdersList,
    icon: OrderIcon,
    // show: OrderShow,
    edit: OrderEdit,
    create: OrdersCreate,
};