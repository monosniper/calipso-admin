import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
} from 'react-admin';

import users from '../users';
import orders from '../orders';
import lots from '../lots';
import categories from '../categories';
import reviews from '../reviews';
import pricing from '../prices';
import feedBacks from '../feedBacks';
import questions from '../questions';
import SubMenu from './SubMenu';

const Navigation = ({ dense = false }) => {
    const [state, setState] = useState({
        menuCatalog: true,
        menuSales: true,
        menuCategories: true,
    });
    const translate = useTranslate();
    const open = useSelector((state) => state.admin.ui.sidebarOpen);
    useSelector((state) => state.theme); // force rerender on theme change
    const classes = useStyles();

    const handleToggle = (menu) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div
            className={classnames(classes.root, {
                [classes.open]: open,
                [classes.closed]: !open,
            })}
        >
            {' '}
            {/*<DashboardMenuItem />*/}
            <SubMenu
                handleToggle={() => handleToggle('menuCategories')}
                isOpen={state.menuCategories}
                name="pos.menu.categories"
                icon={<categories.shop.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={{
                        pathname: '/categories/shop',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`resources.categories.name.shop`, {
                        smart_count: 2,
                    })}
                    leftIcon={<categories.shop.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to={{
                        pathname: '/categories/freelance',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`resources.categories.name.freelance`, {
                        smart_count: 2,
                    })}
                    leftIcon={<categories.freelance.icon />}
                    dense={dense}
                />
            </SubMenu>
            <MenuItemLink
                to={{
                    pathname: '/lots',
                    state: { _scrollToTop: true },
                }}
                primaryText={translate(`resources.lots.name`, {
                    smart_count: 2,
                })}
                leftIcon={<lots.icon />}
                dense={dense}
            />
            <MenuItemLink
                to={{
                    pathname: '/orders',
                    state: { _scrollToTop: true },
                }}
                primaryText={translate(`resources.orders.name`, {
                    smart_count: 2,
                })}
                leftIcon={<orders.icon />}
                dense={dense}
            />
            <MenuItemLink
                to={{
                    pathname: '/reviews',
                    state: { _scrollToTop: true },
                }}
                primaryText={translate(`resources.reviews.name`, {
                    smart_count: 2,
                })}
                leftIcon={<reviews.icon />}
                dense={dense}
            />
            <MenuItemLink
                to={{
                    pathname: '/users',
                    state: { _scrollToTop: true },
                }}
                primaryText={translate(`resources.users.name`, {
                    smart_count: 2,
                })}
                leftIcon={<users.icon />}
                dense={dense}
            />
            {/*<MenuItemLink*/}
            {/*    to={{*/}
            {/*        pathname: '/reviews',*/}
            {/*        state: { _scrollToTop: true },*/}
            {/*    }}*/}
            {/*    primaryText={translate(`resources.reviews.name`, {*/}
            {/*        smart_count: 2,*/}
            {/*    })}*/}
            {/*    leftIcon={<reviews.icon />}*/}
            {/*    dense={dense}*/}
            {/*/>*/}
            <MenuItemLink
                to={{
                    pathname: '/questions',
                    state: { _scrollToTop: true },
                }}
                primaryText={translate(`resources.questions.name`, {
                    smart_count: 2,
                })}
                leftIcon={<questions.icon />}
                dense={dense}
            />
            <MenuItemLink
                to={{
                    pathname: '/prices',
                    state: { _scrollToTop: true },
                }}
                primaryText={translate(`resources.pricing.name`, {
                    smart_count: 2,
                })}
                leftIcon={<pricing.icon />}
                dense={dense}
            />
            <MenuItemLink
                to={{
                    pathname: '/feedBacks',
                    state: { _scrollToTop: true },
                }}
                primaryText={translate(`resources.feedBacks.name`, {
                    smart_count: 2,
                })}
                leftIcon={<feedBacks.icon />}
                dense={dense}
            />
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    open: {
        width: 200,
    },
    closed: {
        width: 55,
    },
}));

export default Navigation;