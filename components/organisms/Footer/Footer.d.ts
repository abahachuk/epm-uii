import { Map } from 'immutable';

export interface IProps {
  footer: {
    instagram: string[],
    nav: [{
      label: string,
      url: string
    }]
  };
  country: Map<string, any>;
}