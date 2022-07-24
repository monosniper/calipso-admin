import * as React from "react";
import PropTypes from 'prop-types';
import { Link, useRecordContext } from 'react-admin';
import Avatar from "@material-ui/core/Avatar";

const UserField = (props) => {
    const record = useRecordContext(props);
    const user = props.getUser(record);
    return user ? (
        <span className={'user-field'}>
            <Avatar
                src={`${user.avatar}?size=25x$25`}
                style={{ width: parseInt(25, 10), height: parseInt(25, 10) }}
            />
        {user.fullname}
        </span>
    ) : false;
}

UserField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string,
    isRecordUser: PropTypes.bool,
    getUser: PropTypes.func,
};

export default UserField;