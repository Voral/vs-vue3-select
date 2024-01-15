import {Component, PropType, EmitsOptions, ComputedOptions, Slots, SlotProps, VNodeProps} from 'vue';

export type CalculatePositionGeometry = {
    width: string,
    top: string,
    left: string
}
export type CalculatePositionFunction = (dropdownList: HTMLUListElement, component: Component, geometry: CalculatePositionGeometry) => (() => void) | void;

export type ClearSearchOnBlurFunctionProperty = { clearSearchOnSelect: boolean, multiple: boolean };
export type ClearSearchOnBlurFunction = (props: ClearSearchOnBlurFunctionProperty) => boolean;
export type CreateOptionFunction = (option: string | number) => object | string | number;
export type DropdownShouldOpenFunction = (component: Component) => boolean;
export type FilterFunction = (options: [], search: string, component: Component) => boolean;
export type FilterByFunction = (option: object | string, label: string, search: string, component: Component) => boolean;
export type GetOptionKeyFunction = (option: object | string) => string;
export type GetOptionLabelFunction = (option: object | string) => string;
export type ReduceFunction = (option: object | string) => object | string;
export type ResetOnOptionsChangeFunction = (newOption: object | string, oldOption: object | string, selectedValue: object | string) => boolean;
export type SelectableFunction = (option: object | string) => boolean;

export type OptionSelectingHandler = (option: string | object) => void;
export type OptionSelectedHandler = (option: string | object) => void;
export type OptionDeselectingHandler = (option: string | object) => void;
export type OptionDeselectedHandler = (option: string | object) => void;
export type OptionCreatedHandler = (option: string | object) => void;
export type ToggleLoadingFunction = (toggle: boolean | null) => boolean;
export type SearchHandler = (search: string, toggleFunction: ToggleLoadingFunction) => void;

export interface VSelectProps {
    ariaLabel?: PropType<string>;
    appendToBody?: PropType<boolean>;
    autocomplete?: PropType<"off" | "on" | "name" | "email" | "username" | "new-password" | "one-time-code" | "organization-title" | "organization" | "country" | "country-name" | "postal-code" | "language" | "sex" | "url">;
    autoscroll?: PropType<boolean>;
    autoSelect?: PropType<boolean>;
    calculatePosition?: PropType<CalculatePositionFunction>;
    clearable?: PropType<boolean>;
    clearSearchOnBlur?: PropType<ClearSearchOnBlurFunction>;
    clearSearchOnSelect?: PropType<boolean>;
    closeOnSelect?: PropType<boolean>;
    completeSearch?: PropType<boolean>;
    components?: PropType<{
        Deselect: Component,
        OpenIndicator: Component,
    }>;
    createOption?: PropType<CreateOptionFunction>;
    deselectFromDropdown?: PropType<boolean>;
    dir?: PropType<"ltr" | "rtl" | "auto">;
    disabled?: PropType<boolean>;
    dropdownShouldOpen?: PropType<DropdownShouldOpenFunction>;
    filter?: PropType<FilterFunction>;
    filterable?: PropType<boolean>;
    filterBy?: PropType<FilterByFunction>;
    getOptionKey?: PropType<GetOptionKeyFunction>;
    getOptionLabel?: PropType<GetOptionLabelFunction>;
    inputId?: PropType<string>;
    label?: PropType<string>;
    loading?: PropType<boolean>;
    multiple?: PropType<boolean>;
    noDrop?: PropType<boolean>;
    options?: PropType<[]>;
    optgroups?: PropType<[]>;
    pasteSeparator?: PropType<string>;
    pasteTrim?: PropType<boolean>;
    placeholder?: PropType<string>;
    pushTags?: PropType<boolean>;
    reduce?: PropType<ReduceFunction>;
    resetOnOptionsChange?: PropType<boolean | ResetOnOptionsChangeFunction>;
    searchable?: PropType<boolean>;
    selectable?: PropType<SelectableFunction>;
    tabindex?: PropType<number>;
    taggable?: PropType<boolean>;
    transition?: PropType<string>
    uid?: PropType<string | number>
    value?: PropType<[] | object | string | number | null>
    modelValue?: PropType<[] | object | string | null>;
}

export interface VSelectEvents {
    open: () => void;
    close: () => void;
    'option:selecting': OptionSelectingHandler;
    'option:selected': OptionSelectedHandler;
    'option:deselecting': OptionDeselectingHandler;
    'option:deselected': OptionDeselectedHandler;
    'option:created': OptionCreatedHandler;
    'search': SearchHandler;
    'search:blur': () => void;
    'search:focus': () => void;
}


export interface FooterSlotProps {
    search: string;
    loading: boolean;
    searching: boolean;
    filteredOptions: [];
    deselect: DeselectFunction;
}

export type DeselectFunction = (option: object | number) => void;

export interface HeaderSlotProps {
    search: string;
    loading: boolean;
    searching: boolean;
    filteredOptions: [];
    deselect: DeselectFunction;
    inputId: string;
    selectedValue: [];
    open: boolean;
}

export interface ListFooterSlotProps {
    search: string;
    loading: boolean;
    searching: boolean;
    filteredOptions: [];
}

export interface ListHeaderSlotProps {
    search: string;
    loading: boolean;
    searching: boolean;
    filteredOptions: [];
}

export interface NoOptionsSlotProps {
    search: string;
    loading: boolean;
    searching: boolean;
}

export interface OpenIndicatorSlotProps extends VNodeProps {
    attributes: {
        [key: string]: any;
    };
}

export interface SearchSlotProps extends VNodeProps {
    attributes: {
        [key: string]: any;
    };
    events: {
        compositionstart: () => void;
        compositionend: () => void;
        keydown: (event: KeyboardEvent) => void;
        blur: (event: FocusEvent) => void;
        focus: (event: FocusEvent) => void;
        input: (event: InputEvent) => void;
    };
}

export interface SelectedOptionContainerSlotProps {
    option: object | string;
    deselect: DeselectFunction;
    disabled: boolean;
    multiple: boolean;
}

export interface SpinnerSlotProps {
    loading: boolean;
}

export interface VSelectSlots extends Slots {
    footer?: SlotProps<FooterSlotProps>;
    header?: SlotProps<HeaderSlotProps>;
    'list-footer'?: SlotProps<ListFooterSlotProps>;
    'list-header'?: SlotProps<ListHeaderSlotProps>;
    'no-options'?: SlotProps<NoOptionsSlotProps>;
    'open-indicator'?: SlotProps<OpenIndicatorSlotProps>;
    option?: SlotProps<object | string>;
    search?: SlotProps<SearchSlotProps>;
    'selected-option'?: SlotProps<object | string>;
    'selected-option-container'?: SlotProps<SelectedOptionContainerSlotProps>;
    'spinner'?: SlotProps<SpinnerSlotProps>;
}

const vSelect: Component<VSelectProps, VSelectEvents, VSelectSlots, ComputedOptions, EmitsOptions>;


export default vSelect;

