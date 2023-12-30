import {describe, expect, it, vi} from 'vitest'
import {mountDefault} from '#/helpers.js'

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

})