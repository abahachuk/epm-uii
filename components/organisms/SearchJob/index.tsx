import * as React from 'react';
import './style.scss';
import { IProps } from './SearchJob';
import Select from '../../atoms/Select';
import { updateCurrentCityId } from '../../../redux/actions/country.action';
import { connect } from 'react-redux';

class SearchJob extends React.Component<IProps> {
  constructor(props) {
    super(props);
    this.handleSelectorChange = this.handleSelectorChange.bind(this);
  }

  handleSelectorChange(event) {
    if (this.props.updateCurrentCityId) {
      this.props.updateCurrentCityId(event.target.value)
    }
  }

  render() {
    const { cities } = this.props;

    return (
      <div className="search-job">
        <div className="search-job__tbx autocomplete">
          <input className="tbx tbx_full" type="text" placeholder="Vacancy Title" />
        </div>
        <div className="search-job__ddn">
          <div className="ddn">
            <span className="ddn__label">Location</span>
            <Select
              name='locations'
              value={this.props.currentCityId}
              onChangeHandler={this.handleSelectorChange}
              options={cities}
            />
          </div>
        </div>
        <div className="search-job__btn">
          <button className="btn btn_action btn_full btn_large">Search job</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateCurrentCityId: (cityId: string) => {
      dispatch(updateCurrentCityId(cityId))
    }
  };
}

export default connect(null, mapDispatchToProps)(SearchJob);
