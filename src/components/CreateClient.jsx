import React from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
// import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createNewClient } from "../store/actions/clients";

// const validationSchema = yup.object().shape({
//   stage: yup.number().required(),
//   procedureArea: yup.string().required("Введите название области"),
//   procedureName: yup.string().required("Введите название процедуры"),
// });

const CreateClient = ({ open, handleClose, addClient }) => {
  const handleSubmit = (data) => {
    addClient(data, handleClose);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="form-dialog-title">Добавить клиента</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{
            name: "",
            shortname: "",
            registered_type: "",
            workscope: "",
            region: "",
            city: "",
            email: "",
            phone: "",
            description: "",
          }}
          //   validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({
            values: {
              name,
              shortname,
              registered_type,
              workscope,
              region,
              city,
              email,
              phone,
              description,
            },
            handleChange,
          }) => (
            <Form>
              <TextField
                margin="dense"
                id="name"
                label="Найменования компаний"
                type="text"
                fullWidth
                name="name"
                value={name}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                id="shortname"
                label="Короткое название"
                type="text"
                fullWidth
                name="shortname"
                value={shortname}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                id="registered_type"
                label="Тип юр.лица"
                type="text"
                fullWidth
                name="registered_type"
                value={registered_type}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                id="workscope"
                label="Сфера деятельности"
                type="text"
                fullWidth
                name="workscope"
                value={workscope}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                id="region"
                label="Регион"
                type="text"
                fullWidth
                name="region"
                value={region}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                id="city"
                label="Город"
                type="text"
                fullWidth
                name="city"
                value={city}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
                name="email"
                value={email}
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                id="phone"
                label="Телефон"
                type="text"
                fullWidth
                name="phone"
                value={phone}
                onChange={handleChange}
              />

              <TextField
                margin="dense"
                id="description"
                label="Описание"
                type="textarea"
                fullWidth
                name="description"
                value={description}
                onChange={handleChange}
              />

              <DialogActions>
                <Button type="submit" color="primary">
                  Добавить
                </Button>
                <Button onClick={handleClose} type="button" color="primary">
                  Отмена
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addClient: (clientData, modalCloseHandler) =>
    dispatch(createNewClient(clientData, modalCloseHandler)),
});

export default connect(null, mapDispatchToProps)(CreateClient);
