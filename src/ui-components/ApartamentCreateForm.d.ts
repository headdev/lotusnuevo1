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
export declare type ApartamentCreateFormInputValues = {
    m2?: string;
    valor?: number;
    fracciones?: string;
};
export declare type ApartamentCreateFormValidationValues = {
    m2?: ValidationFunction<string>;
    valor?: ValidationFunction<number>;
    fracciones?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApartamentCreateFormOverridesProps = {
    ApartamentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    m2?: PrimitiveOverrideProps<TextFieldProps>;
    valor?: PrimitiveOverrideProps<TextFieldProps>;
    fracciones?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ApartamentCreateFormProps = React.PropsWithChildren<{
    overrides?: ApartamentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ApartamentCreateFormInputValues) => ApartamentCreateFormInputValues;
    onSuccess?: (fields: ApartamentCreateFormInputValues) => void;
    onError?: (fields: ApartamentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApartamentCreateFormInputValues) => ApartamentCreateFormInputValues;
    onValidate?: ApartamentCreateFormValidationValues;
} & React.CSSProperties>;
export default function ApartamentCreateForm(props: ApartamentCreateFormProps): React.ReactElement;
