import { Layout } from 'react-admin';
import Navigation from './components/layout/Navigation';

const MyLayout = (props) => <Layout
    {...props}
    menu={Navigation}
/>;

export default MyLayout;