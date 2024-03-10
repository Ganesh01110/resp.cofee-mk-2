const Contact = () =>{

    //   console.log(items);
    
    
        return (
            <main>
                <section className="contact" id="contact">
        <h1 className="heading"><span>contact </span>us </h1>
        <div className="row">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60246.472351170516!2d84.80825695!3d19.308245149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d500ef1cb60ad%3A0x5b75778874294ff!2sBrahmapur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1702833965254!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <form action="">
                <h1>Get in touch.</h1>
                <div className="inputbox">
                    <i className="ri-user-line"></i>
                    <input type="text" placeholder="name"/>
                </div>

                <div className="inputbox">
                    <i className="ri-mail-line"></i>
                    <input type="email" placeholder="email"/>
                </div>

                <div className="inputbox">
                    <i className="ri-phone-line"></i>
                    <input type="number" placeholder="phone-number"/>
                </div>
                <input type="submit" value="contact now" className="btnnn"/>
            </form>
        </div>

    </section>
            </main>
    )
}

export default Contact ;