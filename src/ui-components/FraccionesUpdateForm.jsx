/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getFracciones } from "../graphql/queries";
import { updateFracciones } from "../graphql/mutations";
const client = generateClient();
export default function FraccionesUpdateForm(props) {
  const {
    id: idProp,
    fracciones: fraccionesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ValorFraccion: "",
    m2Fraccion: "",
  };
  const [ValorFraccion, setValorFraccion] = React.useState(
    initialValues.ValorFraccion
  );
  const [m2Fraccion, setM2Fraccion] = React.useState(initialValues.m2Fraccion);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = fraccionesRecord
      ? { ...initialValues, ...fraccionesRecord }
      : initialValues;
    setValorFraccion(cleanValues.ValorFraccion);
    setM2Fraccion(cleanValues.m2Fraccion);
    setErrors({});
  };
  const [fraccionesRecord, setFraccionesRecord] =
    React.useState(fraccionesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getFracciones.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFracciones
        : fraccionesModelProp;
      setFraccionesRecord(record);
    };
    queryData();
  }, [idProp, fraccionesModelProp]);
  React.useEffect(resetStateValues, [fraccionesRecord]);
  const validations = {
    ValorFraccion: [],
    m2Fraccion: [],
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
          ValorFraccion: ValorFraccion ?? null,
          m2Fraccion: m2Fraccion ?? null,
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
            query: updateFracciones.replaceAll("__typename", ""),
            variables: {
              input: {
                id: fraccionesRecord.id,
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
      {...getOverrideProps(overrides, "FraccionesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Valor fraccion"
        isRequired={false}
        isReadOnly={false}
        value={ValorFraccion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ValorFraccion: value,
              m2Fraccion,
            };
            const result = onChange(modelFields);
            value = result?.ValorFraccion ?? value;
          }
          if (errors.ValorFraccion?.hasError) {
            runValidationTasks("ValorFraccion", value);
          }
          setValorFraccion(value);
        }}
        onBlur={() => runValidationTasks("ValorFraccion", ValorFraccion)}
        errorMessage={errors.ValorFraccion?.errorMessage}
        hasError={errors.ValorFraccion?.hasError}
        {...getOverrideProps(overrides, "ValorFraccion")}
      ></TextField>
      <TextField
        label="M2 fraccion"
        isRequired={false}
        isReadOnly={false}
        value={m2Fraccion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ValorFraccion,
              m2Fraccion: value,
            };
            const result = onChange(modelFields);
            value = result?.m2Fraccion ?? value;
          }
          if (errors.m2Fraccion?.hasError) {
            runValidationTasks("m2Fraccion", value);
          }
          setM2Fraccion(value);
        }}
        onBlur={() => runValidationTasks("m2Fraccion", m2Fraccion)}
        errorMessage={errors.m2Fraccion?.errorMessage}
        hasError={errors.m2Fraccion?.hasError}
        {...getOverrideProps(overrides, "m2Fraccion")}
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
          isDisabled={!(idProp || fraccionesModelProp)}
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
              !(idProp || fraccionesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
