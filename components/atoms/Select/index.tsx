import * as React from 'react';
import { IProps } from './Select';

export default function Select(props: IProps) {

  const { value, name, onChangeHandler, options } = props;

  return (
    <select value={value} name={name} onChange={(event) => onChangeHandler(event)} >
      <option value=''>Any</option>
      {options.length && options.map((item: { id: number, name: string }) =>
        <option key={item.id} value={item.id}>{item.name}</option>
      )}
    </select>
  )

}
