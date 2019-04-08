import { Map, List } from 'immutable';

export interface IProps {
  currentCityId?: string;
  cities?: List<Map<string, any>>;
  updateCurrentCityId: (id: string) => {};
}
