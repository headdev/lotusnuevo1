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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { Fraccion } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function FraccionUpdateForm(props) {
  const {
    id: idProp,
    fraccion: fraccionModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Titulo: "",
    Valor: "",
    dimensionfraccion: "",
    vendido: false,
    preciopormetro: "",
  };
  const [Titulo, setTitulo] = React.useState(initialValues.Titulo);
  const [Valor, setValor] = React.useState(initialValues.Valor);
  const [dimensionfraccion, setDimensionfraccion] = React.useState(
    initialValues.dimensionfraccion
  );
  const [vendido, setVendido] = React.useState(initialValues.vendido);
  const [preciopormetro, setPreciopormetro] = React.useState(
    initialValues.preciopormetro
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = fraccionRecord
      ? { ...initialValues, ...fraccionRecord }
      : initialValues;
    setTitulo(cleanValues.Titulo);
    setValor(cleanValues.Valor);
    setDimensionfraccion(cleanValues.dimensionfraccion);
    setVendido(cleanValues.vendido);
    setPreciopormetro(cleanValues.preciopormetro);
    setErrors({});
  };
  const [fraccionRecord, setFraccionRecord] = React.useState(fraccionModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Fraccion, idProp)
        : fraccionModelProp;
      setFraccionRecord(record);
    };
    queryData();
  }, [idProp, fraccionModelProp]);
  React.useEffect(resetStateValues, [fraccionRecord]);
  const validations = {
    Titulo: [],
    Valor: [],
    dimensionfraccion: [],
    vendido: [],
    preciopormetro: [],
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
          Titulo,
          Valor,
          dimensionfraccion,
          vendido,
          preciopormetro,
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
            Fraccion.copyOf(fraccionRecord, (updated) => {
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
      {...getOverrideProps(overrides, "FraccionUpdateForm")}
      {...rest}
    >
      <TextField
        label="Titulo"
        isRequired={false}
        isReadOnly={false}
        value={Titulo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Titulo: value,
              Valor,
              dimensionfraccion,
              vendido,
              preciopormetro,
            };
            const result = onChange(modelFields);
            value = result?.Titulo ?? value;
          }
          if (errors.Titulo?.hasError) {
            runValidationTasks("Titulo", value);
          }
          setTitulo(value);
        }}
        onBlur={() => runValidationTasks("Titulo", Titulo)}
        errorMessage={errors.Titulo?.errorMessage}
        hasError={errors.Titulo?.hasError}
        {...getOverrideProps(overrides, "Titulo")}
      ></TextField>
      <TextField
        label="Valor"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Valor}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Titulo,
              Valor: value,
              dimensionfraccion,
              vendido,
              preciopormetro,
            };
            const result = onChange(modelFields);
            value = result?.Valor ?? value;
          }
          if (errors.Valor?.hasError) {
            runValidationTasks("Valor", value);
          }
          setValor(value);
        }}
        onBlur={() => runValidationTasks("Valor", Valor)}
        errorMessage={errors.Valor?.errorMessage}
        hasError={errors.Valor?.hasError}
        {...getOverrideProps(overrides, "Valor")}
      ></TextField>
      <TextField
        label="Dimensionfraccion"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={dimensionfraccion}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Titulo,
              Valor,
              dimensionfraccion: value,
              vendido,
              preciopormetro,
            };
            const result = onChange(modelFields);
            value = result?.dimensionfraccion ?? value;
          }
          if (errors.dimensionfraccion?.hasError) {
            runValidationTasks("dimensionfraccion", value);
          }
          setDimensionfraccion(value);
        }}
        onBlur={() =>
          runValidationTasks("dimensionfraccion", dimensionfraccion)
        }
        errorMessage={errors.dimensionfraccion?.errorMessage}
        hasError={errors.dimensionfraccion?.hasError}
        {...getOverrideProps(overrides, "dimensionfraccion")}
      ></TextField>
      <SwitchField
        label="Vendido"
        defaultChecked={false}
        isDisabled={false}
        isChecked={vendido}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Titulo,
              Valor,
              dimensionfraccion,
              vendido: value,
              preciopormetro,
            };
            const result = onChange(modelFields);
            value = result?.vendido ?? value;
          }
          if (errors.vendido?.hasError) {
            runValidationTasks("vendido", value);
          }
          setVendido(value);
        }}
        onBlur={() => runValidationTasks("vendido", vendido)}
        errorMessage={errors.vendido?.errorMessage}
        hasError={errors.vendido?.hasError}
        {...getOverrideProps(overrides, "vendido")}
      ></SwitchField>
      <TextField
        label="Preciopormetro"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={preciopormetro}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Titulo,
              Valor,
              dimensionfraccion,
              vendido,
              preciopormetro: value,
            };
            const result = onChange(modelFields);
            value = result?.preciopormetro ?? value;
          }
          if (errors.preciopormetro?.hasError) {
            runValidationTasks("preciopormetro", value);
          }
          setPreciopormetro(value);
        }}
        onBlur={() => runValidationTasks("preciopormetro", preciopormetro)}
        errorMessage={errors.preciopormetro?.errorMessage}
        hasError={errors.preciopormetro?.hasError}
        {...getOverrideProps(overrides, "preciopormetro")}
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
          isDisabled={!(idProp || fraccionModelProp)}
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
              !(idProp || fraccionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
