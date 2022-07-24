import {Admin, Resource} from "react-admin";
import authProvider from "./providers/authProvider";
import 'rsuite/dist/rsuite.min.css';
import './scss/app.scss';
import LoginPage from "./components/LoginPage";
import MyLayout from "./layout";
import users from "./components/users";
import categories from "./components/categories";
import questions from "./components/questions";
import orders from "./components/orders";
import lots from "./components/lots";
import reviews from "./components/reviews";
import feedBacks from "./components/feedBacks";
import prices from "./components/prices";
import {theme} from "./theme";
import i18nProvider from "./i18n";
import dataProvider from "./providers/dataProvider";
import routes from './routes';

const App = () => (
    <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        customRoutes={routes}
        loginPage={LoginPage}
        layout={MyLayout}
        theme={theme}
    >
        <Resource name="lots" {...lots} />
        <Resource name="orders" {...orders} />
        <Resource name="reviews" {...reviews} />
        <Resource name="categories/shop" {...categories.shop} />
        <Resource name="categories/freelance" {...categories.freelance} />
        <Resource name="users" {...users} />
        <Resource name="feedBacks" {...feedBacks} />
        <Resource name="tags" />
        <Resource name="offers" />
        <Resource name="questions" {...questions} />
        <Resource name="prices" {...prices} />
    </Admin>
)

export default App;
