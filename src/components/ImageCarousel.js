import { Carousel } from 'react-carousel-minimal';

export const ImageSlider = ({ id, images }) => {
  const data = [
    {
      image: require(`../img/${id}/img1.${images.first}`),
      caption: '',
    },
    {
      image: require(`../img/${id}/img2.${images.second}`),
      caption: '',
    },
    {
      image: require(`../img/${id}/img3.${images.third}`),
      caption: '',
    },
    {
      image: require(`../img/${id}/img4.${images.fourth}`),
      caption: '',
    },
  ];

  return (
    <>
      <figure className="yo flex justify-center pt-6 pb-6 z-[-10]">
        <Carousel
          data={data}
          time={4000}
          width="1152px"
          height="648px"
          radius="10px"
          automatic={true}
          slideBackgroundColor="transparent"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="140px"
          style={{
            textAlign: 'center',
            maxWidth: '1152px',
            maxHeight: '648px',
          }}
        />
      </figure>
    </>
  );
};
