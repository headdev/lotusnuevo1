/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Agentes } from "../models";
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
export declare type AgentesUpdateFormInputValues = {
    nombre?: string;
    email?: string;
    telefono?: string;
    direccion?: string;
};
export declare type AgentesUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    direccion?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AgentesUpdateFormOverridesProps = {
    AgentesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    direccion?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AgentesUpdateFormProps = React.PropsWithChildren<{
    overrides?: AgentesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    agentes?: Agentes;
    onSubmit?: (fields: AgentesUpdateFormInputValues) => AgentesUpdateFormInputValues;
    onSuccess?: (fields: AgentesUpdateFormInputValues) => void;
    onError?: (fields: AgentesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AgentesUpdateFormInputValues) => AgentesUpdateFormInputValues;
    onValidate?: AgentesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AgentesUpdateForm(props: AgentesUpdateFormProps): React.ReactElement;
