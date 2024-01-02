import {describe, expect, it, vi} from 'vitest'
import mixins from '@/mixins/index';
import VueSelect from '@/index';

describe('Index files', () => {
    it('exports mixins', () => {
        expect(mixins).toHaveProperty('ajax');
        expect(mixins).toHaveProperty('pointer');
        expect(mixins).toHaveProperty('pointerScroll');
    });
})
describe('Component public contract', () => {
    it('described props', () => {
        expect(VueSelect.props).toHaveProperty('ariaLabel');
        expect(VueSelect.props).toHaveProperty('appendToBody');
        expect(VueSelect.props).toHaveProperty('autocomplete');
        expect(VueSelect.props).toHaveProperty('autoSelect');
        // autoscroll mixin
        expect(VueSelect.props).toHaveProperty('calculatePosition');
        expect(VueSelect.props).toHaveProperty('clearable');
        expect(VueSelect.props).toHaveProperty('clearSearchOnBlur');
        expect(VueSelect.props).toHaveProperty('clearSearchOnSelect');
        expect(VueSelect.props).toHaveProperty('closeOnSelect');
        expect(VueSelect.props).toHaveProperty('completeSearch');
        expect(VueSelect.props).toHaveProperty('components');
        expect(VueSelect.props).toHaveProperty('createOption');
        expect(VueSelect.props).toHaveProperty('deselectFromDropdown');
        expect(VueSelect.props).toHaveProperty('dir');
        expect(VueSelect.props).toHaveProperty('disabled');
        expect(VueSelect.props).toHaveProperty('dropdownShouldOpen');
        expect(VueSelect.props).toHaveProperty('filter');
        expect(VueSelect.props).toHaveProperty('filterable');
        expect(VueSelect.props).toHaveProperty('filterBy');
        expect(VueSelect.props).toHaveProperty('getOptionKey');
        expect(VueSelect.props).toHaveProperty('getOptionLabel');
        expect(VueSelect.props).toHaveProperty('inputId');
        expect(VueSelect.props).toHaveProperty('label');
        // loading mixin ajax
        expect(VueSelect.props).toHaveProperty('multiple');
        expect(VueSelect.props).toHaveProperty('noDrop');
        expect(VueSelect.props).toHaveProperty('options');
        expect(VueSelect.props).toHaveProperty('pasteSeparator');
        expect(VueSelect.props).toHaveProperty('pasteTrim');
        expect(VueSelect.props).toHaveProperty('placeholder');
        expect(VueSelect.props).toHaveProperty('pushTags');
        expect(VueSelect.props).toHaveProperty('reduce');
        expect(VueSelect.props).toHaveProperty('resetOnOptionsChange');
        expect(VueSelect.props).toHaveProperty('searchable');
        expect(VueSelect.props).toHaveProperty('selectable');
        expect(VueSelect.props).toHaveProperty('tabindex');
        expect(VueSelect.props).toHaveProperty('taggable');
        expect(VueSelect.props).toHaveProperty('transition');
        expect(VueSelect.props).toHaveProperty('uid');
    });
});