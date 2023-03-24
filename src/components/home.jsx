import PageHeader from "./pageHeader";
const Home = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            <h1>
              Home Page<i className="bi bi-geo-fill"></i>
            </h1>
            <p>
              Hi Patricia. First I want to thank you for the opportunity, I hope
              you like the project. I admit that it took me a little more time
              than I thought but I'm happy that it took a little more resources
              out of me and a desire to improve. You are welcome to click on my
              contacts and start managing contacts
            </p>
            <h3 className="text-primary">
              {" "}
              You are welcome to click on my contacts and start managing
              contacts
            </h3>
          </>
        }
      />
    </>
  );
};
export default Home;
