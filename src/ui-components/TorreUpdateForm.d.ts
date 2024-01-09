/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Torre } from "../models";
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
export declare type TorreUpdateFormInputValues = {
    titulodelatorre?: string;
    numero?: string;
};
export declare type TorreUpdateFormValidationValues = {
    titulodelatorre?: ValidationFunction<string>;
    numero?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TorreUpdateFormOverridesProps = {
    TorreUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titulodelatorre?: PrimitiveOverrideProps<TextFieldProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TorreUpdateFormProps = React.PropsWithChildren<{
    overrides?: TorreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    torre?: Torre;
    onSubmit?: (fields: TorreUpdateFormInputValues) => TorreUpdateFormInputValues;
    onSuccess?: (fields: TorreUpdateFormInputValues) => void;
    onError?: (fields: TorreUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TorreUpdateFormInputValues) => TorreUpdateFormInputValues;
    onValidate?: TorreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TorreUpdateForm(props: TorreUpdateFormProps): React.ReactElement;
