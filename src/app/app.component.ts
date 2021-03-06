import { Component } from '@angular/core';

import { FieldType } from 'mini/model/FieldType.enum';
import { IField } from 'mini/model/IField.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="reflex-container">
      <mini-component
        [handler]="handler"
        [fields]="fields"
        [change]="change"
      ></mini-component>
    </div>
  `
})
export class AppComponent {

  fields: IField[] = [
    {
      type: FieldType.Group,
      columns: '12',
      title: 'Fields:',
      fields: [
        {
          type: FieldType.Label,
          title: 'TagBox',
          columns: '4',
        },
        {
          type: FieldType.TagBox,
          name: 'arr',
          items: ['a', 'b', 'c'],
          defaultValue: ['b'],
          columns: '8',
        },
        {
          type: FieldType.Label,
          title: 'SelectBox',
          columns: '4',
        },
        {
          type: FieldType.SelectBox,
          name: 'arr1',
          items: ['a', 'b', 'c'],
          columns: '8',
        },
        {
          type: FieldType.Label,
          title: 'TextBox',
          columns: '4',
        },
        {
          type: FieldType.TextBox,
          name: 'text',
          columns: '8',
        },
        {
          type: FieldType.Label,
          title: 'CheckBox',
          columns: '4',
        },
        {
          type: FieldType.CheckBox,
          name: 'omg',
          columns: '8',
        },
      ]
    },
  ];

  handler = () => ({
    a: 'aaa',
    b: 'bbb',
    c: 'ccc',
    arr: ['a'],
    arr1: [],
    text: '',
    omg: true,
  })

  change = (changes) => console.log(changes);

}
