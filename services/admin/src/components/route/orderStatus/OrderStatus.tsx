import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import ContainedButton from "../button/ContainedButton";
import clsx from "clsx";

export enum OrderStatusEnum {
  ReadyToPick = "ready-to-pick",
  Delivered = "delivered",
}

const OrderStatus: React.FC<{ status: string }> = ({ status }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={clsx(status)}>
        <ContainedButton
          text={
            status === OrderStatusEnum.Delivered
              ? "Completed"
              : "Pending payment"
          }
          props={{
            disabled: status === OrderStatusEnum.ReadyToPick,
          }}
        />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& .delivered ": {
        "& .MuiButton-containedPrimary": {
          backgroundColor: "#c9d7e1",
          color: "#4b5f6e",
        },
      },
      "& .ready-to-pick": {
        "& .MuiButton-containedPrimary": {
          backgroundColor: "#e5e5e5",
          color: "#8b8b8b",
        },
      },
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
  })
);
export default OrderStatus;
