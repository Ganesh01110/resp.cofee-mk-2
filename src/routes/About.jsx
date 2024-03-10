import "../../src/cofee.css";

const About = () =>{

//   console.log(items);


    return (
        <main>
            <section className="about" id="about">
        <div>
              <h1 className="heading"><span>about</span> us</h1>
              <div id="row">
                <div id="images">
                    {/* <img src="photo-1574279832544-5c67e25b22ca.avif" alt="">   */}
                </div>
                <div className="content">
                        <h3>what makes our coffee special?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste perferendis dignissimos dolor tenetur odio doloribus asperiores! Placeat delectus, soluta et mollitia ut debitis beatae nisi! Labore assumenda dignissimos a! Doloremque dignissimos cupiditate facilis voluptate quia rem dolorum ratione debitis error.</p>
                        <a href="#" className="btnnn">learn more</a>
                    
                </div>
            </div> 
        </div>
    </section> 
        </main>
    )
}

export default About ;