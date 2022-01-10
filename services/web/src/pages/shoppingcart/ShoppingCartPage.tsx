import React from "react";
import {
  Grid,
  Typography,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import CartTable from "./components/CartTable";
import CartInfo from "./components/CartInfo";
import PrimaryButton from "../../components/button/PrimaryButton";
import { RootStore } from "../../redux/store";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import { vnf_regex } from "../../helper/validator";
// import { getServices } from "../../redux/actions/delivery/getAction";
import "./styles.scss";
import clsx from "clsx";

const ShoppingCartPage: React.FC = () => {
  const classes = useStyles();
  const items = useSelector((state: RootStore) => state.cart);
  const history = useHistory();
  const [chooseAddress, setChooseAddress] = React.useState(false);
  // const dispatch = useDispatch();
  const currentAddress = useSelector(
    (state: RootStore) => state.address.currentAddress
  );
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    if (!vnf_regex.test(currentAddress.phone)) {
      enqueueSnackbar("Phone number is not valid", { variant: "error" });
      return;
    }
    if (!items.itemToCheckOut.length || !currentAddress?.id) {
      enqueueSnackbar("Please choose items and address", { variant: "error" });
    } else {
      history.push("/check-out");
    }
  };
  

  return (
    <div className={clsx(classes.root, "page-cart")}>
      <Grid container justifyContent="center" alignContent="center">
        <Grid item className="page-cart__title">
          <Typography variant="h4" className={classes.title}>
            Your cart: {items.data.length} items
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent="space-evenly"
          style={{ marginRight: 0 }}
        >
          <Grid item sm={6} className="page-cart__table">
            <CartTable />
          </Grid>
          <Grid
            item
            sm={4}
            className={clsx(classes.checkout, "page-cart__info")}
          >
            <CartInfo
              chooseAddress={chooseAddress}
              setChooseAddress={setChooseAddress}
            />
            <PrimaryButton
              text="Proceed to checkout"
              props={{
                onClick: () => handleClick(),
                style: { margin: "16px 0 0" },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#fff6f6!important",
      minHeight: "100vh",
    },
    checkout: {
      "& button": {
        margin: 0,
      },
    },
    title: {
      padding: "48px",
    },
    dialog: {
      "& .MuiDialog-paper": {
        margin: 0,
        width: "40%",
        maxWidth: "100vw",
        padding: theme.spacing(4),
      },
      "& .MuiOutlinedInput-root": {
        width: "100%",
      },
      "& .MuiInputLabel-root": {
        fontWeight: 500,
        fontSize: 16,
        color: "#000",
        margin: theme.spacing(1, 0),
      },
      "& button": {
        padding: theme.spacing(1, 4),
      },
    },
    actions: {
      padding: theme.spacing(0, 3, 2),
    },
    posBtn: {
      padding: theme.spacing(1, 2),
      backgroundColor: "#000",
      color: "#fff",
      border: "2px solid #000",
      "&:hover": {
        backgroundColor: "#000",
        color: "#fff",
      },
    },
    nevBtn: {
      padding: theme.spacing(1, 2),
      color: "#000",
      border: "2px solid #000",
      margin: theme.spacing(1, 1),
    },
  })
);
export default ShoppingCartPage;
