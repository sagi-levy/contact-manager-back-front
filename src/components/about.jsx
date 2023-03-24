import PageHeader from "./pageHeader";
const About = ({ title }) => {
  return (
    <>
      <PageHeader title={<h1>About Page</h1>} />
      <div className="row">
        <div className="col-12 mt-4">
          <p>
            In this project I will show my abilities in website development both
            on the server side and on the client side. The website will include
            the possibility to create a contact, add him to the contact list,
            edit his details and also delete him from the list. Each time a
            command is clicked, an http request will be sent to the server I set
            up which will execute the same commands according to the url
            addresses. In this project, I used React.js, Node.js, express,
            axios, bootstrap, etc., in order to build the best website I can and
            meet the conditions for the task
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
