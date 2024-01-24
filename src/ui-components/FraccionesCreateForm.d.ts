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
export declare type FraccionesCreateFormInputValues = {
    ValorFraccion?: string;
    m2Fraccion?: string;
};
export declare type FraccionesCreateFormValidationValues = {
    ValorFraccion?: ValidationFunction<string>;
    m2Fraccion?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FraccionesCreateFormOverridesProps = {
    FraccionesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ValorFraccion?: PrimitiveOverrideProps<TextFieldProps>;
    m2Fraccion?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FraccionesCreateFormProps = React.PropsWithChildren<{
    overrides?: FraccionesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FraccionesCreateFormInputValues) => FraccionesCreateFormInputValues;
    onSuccess?: (fields: FraccionesCreateFormInputValues) => void;
    onError?: (fields: FraccionesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FraccionesCreateFormInputValues) => FraccionesCreateFormInputValues;
    onValidate?: FraccionesCreateFormValidationValues;
} & React.CSSProperties>;
export default function FraccionesCreateForm(props: FraccionesCreateFormProps): React.ReactElement;
