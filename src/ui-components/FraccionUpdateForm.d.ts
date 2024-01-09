/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Fraccion } from "../models";
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
export declare type FraccionUpdateFormInputValues = {
    Titulo?: string;
    Valor?: number;
    dimensionfraccion?: number;
    vendido?: boolean;
    preciopormetro?: number;
};
export declare type FraccionUpdateFormValidationValues = {
    Titulo?: ValidationFunction<string>;
    Valor?: ValidationFunction<number>;
    dimensionfraccion?: ValidationFunction<number>;
    vendido?: ValidationFunction<boolean>;
    preciopormetro?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FraccionUpdateFormOverridesProps = {
    FraccionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Titulo?: PrimitiveOverrideProps<TextFieldProps>;
    Valor?: PrimitiveOverrideProps<TextFieldProps>;
    dimensionfraccion?: PrimitiveOverrideProps<TextFieldProps>;
    vendido?: PrimitiveOverrideProps<SwitchFieldProps>;
    preciopormetro?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FraccionUpdateFormProps = React.PropsWithChildren<{
    overrides?: FraccionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fraccion?: Fraccion;
    onSubmit?: (fields: FraccionUpdateFormInputValues) => FraccionUpdateFormInputValues;
    onSuccess?: (fields: FraccionUpdateFormInputValues) => void;
    onError?: (fields: FraccionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FraccionUpdateFormInputValues) => FraccionUpdateFormInputValues;
    onValidate?: FraccionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FraccionUpdateForm(props: FraccionUpdateFormProps): React.ReactElement;
