import { ValueUpdateDetail } from '@oracle/oraclejet-preact/utils/UNSAFE_valueUpdateDetail';
import { ComponentProps } from 'preact';
import type { SelectMultiple } from './select-multiple';
declare type SelectMultipleProps = ComponentProps<typeof SelectMultiple>;
export declare function useSelectMultiplePreact<K extends string | number, D extends Record<string, any>>({ data: propData, disabled, displayOptions, itemText, labelEdge, labelHint, labelStartWidth, messagesCustom, placeholder, readonly, required, requiredMessageDetail: propRequiredMessageDetail, textAlign, userAssistanceDensity, value: propValue, valueItems: propValueItems, virtualKeyboard, onMessagesCustomChanged, onValidChanged, onValueChanged, onValueItemsChanged, ...otherProps }: SelectMultipleProps, addBusyState: (desc?: string) => () => void): {
    methods: {
        reset: () => void;
        validate: () => Promise<"valid" | "invalid">;
        showMessages: () => void;
    };
    selectMultipleProps: Omit<{
        ariaDescribedBy?: string | undefined;
        assistiveText?: string | undefined;
        data?: import("@oracle/oraclejet-preact/UNSAFE_Collection").DataState<string | number, Record<string, any>> | null | undefined;
        helpSourceLink?: string | undefined;
        helpSourceText?: string | undefined;
        isDisabled?: boolean | undefined;
        isLoading?: boolean | undefined;
        isReadonly?: boolean | undefined;
        isRequired?: boolean | undefined;
        isRequiredShown?: boolean | undefined;
        itemText: import("@oracle/oraclejet-preact/utils/UNSAFE_selectUtils").ItemTextType<string | number, Record<string, any>>;
        label: string;
        labelEdge?: "start" | "none" | "top" | "inside" | undefined;
        labelStartWidth?: import("@oracle/oraclejet-preact/utils/UNSAFE_size").Size | undefined;
        messages?: import("@oracle/oraclejet-preact/UNSAFE_ComponentMessage").ComponentMessageItem[] | undefined;
        placeholder?: string | undefined;
        textAlign?: "start" | "right" | "end" | undefined;
        userAssistanceDensity?: import("@oracle/oraclejet-preact/UNSAFE_UserAssistance").UserAssistanceDensityType | undefined;
        valueItems?: import("@oracle/oraclejet-preact/utils/UNSAFE_dataProvider").Item<string | number, Record<string, any>>[] | undefined;
        variant?: "default" | "embedded" | undefined;
        virtualKeyboard?: "number" | "text" | "auto" | "search" | "email" | "tel" | "url" | undefined;
        onCommit: (detail: ValueUpdateDetail<Set<string | number>>) => void;
        onFilter?: (({ searchText }: {
            searchText?: string | undefined;
        }) => void) | undefined;
        onLoadRange?: ((range: import("@oracle/oraclejet-preact/UNSAFE_Collection").Range) => void) | undefined;
    }, "ref"> & {
        ref?: import("preact").Ref<import("@oracle/oraclejet-preact/hooks/UNSAFE_useFocusableTextField").FocusableHandle> | undefined;
    };
};
export {};
