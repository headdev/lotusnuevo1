/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AgentesCreateFormInputValues = {
    nombre?: string;
    email?: string;
    telefono?: string;
    direccion?: string;
    password?: string;
};
export declare type AgentesCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    direccion?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AgentesCreateFormOverridesProps = {
    AgentesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    direccion?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AgentesCreateFormProps = React.PropsWithChildren<{
    overrides?: AgentesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AgentesCreateFormInputValues) => AgentesCreateFormInputValues;
    onSuccess?: (fields: AgentesCreateFormInputValues) => void;
    onError?: (fields: AgentesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AgentesCreateFormInputValues) => AgentesCreateFormInputValues;
    onValidate?: AgentesCreateFormValidationValues;
} & React.CSSProperties>;
export default function AgentesCreateForm(props: AgentesCreateFormProps): React.ReactElement;
