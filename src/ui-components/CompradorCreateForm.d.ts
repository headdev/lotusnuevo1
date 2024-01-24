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
export declare type CompradorCreateFormInputValues = {
    Nombre?: string;
    Apellido?: string;
    Tipodeidenticiacion?: string;
    Numerodeidentificacion?: string;
    Telefono?: string;
    Email?: string;
    Direccionfiscal?: string;
    Ciudad?: string;
    Estado?: string;
    Pais?: string;
};
export declare type CompradorCreateFormValidationValues = {
    Nombre?: ValidationFunction<string>;
    Apellido?: ValidationFunction<string>;
    Tipodeidenticiacion?: ValidationFunction<string>;
    Numerodeidentificacion?: ValidationFunction<string>;
    Telefono?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Direccionfiscal?: ValidationFunction<string>;
    Ciudad?: ValidationFunction<string>;
    Estado?: ValidationFunction<string>;
    Pais?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompradorCreateFormOverridesProps = {
    CompradorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nombre?: PrimitiveOverrideProps<TextFieldProps>;
    Apellido?: PrimitiveOverrideProps<TextFieldProps>;
    Tipodeidenticiacion?: PrimitiveOverrideProps<SelectFieldProps>;
    Numerodeidentificacion?: PrimitiveOverrideProps<TextFieldProps>;
    Telefono?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Direccionfiscal?: PrimitiveOverrideProps<TextFieldProps>;
    Ciudad?: PrimitiveOverrideProps<TextFieldProps>;
    Estado?: PrimitiveOverrideProps<TextFieldProps>;
    Pais?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompradorCreateFormProps = React.PropsWithChildren<{
    overrides?: CompradorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CompradorCreateFormInputValues) => CompradorCreateFormInputValues;
    onSuccess?: (fields: CompradorCreateFormInputValues) => void;
    onError?: (fields: CompradorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompradorCreateFormInputValues) => CompradorCreateFormInputValues;
    onValidate?: CompradorCreateFormValidationValues;
} & React.CSSProperties>;
export default function CompradorCreateForm(props: CompradorCreateFormProps): React.ReactElement;
