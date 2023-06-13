export const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      id="bg-video"
      className="h-screen object-cover fixed z-[-1] min-h-full min-w-full bg-fixed 
    bg-blend-darken"
    >
      <source src={require('../media/cyberpunk-bg.mp4')} type="video/mp4" />
    </video>
  );
};
