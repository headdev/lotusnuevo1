/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Apartament } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function ApartamentUpdateForm(props) {
  const {
    id: idProp,
    apartament: apartamentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    m2: "",
    valor: "",
    fracciones: "",
  };
  const [m2, setM2] = React.useState(initialValues.m2);
  const [valor, setValor] = React.useState(initialValues.valor);
  const [fracciones, setFracciones] = React.useState(initialValues.fracciones);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = apartamentRecord
      ? { ...initialValues, ...apartamentRecord }
      : initialValues;
    setM2(cleanValues.m2);
    setValor(cleanValues.valor);
    setFracciones(cleanValues.fracciones);
    setErrors({});
  };
  const [apartamentRecord, setApartamentRecord] =
    React.useState(apartamentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Apartament, idProp)
        : apartamentModelProp;
      setApartamentRecord(record);
    };
    queryData();
  }, [idProp, apartamentModelProp]);
  React.useEffect(resetStateValues, [apartamentRecord]);
  const validations = {
    m2: [],
    valor: [],
    fracciones: [],
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
          m2,
          valor,
          fracciones,
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
            Apartament.copyOf(apartamentRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ApartamentUpdateForm")}
      {...rest}
    >
      <TextField
        label="M2"
        isRequired={false}
        isReadOnly={false}
        value={m2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              m2: value,
              valor,
              fracciones,
            };
            const result = onChange(modelFields);
            value = result?.m2 ?? value;
          }
          if (errors.m2?.hasError) {
            runValidationTasks("m2", value);
          }
          setM2(value);
        }}
        onBlur={() => runValidationTasks("m2", m2)}
        errorMessage={errors.m2?.errorMessage}
        hasError={errors.m2?.hasError}
        {...getOverrideProps(overrides, "m2")}
      ></TextField>
      <TextField
        label="Valor"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={valor}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              m2,
              valor: value,
              fracciones,
            };
            const result = onChange(modelFields);
            value = result?.valor ?? value;
          }
          if (errors.valor?.hasError) {
            runValidationTasks("valor", value);
          }
          setValor(value);
        }}
        onBlur={() => runValidationTasks("valor", valor)}
        errorMessage={errors.valor?.errorMessage}
        hasError={errors.valor?.hasError}
        {...getOverrideProps(overrides, "valor")}
      ></TextField>
      <TextField
        label="Fracciones"
        isRequired={false}
        isReadOnly={false}
        value={fracciones}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              m2,
              valor,
              fracciones: value,
            };
            const result = onChange(modelFields);
            value = result?.fracciones ?? value;
          }
          if (errors.fracciones?.hasError) {
            runValidationTasks("fracciones", value);
          }
          setFracciones(value);
        }}
        onBlur={() => runValidationTasks("fracciones", fracciones)}
        errorMessage={errors.fracciones?.errorMessage}
        hasError={errors.fracciones?.hasError}
        {...getOverrideProps(overrides, "fracciones")}
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
          isDisabled={!(idProp || apartamentModelProp)}
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
              !(idProp || apartamentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
