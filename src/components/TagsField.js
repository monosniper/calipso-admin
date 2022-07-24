import * as React from "react";
import PropTypes from 'prop-types';
import {useRecordContext} from 'react-admin';
import Chip from '@material-ui/core/Chip';

const TagsField = (props) => {
    const record = useRecordContext(props);
    return <span className={'tags-field'}>
        {record[props.source].map((tag, i) => {
            return <Chip style={{marginRight: '.5rem'}} label={tag.name} key={'tag-'+i}/>
        })}
    </span>;
}

TagsField.propTypes = {
    record: PropTypes.object,
    source: PropTypes.string,
};

export default TagsField;