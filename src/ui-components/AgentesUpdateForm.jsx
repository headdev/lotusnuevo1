/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Agentes } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function AgentesUpdateForm(props) {
  const {
    id: idProp,
    agentes: agentesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    password: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [email, setEmail] = React.useState(initialValues.email);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [direccion, setDireccion] = React.useState(initialValues.direccion);
  const [password, setPassword] = React.useState(initialValues.password);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = agentesRecord
      ? { ...initialValues, ...agentesRecord }
      : initialValues;
    setNombre(cleanValues.nombre);
    setEmail(cleanValues.email);
    setTelefono(cleanValues.telefono);
    setDireccion(cleanValues.direccion);
    setPassword(cleanValues.password);
    setErrors({});
  };
  const [agentesRecord, setAgentesRecord] = React.useState(agentesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Agentes, idProp)
        : agentesModelProp;
      setAgentesRecord(record);
    };
    queryData();
  }, [idProp, agentesModelProp]);
  React.useEffect(resetStateValues, [agentesRecord]);
  const validations = {
    nombre: [],
    email: [{ type: "Email" }],
    telefono: [{ type: "Phone" }],
    direccion: [],
    password: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nombre,
          email,
          telefono,
          direccion,
          password,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Agentes.copyOf(agentesRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AgentesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              email,
              telefono,
              direccion,
              password,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              email: value,
              telefono,
              direccion,
              password,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Telefono"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={telefono}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              email,
              telefono: value,
              direccion,
              password,
            };
            const result = onChange(modelFields);
            value = result?.telefono ?? value;
          }
          if (errors.telefono?.hasError) {
            runValidationTasks("telefono", value);
          }
          setTelefono(value);
        }}
        onBlur={() => runValidationTasks("telefono", telefono)}
        errorMessage={errors.telefono?.errorMessage}
        hasError={errors.telefono?.hasError}
        {...getOverrideProps(overrides, "telefono")}
      ></TextField>
      <TextField
        label="Direccion"
        isRequired={false}
        isReadOnly={false}
        value={direccion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              email,
              telefono,
              direccion: value,
              password,
            };
            const result = onChange(modelFields);
            value = result?.direccion ?? value;
          }
          if (errors.direccion?.hasError) {
            runValidationTasks("direccion", value);
          }
          setDireccion(value);
        }}
        onBlur={() => runValidationTasks("direccion", direccion)}
        errorMessage={errors.direccion?.errorMessage}
        hasError={errors.direccion?.hasError}
        {...getOverrideProps(overrides, "direccion")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={false}
        isReadOnly={false}
        value={password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              email,
              telefono,
              direccion,
              password: value,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || agentesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || agentesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
