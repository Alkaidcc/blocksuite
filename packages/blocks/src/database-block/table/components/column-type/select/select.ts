import './multi-tag-view.js';

import { customElement } from 'lit/decorators.js';
import { html, literal } from 'lit/static-html.js';

import type { SelectColumnData } from '../../../../common/column-manager.js';
import {
  DatabaseCellElement,
  defineColumnRenderer,
} from '../../../register.js';
import { SelectCellEditing } from './select-cell-editing.js';

@customElement('affine-database-select-cell')
class SelectCell extends DatabaseCellElement<string, SelectColumnData> {
  static override tag = literal`affine-database-select-cell`;

  cellType = 'select' as const;

  override render() {
    const value = this.value ? [this.value] : [];
    return html`
      <affine-database-multi-tag-view
        .value="${value}"
        .options="${this.columnData.options}"
      ></affine-database-multi-tag-view>
    `;
  }
}

export const SelectColumnRenderer = defineColumnRenderer(
  'select',
  {
    Cell: SelectCell,
    CellEditing: SelectCellEditing,
  },
  {
    displayName: 'Select',
  }
);
