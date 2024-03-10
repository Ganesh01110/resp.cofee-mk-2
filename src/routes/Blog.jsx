const Blog = () => {
  //   console.log(items);

  return (
    <main>
      <section className="blog" id="blog">
        <h1 className="heading">
          our <span>blogs</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1585349048087-e7363ae659ad?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="content">
              <a href="" className="title">
                tasty and refreshing cofee
              </a>
              <span>by admin/17 dec 2023</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                eius maiores iure qui laudantium a est ut, pariatur harum{" "}
              </p>
              <a href="" className="btnnn">
                read more{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
