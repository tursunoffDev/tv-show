import React from "react";
import Card from "@/components/Card";
import { useStyles } from "./style";

export const List = ({ children, ...restProps }) => {
  const { list } = useStyles();

  return (
    <ul className={list} {...restProps}>
      {children}{" "}
    </ul>
  );
};

export const ListItem = ({ ...restProps }) => {
  const { item } = useStyles();

  return (
    <li className={item}>
      <Card {...restProps} />
    </li>
  );
};
