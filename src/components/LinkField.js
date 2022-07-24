import React from 'react';
import PropTypes from "prop-types";
import {Link, useRecordContext, UrlField } from 'react-admin';

const LinkField = (props) => {
    let record = useRecordContext(props);
    const id = props.getId(record);
    let link;

    if(props.isToSite) {
        link = `${process.env.REACT_APP_API_ORIGIN_URL}/${props.link}/${id}`
    } else {
        link = `/${props.link}/${id}${props.isShow ? '/show' : ''}`;
    }

    return props.isToSite ? (
        <a target='_blank' href={link}>{props.field}</a>
    ) : (
        <Link to={link}>{props.field}</Link>
    );
};

LinkField.propTypes = {
    link: PropTypes.string,
    field: PropTypes.object,
    source: PropTypes.string,
    isShow: PropTypes.bool,
    isToSite: PropTypes.bool,
    getId: PropTypes.func,
};

export default LinkField;