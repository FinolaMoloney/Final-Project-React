import '../components/About.css';
import NourishAndSproutLogo from '../images/home/NourishAndSproutLogo.jpg';

function About(){
    return(
        <div className="background">
            <div className="row banner">
                <h3>ABOUT US</h3>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <h3>OUR STORY</h3>
                    <div className="row space">
                        <div className="col-sm-4">
                            <p className="textPara">
                                Nourish and Sprout is a pre made meal delivery service for baby and child food. Our goal at Nourish and Sprout is to take the stress out of making food for parents and ensuring babies and children are getting the right nutrients. Nourish and sprout provide a number of healthy well-balanced meals based on recommended portion sizes. All meals contain a mixture of foods from the food pyramid.
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <img className="smallLogo" src={NourishAndSproutLogo} alt="NourishAndSproutLogo" />
                        </div>
                        <div className="col-sm-4">
                            <p className="textPara">May 2023 - The Nourish and Sprout journey begins.</p>
                            <p className="dash">|<br/>|</p>
                            <p className="textPara">August 2023 - We expanded our reach with the launch of our website. You can now find out more about us online and reach us easily!</p>
                            <p className="dash">|<br/>|</p>
                            <p className="textPara"> December 2023 - We plan to stock our products in stores around Ireland.</p>
                            <p className="dash">|<br/>|</p>
                            <p>When will your journey with Nourish and Sprout begin?</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>FAQs</h3>
                        <div className="card faq-card">
                            <h6>What can we do if we have an issue with our order?</h6>
                            <div className="card-body">
                                <div className="faq-card">
                                    <p className="textPara">If you experience any issues with your order please reach out to us. You can fill in the contact form provided and some one from the team will get back to as soon as possible.</p>
                                </div>
                            </div>
                            <h6>How much is delivery?</h6>
                            <div className="card-body">
                                <div className="faq-card">
                                    <p className="textPara">Republic of Ireland (next day delivery*): €9.00 <br/>Northern Ireland (1-2 working days*): €9.00 <br/>Northern Ireland (next day delivery*): €12.00</p><small><br/>*to avail of next day delivery the order must be made by 1pm. Delivery for all parcels is only Monday-Friday.</small>
                                </div>
                            </div>
                            <h6>What to do if we have to return a product?</h6>
                            <div className="card-body">
                                <div className="faq-card">
                                    <p className="textPara">We're sorry to hear you're not 100% happy with your product, but we are more than happy to accept a refund. Due to the nature of the product we can only accept refunds within 7 days of receiving the product. Please reach out to us on nourishandsprout@refunds.com and we will organise the refund.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br/>
            </div>
        </div>
    )

}

export default About;