import Immutable from 'immutable';

export interface IItem extends Immutable.Map<string, any> {
  id: string;
  name: string;
  address: string;
  zipCode: string;
  phone?: string;
  phoneExt?: string;
  fax?: string;
  image: string;
}

export interface IProps {
  cities: Immutable.List<IItem>;
  country: string;
}
