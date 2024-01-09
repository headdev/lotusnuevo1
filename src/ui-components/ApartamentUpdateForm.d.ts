/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Apartament } from "../models";
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
export declare type ApartamentUpdateFormInputValues = {
    m2?: string;
    valor?: number;
    fracciones?: string;
};
export declare type ApartamentUpdateFormValidationValues = {
    m2?: ValidationFunction<string>;
    valor?: ValidationFunction<number>;
    fracciones?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApartamentUpdateFormOverridesProps = {
    ApartamentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    m2?: PrimitiveOverrideProps<TextFieldProps>;
    valor?: PrimitiveOverrideProps<TextFieldProps>;
    fracciones?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ApartamentUpdateFormProps = React.PropsWithChildren<{
    overrides?: ApartamentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    apartament?: Apartament;
    onSubmit?: (fields: ApartamentUpdateFormInputValues) => ApartamentUpdateFormInputValues;
    onSuccess?: (fields: ApartamentUpdateFormInputValues) => void;
    onError?: (fields: ApartamentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApartamentUpdateFormInputValues) => ApartamentUpdateFormInputValues;
    onValidate?: ApartamentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ApartamentUpdateForm(props: ApartamentUpdateFormProps): React.ReactElement;
