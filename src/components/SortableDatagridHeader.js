import React from 'react';
import {TableCell, TableHead, TableRow, TableSortLabel} from "@material-ui/core";
import {useListSortContext} from "react-admin";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

const SortableDatagridHeader = ({headerCells, isExpanded}) => {
    const { currentSort, setSort } = useListSortContext();
    const classes = useStyles();

    const inverseOrder = sort => (sort === 'asc' ? 'desc' : 'asc');

    const handleChangeSort = (field) => {
        setSort(
            field,
            field === currentSort.field
                ? inverseOrder(currentSort.order)
                : 'asc'
        );
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell />
                {isExpanded ? <TableCell /> : null}
                {headerCells.map(headerCell => {
                    return (
                        <TableCell
                            key={headerCell.id}
                            align={'left'}
                            sortDirection={currentSort.field === headerCell.id ? currentSort.order : false}
                        >
                            {headerCell.sortable !== false ? (
                                <TableSortLabel
                                    active={currentSort.field === headerCell.id}
                                    direction={currentSort.field === headerCell.id ? currentSort.order.toLowerCase() : 'asc'}
                                    onClick={() => handleChangeSort(headerCell.id)}
                                >
                                    {headerCell.label}
                                    {currentSort.field === headerCell.id ? (
                                        <span className={classes.visuallyHidden}>
                                  {currentSort.order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                            </span>
                                    ) : null}
                                </TableSortLabel>
                            ) : headerCell.label}
                        </TableCell>
                    )
                })}
            </TableRow>
        </TableHead>
    );
};

export default SortableDatagridHeader;