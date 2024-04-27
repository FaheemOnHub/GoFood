export default function Card() {
  return (
    <div>
      <div
        className="card mt-3"
        style={{
          width: "18rem",
          marginTop: "2rem",
          maxHeight: "360px",
          maxWidth: "300px",
        }}
      >
        <img
          src="https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text</p>
          <div className="container w-100 ">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from({ length: 6 }, (_, i) => (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="m-2 h-100  bg-success roundedf">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
