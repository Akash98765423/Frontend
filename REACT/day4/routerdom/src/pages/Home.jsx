const Home = () => {

    const heading = "Home Page"
    const content = "Welcome to our website."

  return (
    <div className="bg-amber-300 h-100 flex justify-center items-center text-2xl">
      <h1>{heading}</h1>
      <p>{content}.</p>
    </div>
  );
};

export default Home;