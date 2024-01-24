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
export declare type FraccionesUpdateFormInputValues = {
    ValorFraccion?: string;
    m2Fraccion?: string;
};
export declare type FraccionesUpdateFormValidationValues = {
    ValorFraccion?: ValidationFunction<string>;
    m2Fraccion?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FraccionesUpdateFormOverridesProps = {
    FraccionesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ValorFraccion?: PrimitiveOverrideProps<TextFieldProps>;
    m2Fraccion?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FraccionesUpdateFormProps = React.PropsWithChildren<{
    overrides?: FraccionesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fracciones?: any;
    onSubmit?: (fields: FraccionesUpdateFormInputValues) => FraccionesUpdateFormInputValues;
    onSuccess?: (fields: FraccionesUpdateFormInputValues) => void;
    onError?: (fields: FraccionesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FraccionesUpdateFormInputValues) => FraccionesUpdateFormInputValues;
    onValidate?: FraccionesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FraccionesUpdateForm(props: FraccionesUpdateFormProps): React.ReactElement;
