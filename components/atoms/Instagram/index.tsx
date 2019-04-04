import * as React from 'react';
import './style.scss';
import images from '../Images';

interface Props {
  instagram: string[]
}

export default class Instagram extends React.Component<Props> {

  render() {

    let { instagram } = this.props;

    return (
      <div className="instagram">
        <div className="instagram__info">
          <div className="instagram__title">Instagram</div>
          <div className="instagram__account">@epam_belarus</div>
          <button className="btn btn_transparent instagram__btn">Follow us</button>
        </div>
        { !!instagram.length && <div className="instagram__images">
          { instagram.map((image, index) =>
            <img src={ `${images(image)}` } alt="" className="instagram__img" key={ index } />
          ) }
        </div> }
      </div>
    );
  }
}
