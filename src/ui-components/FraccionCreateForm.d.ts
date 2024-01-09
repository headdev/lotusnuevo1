/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type FraccionCreateFormInputValues = {
    Titulo?: string;
    Valor?: number;
    dimensionfraccion?: number;
    vendido?: boolean;
    preciopormetro?: number;
};
export declare type FraccionCreateFormValidationValues = {
    Titulo?: ValidationFunction<string>;
    Valor?: ValidationFunction<number>;
    dimensionfraccion?: ValidationFunction<number>;
    vendido?: ValidationFunction<boolean>;
    preciopormetro?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FraccionCreateFormOverridesProps = {
    FraccionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Titulo?: PrimitiveOverrideProps<TextFieldProps>;
    Valor?: PrimitiveOverrideProps<TextFieldProps>;
    dimensionfraccion?: PrimitiveOverrideProps<TextFieldProps>;
    vendido?: PrimitiveOverrideProps<SwitchFieldProps>;
    preciopormetro?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FraccionCreateFormProps = React.PropsWithChildren<{
    overrides?: FraccionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FraccionCreateFormInputValues) => FraccionCreateFormInputValues;
    onSuccess?: (fields: FraccionCreateFormInputValues) => void;
    onError?: (fields: FraccionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FraccionCreateFormInputValues) => FraccionCreateFormInputValues;
    onValidate?: FraccionCreateFormValidationValues;
} & React.CSSProperties>;
export default function FraccionCreateForm(props: FraccionCreateFormProps): React.ReactElement;
