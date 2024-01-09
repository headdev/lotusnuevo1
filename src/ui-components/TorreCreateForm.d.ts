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
export declare type TorreCreateFormInputValues = {
    titulodelatorre?: string;
    numero?: string;
};
export declare type TorreCreateFormValidationValues = {
    titulodelatorre?: ValidationFunction<string>;
    numero?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TorreCreateFormOverridesProps = {
    TorreCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titulodelatorre?: PrimitiveOverrideProps<TextFieldProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TorreCreateFormProps = React.PropsWithChildren<{
    overrides?: TorreCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TorreCreateFormInputValues) => TorreCreateFormInputValues;
    onSuccess?: (fields: TorreCreateFormInputValues) => void;
    onError?: (fields: TorreCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TorreCreateFormInputValues) => TorreCreateFormInputValues;
    onValidate?: TorreCreateFormValidationValues;
} & React.CSSProperties>;
export default function TorreCreateForm(props: TorreCreateFormProps): React.ReactElement;
