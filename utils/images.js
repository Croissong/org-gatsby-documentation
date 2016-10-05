import React, { Component, PropTypes } from 'react';
import Lightbox from 'react-images';

class Images extends Component {
  constructor () {
    super();
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  } 
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }
  
  render () {
    return (
      <div>
        <Lightbox
	  currentImage={this.state.currentImage}
	  images={this.props.images}
	  isOpen={this.state.lightboxIsOpen}
	  onClickImage={this.handleClickImage}
	  onClickNext={this.gotoNext}
	  onClickPrev={this.gotoPrevious}
	  onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox} 
        />
      </div>
    );
  }
};

Images.propTypes = {
  images: PropTypes.array 
};

function openLightbox (state, e) {
  e.preventDefault();
  return {
    ...state,
    currentImage: parseInt(e.target.getAttribute('i')),
    lightboxIsOpen: true,
  };
}

export default { Images, openLightbox };
