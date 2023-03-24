import { Link } from "react-router-dom";

const ContactComponent = ({ name, address, number, id }) => {
  return (
    <>
      <div className="col-md-4 col-12 border border-success ">
        {/* Card of contact as a col */}
        <div className="row my-2">
          <div className="col-4">
            <img
              style={{ maxWidth: 100 }}
              src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_960_720.png"
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col-8">
            <h5 className="card-title">{name}</h5>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">address: {address}</li>
              <li className="list-group-item"> {number}</li>
            </ul>

            <div className="ms-auto mt-2 d-flex">
              <Link
                className="text-success alert alert-success alert-link"
                to={`/my-contacts/edit/${id}`}
              >
                edit contact<i className="bi bi-pencil"></i>
              </Link>
              <Link
                className=" font-weight-bold text-danger alert alert-primary"
                to={`/my-contacts/delete/${id}`}
              >
                delete contact<i className="bi bi-trash"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactComponent;
