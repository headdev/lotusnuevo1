/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getAgenteslotus } from "../graphql/queries";
import { updateAgenteslotus } from "../graphql/mutations";
const client = generateClient();
export default function AgenteslotusUpdateForm(props) {
  const {
    id: idProp,
    agenteslotus: agenteslotusModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
    identificacion: "",
    tipoidentificaicon: "",
  };
  const [Nombre, setNombre] = React.useState(initialValues.Nombre);
  const [correo, setCorreo] = React.useState(initialValues.correo);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [direccion, setDireccion] = React.useState(initialValues.direccion);
  const [identificacion, setIdentificacion] = React.useState(
    initialValues.identificacion
  );
  const [tipoidentificaicon, setTipoidentificaicon] = React.useState(
    initialValues.tipoidentificaicon
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = agenteslotusRecord
      ? { ...initialValues, ...agenteslotusRecord }
      : initialValues;
    setNombre(cleanValues.Nombre);
    setCorreo(cleanValues.correo);
    setTelefono(cleanValues.telefono);
    setDireccion(cleanValues.direccion);
    setIdentificacion(cleanValues.identificacion);
    setTipoidentificaicon(cleanValues.tipoidentificaicon);
    setErrors({});
  };
  const [agenteslotusRecord, setAgenteslotusRecord] = React.useState(
    agenteslotusModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAgenteslotus.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAgenteslotus
        : agenteslotusModelProp;
      setAgenteslotusRecord(record);
    };
    queryData();
  }, [idProp, agenteslotusModelProp]);
  React.useEffect(resetStateValues, [agenteslotusRecord]);
  const validations = {
    Nombre: [],
    correo: [{ type: "Email" }],
    telefono: [],
    direccion: [],
    identificacion: [],
    tipoidentificaicon: [],
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
          Nombre: Nombre ?? null,
          correo: correo ?? null,
          telefono: telefono ?? null,
          direccion: direccion ?? null,
          identificacion: identificacion ?? null,
          tipoidentificaicon: tipoidentificaicon ?? null,
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
          await client.graphql({
            query: updateAgenteslotus.replaceAll("__typename", ""),
            variables: {
              input: {
                id: agenteslotusRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AgenteslotusUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={Nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre: value,
              correo,
              telefono,
              direccion,
              identificacion,
              tipoidentificaicon,
            };
            const result = onChange(modelFields);
            value = result?.Nombre ?? value;
          }
          if (errors.Nombre?.hasError) {
            runValidationTasks("Nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("Nombre", Nombre)}
        errorMessage={errors.Nombre?.errorMessage}
        hasError={errors.Nombre?.hasError}
        {...getOverrideProps(overrides, "Nombre")}
      ></TextField>
      <TextField
        label="Correo"
        isRequired={false}
        isReadOnly={false}
        value={correo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              correo: value,
              telefono,
              direccion,
              identificacion,
              tipoidentificaicon,
            };
            const result = onChange(modelFields);
            value = result?.correo ?? value;
          }
          if (errors.correo?.hasError) {
            runValidationTasks("correo", value);
          }
          setCorreo(value);
        }}
        onBlur={() => runValidationTasks("correo", correo)}
        errorMessage={errors.correo?.errorMessage}
        hasError={errors.correo?.hasError}
        {...getOverrideProps(overrides, "correo")}
      ></TextField>
      <TextField
        label="Telefono"
        isRequired={false}
        isReadOnly={false}
        value={telefono}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              correo,
              telefono: value,
              direccion,
              identificacion,
              tipoidentificaicon,
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
              Nombre,
              correo,
              telefono,
              direccion: value,
              identificacion,
              tipoidentificaicon,
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
        label="Identificacion"
        isRequired={false}
        isReadOnly={false}
        value={identificacion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              correo,
              telefono,
              direccion,
              identificacion: value,
              tipoidentificaicon,
            };
            const result = onChange(modelFields);
            value = result?.identificacion ?? value;
          }
          if (errors.identificacion?.hasError) {
            runValidationTasks("identificacion", value);
          }
          setIdentificacion(value);
        }}
        onBlur={() => runValidationTasks("identificacion", identificacion)}
        errorMessage={errors.identificacion?.errorMessage}
        hasError={errors.identificacion?.hasError}
        {...getOverrideProps(overrides, "identificacion")}
      ></TextField>
      <SelectField
        label="Tipoidentificaicon"
        placeholder="Please select an option"
        isDisabled={false}
        value={tipoidentificaicon}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              correo,
              telefono,
              direccion,
              identificacion,
              tipoidentificaicon: value,
            };
            const result = onChange(modelFields);
            value = result?.tipoidentificaicon ?? value;
          }
          if (errors.tipoidentificaicon?.hasError) {
            runValidationTasks("tipoidentificaicon", value);
          }
          setTipoidentificaicon(value);
        }}
        onBlur={() =>
          runValidationTasks("tipoidentificaicon", tipoidentificaicon)
        }
        errorMessage={errors.tipoidentificaicon?.errorMessage}
        hasError={errors.tipoidentificaicon?.hasError}
        {...getOverrideProps(overrides, "tipoidentificaicon")}
      >
        <option
          children="Cedulaciudadania"
          value="CEDULACIUDADANIA"
          {...getOverrideProps(overrides, "tipoidentificaiconoption0")}
        ></option>
        <option
          children="Pasaporte"
          value="PASAPORTE"
          {...getOverrideProps(overrides, "tipoidentificaiconoption1")}
        ></option>
        <option
          children="Dni"
          value="DNI"
          {...getOverrideProps(overrides, "tipoidentificaiconoption2")}
        ></option>
        <option
          children="Licencia"
          value="LICENCIA"
          {...getOverrideProps(overrides, "tipoidentificaiconoption3")}
        ></option>
      </SelectField>
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
          isDisabled={!(idProp || agenteslotusModelProp)}
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
              !(idProp || agenteslotusModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
