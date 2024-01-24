/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AgenteslotusCreateFormInputValues = {
    Nombre?: string;
    correo?: string;
    telefono?: string;
    direccion?: string;
    identificacion?: string;
    tipoidentificaicon?: string;
};
export declare type AgenteslotusCreateFormValidationValues = {
    Nombre?: ValidationFunction<string>;
    correo?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    direccion?: ValidationFunction<string>;
    identificacion?: ValidationFunction<string>;
    tipoidentificaicon?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AgenteslotusCreateFormOverridesProps = {
    AgenteslotusCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nombre?: PrimitiveOverrideProps<TextFieldProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    direccion?: PrimitiveOverrideProps<TextFieldProps>;
    identificacion?: PrimitiveOverrideProps<TextFieldProps>;
    tipoidentificaicon?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type AgenteslotusCreateFormProps = React.PropsWithChildren<{
    overrides?: AgenteslotusCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AgenteslotusCreateFormInputValues) => AgenteslotusCreateFormInputValues;
    onSuccess?: (fields: AgenteslotusCreateFormInputValues) => void;
    onError?: (fields: AgenteslotusCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AgenteslotusCreateFormInputValues) => AgenteslotusCreateFormInputValues;
    onValidate?: AgenteslotusCreateFormValidationValues;
} & React.CSSProperties>;
export default function AgenteslotusCreateForm(props: AgenteslotusCreateFormProps): React.ReactElement;
