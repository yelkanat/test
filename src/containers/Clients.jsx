import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchAllClients, removeClient } from "../store/actions/clients";
import MaterialTable from "material-table";
import CreateClient from "../components/CreateClient";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";
import { Container, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: "auto",
  },
  header: {
    color: "white",
    marginBottom: theme.spacing(3),
  },
  table: {
    marginTop: "150px",
  },
}));
const Clients = (props) => {
  const [isCreating, setCreating] = useState(false);

  const [state, setState] = React.useState({
    columns: [
      { title: "Наименование компании", field: "name" },
      { title: "Тип юр.лица", field: "registered_type" },
      { title: "Регион", field: "region" },
      { title: "Город", field: "city" },
    ],
  });
  const history = useHistory();
  const handleRederectToClient = (id) => {
    history.push(`/clients/${id}`);
  };
  useEffect(() => {
    props.fetchAllClients();
  }, []);
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.header} position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6">Клиенты</Typography>

            <Button
              type="button"
              variant="contained"
              color="primary"
              disableElevation
              className={classes.menuButton}
              onClick={() => setCreating(true)}
            >
              Добавить
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Container className={classes.container}>
        <CreateClient
          open={isCreating}
          handleClose={() => setCreating(false)}
        />

        <Paper>
          <MaterialTable
            className={classes.table}
            title="Editable Example"
            columns={state.columns}
            data={props.clients ? props.clients.results : []}
            editable={{
              onRowDelete: (oldData) => props.removeClient(oldData.id),
            }}
            localization={{
              header: {
                actions: "",
              },
            }}
            options={{
              actionsColumnIndex: -1,
            }}
            actions={[
              {
                icon: "edit",
                tooltip: "Редактировать",
                onClick: (event, rowData) => handleRederectToClient(rowData.id),
              },
            ]}
          />
        </Paper>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => ({
  clients: state.clients.clients,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllClients: () => dispatch(fetchAllClients()),
  removeClient: (id) => dispatch(removeClient(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Clients);
