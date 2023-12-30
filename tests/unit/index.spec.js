import {describe, expect, it, vi} from 'vitest'
import mixins from '@/mixins/index';
import VueSelect from '@/index';

describe('Index files', () => {
    it('exports mixins', () => {
        expect(mixins).toHaveProperty('ajax');
        expect(mixins).toHaveProperty('pointer');
        expect(mixins).toHaveProperty('pointerScroll');
    });
    it('exports component', () => {
        expect(VueSelect.props).toHaveProperty('autoSelect');
        expect(VueSelect.props).toHaveProperty('pasteSeparator');
        expect(VueSelect.props).toHaveProperty('pasteTrim');
    });
})