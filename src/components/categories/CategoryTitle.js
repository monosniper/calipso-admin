import React from "react";

export const CategoryTitle = ({ record }) => {
    return <span>{record.name} <small>{record.slug}</small></span>;
};
