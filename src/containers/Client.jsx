import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { TextField, Paper } from "@material-ui/core";
import { Switch as MuiSwicth } from "@material-ui/core";
import { useParams } from "react-router";
import { readClient, updateClient } from "../store/actions/clients";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1000px",
    marginTop: "100px",
  },
  filed: {
    marginBottom: "20px",
  },
  formContainer: {
    display: "flex",
  },
  fieldsContainer: {
    width: "50%",
    padding: "30px",
  },
  div: {
    display: "flex",
    textAlign: "top",
  },
}));
const Client = (props) => {
  const { id } = useParams();

  const handleSubmit = (data) => {
    props.updateClient(id, data);
  };

  useEffect(() => {
    props.readClient(id);
  }, [id]);

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper>
        <Formik
          initialValues={{
            name: props.client.name,
            shortname: props.client.shortname,
            registered_type: props.client.registered_type,
            workscope: props.client.workscope,
            region: props.client.region,
            city: props.client.city,
            email: props.client.email,
            phone: props.client.phone,
            description: props.client.description,
            registered_name: props.client.registered_name,
            bin_iin: props.client.bin_iin,
            leader: props.client.leader,
            leader_position: props.client.leader_position,
            address: props.client.address,
            registered_address: props.client.registered_address,
            tax_payer: props.client.tax_payer,
          }}
          // validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ values, setFieldValue }) => (
            <Form className={classes.formContainer}>
              <div className={classes.fieldsContainer}>
                <Field
                  className={classes.filed}
                  fullWidth
                  placeholder="Найменование компани"
                  name="name"
                  type="input"
                  as={TextField}
                />
                <Field
                  className={classes.filed}
                  fullWidth
                  placeholder="Короткое название"
                  name="shortname"
                  type="input"
                  as={TextField}
                />

                <Field
                  fullWidth
                  className={classes.filed}
                  placeholder="Тип юр.лица"
                  name="registered_type"
                  type="input"
                  as={TextField}
                />
                <Field
                  fullWidth
                  className={classes.filed}
                  placeholder="Телефон"
                  name="phone"
                  type="tel"
                  as={TextField}
                />
                <Field
                  fullWidth
                  className={classes.filed}
                  placeholder="Сфера деятельности"
                  name="workscope"
                  type="input"
                  as={TextField}
                />
                <Field
                  fullWidth
                  className={classes.filed}
                  placeholder="Регион"
                  name="region"
                  type="input"
                  as={TextField}
                />
                <Field
                  fullWidth
                  className={classes.filed}
                  placeholder="Город"
                  name="city"
                  type="city"
                  as={TextField}
                />
                <Field
                  fullWidth
                  className={classes.filed}
                  placeholder="Email"
                  name="email"
                  type="email"
                  as={TextField}
                />
              </div>
              <div className={classes.fieldsContainer}>
                <Field
                  fullWidth
                  className={classes.filed}
                  placeholder="Дополнительное описание"
                  name="description"
                  type="input"
                  as={TextField}
                />
                <Field
                  fullWidth
                  className={classes.filed}
                  placeholder="Найменование юр.лица"
                  name="registered_name"
                  type="input"
                  as={TextField}
                />
                <Field
                  fullWidth
                  className={classes.filed}
                  placeholder="Тип юр.лица"
                  name="registered_type"
                  type="input"
                  as={TextField}
                />
                <Field
                  fullWidth
                  className={classes.filed}
                  placeholder="Бин"
                  name="bin_iin"
                  type="input"
                  as={TextField}
                />
                <Field
                  fullWidth
                  className={classes.filed}
                  placeholder="Руководитель"
                  name="leader"
                  type="input"
                  as={TextField}
                />
                <Field
                  fullWidth
                  className={classes.filed}
                  placeholder="Долженость руководителя"
                  name="leader_position"
                  type="input"
                  as={TextField}
                />
                <Field
                  fullWidth
                  className={classes.filed}
                  placeholder="Фактический адрес"
                  name="address"
                  type="input"
                  as={TextField}
                />
                <Field
                  fullWidth
                  className={classes.filed}
                  placeholder="Юридический адрес"
                  name="registered_address"
                  type="input"
                  as={TextField}
                />
                <div className={classes.div}>
                  <span>Плательчик НДС (нет/да)</span>
                  <MuiSwicth
                    onChange={() => {
                      setFieldValue("tax_payer", !values.tax_payer);
                    }}
                    checked={values.tax_payer}
                  />
                </div>
                <Button type="submit" variant="outlined">
                  Сохранить
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  client: state.clients.client,
});

const mapDispatchToProps = (dispatch) => ({
  readClient: (clientId) => dispatch(readClient(clientId)),
  updateClient: (id, clientData) => dispatch(updateClient(id, clientData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Client);
