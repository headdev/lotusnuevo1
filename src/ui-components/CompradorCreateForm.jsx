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
import { createComprador } from "../graphql/mutations";
const client = generateClient();
export default function CompradorCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    Apellido: "",
    Tipodeidenticiacion: "",
    Numerodeidentificacion: "",
    Telefono: "",
    Email: "",
    Direccionfiscal: "",
    Ciudad: "",
    Estado: "",
    Pais: "",
  };
  const [Nombre, setNombre] = React.useState(initialValues.Nombre);
  const [Apellido, setApellido] = React.useState(initialValues.Apellido);
  const [Tipodeidenticiacion, setTipodeidenticiacion] = React.useState(
    initialValues.Tipodeidenticiacion
  );
  const [Numerodeidentificacion, setNumerodeidentificacion] = React.useState(
    initialValues.Numerodeidentificacion
  );
  const [Telefono, setTelefono] = React.useState(initialValues.Telefono);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Direccionfiscal, setDireccionfiscal] = React.useState(
    initialValues.Direccionfiscal
  );
  const [Ciudad, setCiudad] = React.useState(initialValues.Ciudad);
  const [Estado, setEstado] = React.useState(initialValues.Estado);
  const [Pais, setPais] = React.useState(initialValues.Pais);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.Nombre);
    setApellido(initialValues.Apellido);
    setTipodeidenticiacion(initialValues.Tipodeidenticiacion);
    setNumerodeidentificacion(initialValues.Numerodeidentificacion);
    setTelefono(initialValues.Telefono);
    setEmail(initialValues.Email);
    setDireccionfiscal(initialValues.Direccionfiscal);
    setCiudad(initialValues.Ciudad);
    setEstado(initialValues.Estado);
    setPais(initialValues.Pais);
    setErrors({});
  };
  const validations = {
    Nombre: [],
    Apellido: [],
    Tipodeidenticiacion: [],
    Numerodeidentificacion: [{ type: "Required" }],
    Telefono: [{ type: "Phone" }],
    Email: [{ type: "Required" }, { type: "Email" }],
    Direccionfiscal: [],
    Ciudad: [],
    Estado: [],
    Pais: [],
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
          Nombre,
          Apellido,
          Tipodeidenticiacion,
          Numerodeidentificacion,
          Telefono,
          Email,
          Direccionfiscal,
          Ciudad,
          Estado,
          Pais,
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
            query: createComprador.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CompradorCreateForm")}
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
              Apellido,
              Tipodeidenticiacion,
              Numerodeidentificacion,
              Telefono,
              Email,
              Direccionfiscal,
              Ciudad,
              Estado,
              Pais,
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
        label="Apellido"
        isRequired={false}
        isReadOnly={false}
        value={Apellido}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Apellido: value,
              Tipodeidenticiacion,
              Numerodeidentificacion,
              Telefono,
              Email,
              Direccionfiscal,
              Ciudad,
              Estado,
              Pais,
            };
            const result = onChange(modelFields);
            value = result?.Apellido ?? value;
          }
          if (errors.Apellido?.hasError) {
            runValidationTasks("Apellido", value);
          }
          setApellido(value);
        }}
        onBlur={() => runValidationTasks("Apellido", Apellido)}
        errorMessage={errors.Apellido?.errorMessage}
        hasError={errors.Apellido?.hasError}
        {...getOverrideProps(overrides, "Apellido")}
      ></TextField>
      <SelectField
        label="Tipodeidenticiacion"
        placeholder="Please select an option"
        isDisabled={false}
        value={Tipodeidenticiacion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Apellido,
              Tipodeidenticiacion: value,
              Numerodeidentificacion,
              Telefono,
              Email,
              Direccionfiscal,
              Ciudad,
              Estado,
              Pais,
            };
            const result = onChange(modelFields);
            value = result?.Tipodeidenticiacion ?? value;
          }
          if (errors.Tipodeidenticiacion?.hasError) {
            runValidationTasks("Tipodeidenticiacion", value);
          }
          setTipodeidenticiacion(value);
        }}
        onBlur={() =>
          runValidationTasks("Tipodeidenticiacion", Tipodeidenticiacion)
        }
        errorMessage={errors.Tipodeidenticiacion?.errorMessage}
        hasError={errors.Tipodeidenticiacion?.hasError}
        {...getOverrideProps(overrides, "Tipodeidenticiacion")}
      >
        <option
          children="Cedulaciudadania"
          value="CEDULACIUDADANIA"
          {...getOverrideProps(overrides, "Tipodeidenticiacionoption0")}
        ></option>
        <option
          children="Pasaporte"
          value="PASAPORTE"
          {...getOverrideProps(overrides, "Tipodeidenticiacionoption1")}
        ></option>
        <option
          children="Dni"
          value="DNI"
          {...getOverrideProps(overrides, "Tipodeidenticiacionoption2")}
        ></option>
        <option
          children="Licencia"
          value="LICENCIA"
          {...getOverrideProps(overrides, "Tipodeidenticiacionoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Numerodeidentificacion"
        isRequired={true}
        isReadOnly={false}
        value={Numerodeidentificacion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Apellido,
              Tipodeidenticiacion,
              Numerodeidentificacion: value,
              Telefono,
              Email,
              Direccionfiscal,
              Ciudad,
              Estado,
              Pais,
            };
            const result = onChange(modelFields);
            value = result?.Numerodeidentificacion ?? value;
          }
          if (errors.Numerodeidentificacion?.hasError) {
            runValidationTasks("Numerodeidentificacion", value);
          }
          setNumerodeidentificacion(value);
        }}
        onBlur={() =>
          runValidationTasks("Numerodeidentificacion", Numerodeidentificacion)
        }
        errorMessage={errors.Numerodeidentificacion?.errorMessage}
        hasError={errors.Numerodeidentificacion?.hasError}
        {...getOverrideProps(overrides, "Numerodeidentificacion")}
      ></TextField>
      <TextField
        label="Telefono"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={Telefono}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Apellido,
              Tipodeidenticiacion,
              Numerodeidentificacion,
              Telefono: value,
              Email,
              Direccionfiscal,
              Ciudad,
              Estado,
              Pais,
            };
            const result = onChange(modelFields);
            value = result?.Telefono ?? value;
          }
          if (errors.Telefono?.hasError) {
            runValidationTasks("Telefono", value);
          }
          setTelefono(value);
        }}
        onBlur={() => runValidationTasks("Telefono", Telefono)}
        errorMessage={errors.Telefono?.errorMessage}
        hasError={errors.Telefono?.hasError}
        {...getOverrideProps(overrides, "Telefono")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Apellido,
              Tipodeidenticiacion,
              Numerodeidentificacion,
              Telefono,
              Email: value,
              Direccionfiscal,
              Ciudad,
              Estado,
              Pais,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Direccionfiscal"
        isRequired={false}
        isReadOnly={false}
        value={Direccionfiscal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Apellido,
              Tipodeidenticiacion,
              Numerodeidentificacion,
              Telefono,
              Email,
              Direccionfiscal: value,
              Ciudad,
              Estado,
              Pais,
            };
            const result = onChange(modelFields);
            value = result?.Direccionfiscal ?? value;
          }
          if (errors.Direccionfiscal?.hasError) {
            runValidationTasks("Direccionfiscal", value);
          }
          setDireccionfiscal(value);
        }}
        onBlur={() => runValidationTasks("Direccionfiscal", Direccionfiscal)}
        errorMessage={errors.Direccionfiscal?.errorMessage}
        hasError={errors.Direccionfiscal?.hasError}
        {...getOverrideProps(overrides, "Direccionfiscal")}
      ></TextField>
      <TextField
        label="Ciudad"
        isRequired={false}
        isReadOnly={false}
        value={Ciudad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Apellido,
              Tipodeidenticiacion,
              Numerodeidentificacion,
              Telefono,
              Email,
              Direccionfiscal,
              Ciudad: value,
              Estado,
              Pais,
            };
            const result = onChange(modelFields);
            value = result?.Ciudad ?? value;
          }
          if (errors.Ciudad?.hasError) {
            runValidationTasks("Ciudad", value);
          }
          setCiudad(value);
        }}
        onBlur={() => runValidationTasks("Ciudad", Ciudad)}
        errorMessage={errors.Ciudad?.errorMessage}
        hasError={errors.Ciudad?.hasError}
        {...getOverrideProps(overrides, "Ciudad")}
      ></TextField>
      <TextField
        label="Estado"
        isRequired={false}
        isReadOnly={false}
        value={Estado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Apellido,
              Tipodeidenticiacion,
              Numerodeidentificacion,
              Telefono,
              Email,
              Direccionfiscal,
              Ciudad,
              Estado: value,
              Pais,
            };
            const result = onChange(modelFields);
            value = result?.Estado ?? value;
          }
          if (errors.Estado?.hasError) {
            runValidationTasks("Estado", value);
          }
          setEstado(value);
        }}
        onBlur={() => runValidationTasks("Estado", Estado)}
        errorMessage={errors.Estado?.errorMessage}
        hasError={errors.Estado?.hasError}
        {...getOverrideProps(overrides, "Estado")}
      ></TextField>
      <TextField
        label="Pais"
        isRequired={false}
        isReadOnly={false}
        value={Pais}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nombre,
              Apellido,
              Tipodeidenticiacion,
              Numerodeidentificacion,
              Telefono,
              Email,
              Direccionfiscal,
              Ciudad,
              Estado,
              Pais: value,
            };
            const result = onChange(modelFields);
            value = result?.Pais ?? value;
          }
          if (errors.Pais?.hasError) {
            runValidationTasks("Pais", value);
          }
          setPais(value);
        }}
        onBlur={() => runValidationTasks("Pais", Pais)}
        errorMessage={errors.Pais?.errorMessage}
        hasError={errors.Pais?.hasError}
        {...getOverrideProps(overrides, "Pais")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
