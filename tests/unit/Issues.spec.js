import {describe, expect, it, vi} from 'vitest'
import {mountDefault,selectWithProps} from '#/helpers.js'

describe('IE Issues', () => {
    it('The dropdown menu does not collapse when clicking on the scrollbar in IE', async () => {
        const Select = mountDefault(
            {options: ['one','two']},
        )
        let spyUp = vi.spyOn(Select.vm, 'onMouseUp')
        let spyDown = vi.spyOn(Select.vm, 'onMousedown')
        Select.vm.open = true
        await Select.vm.$nextTick()
        Select.get('.vs__dropdown-option').trigger('mousedown')
        expect(Select.vm.mousedown).toEqual(true)
        Select.get('.vs__dropdown-option').trigger('mouseup')
        expect(Select.vm.mousedown).toEqual(false)
        expect(spyUp).toHaveBeenCalledTimes(1)
        expect(spyDown).toHaveBeenCalledTimes(1)
    })
    it('emit search:blur when search is empty, options list empty and mousedown is emitted, but mouseup not emitted',() => {
        /**
         * @todo To reproduce it in reality. IE11 is probably needed for this.
         */
        const Select = selectWithProps({
            options: [],
        })
        Select.vm.open = true
        Select.vm.mousedown = true;
        Select.vm.searching = false;
        Select.vm.onSearchBlur()

        expect(Select.emitted()['search:blur'].length).toBe(1)
        expect(Select.vm.search).toEqual('')
    });
})