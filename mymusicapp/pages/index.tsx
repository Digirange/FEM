import GradientLayout from "../componenets/gradientLayout";

const Home = () => {
  return (
    <GradientLayout
      roundImage
      color="green"
      subtitle="profile"
      title="Marques Stewart"
      description="15 public playlists"
      image="hardenEmbiid.jpg"
    >
      <div>home page</div>
    </GradientLayout>
  );
};

export default Home;
