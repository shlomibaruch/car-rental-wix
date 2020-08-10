import React, { Component } from 'react'
import '../components/navbar.css';
import { FaCheck } from 'react-icons/fa'
import Bunner from '../components/Bunner';
import { CarContext } from '../context/context'
import { Link } from 'react-router-dom';
import StyledHero from '../components/StyledHero';
export default class SingleCar extends Component {

    static contextType = CarContext;
    constructor(props) {
        super(props)
        console.log(this.props);

        this.state = {
            carID: this.props.match.params.search_car,
            carGallery: 0
        }
    };
    componentDidMount() {

    }
    render() {
        const { getCar } = this.context;
        const car = getCar(this.state.carID)
        console.log(car);

        if (!car) {
            return <div className="error">
                <h1>ERROR</h1>
                <Link to="/cars">
                    Go To Cars
                </Link>
            </div>
        };
        const { carName, model, price, year, featured, pic, description } = car;
        return (
            <>
                <StyledHero img={pic[this.state.carGallery] || 'https://cdn.pixabay.com/photo/2013/07/13/11/44/car-158548__340.png'}>
                    <Bunner title={carName + " " + model}>
                        <div className='carGalleryContainer'>
                            <div className='car-imgages'>
                                <img className='bigImgGallery' style={{ minHeight: '390px' }} src={pic[this.state.carGallery]} />

                                <nav style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0)' }}>


                                    {pic.map((p, i) => {
                                        return <img key={i} style={{ margin: '2px', minHeight: '76px' }} width="10%" src={p} onClick={() => {
                                            this.setState({ carGallery: i })
                                        }} />
                                    })}
                                </nav>
                            </div>
                            <div className='car-info'>

                                <h3>{featured ? <FaCheck /> : 'no'}</h3> {/* You need To add if the car new or not in the featured place... */}
                                <h2>Year</h2>
                                <p>{year}</p>
                                <h2>Price</h2>
                                <p>: $ {price}</p>
                                <p className="description">{description}</p>
                            </div>


                        </div>
                    <button><Link to='/cars'>Back To Cars</Link></button>
                    </Bunner>
                </StyledHero>
                <div>

                </div>
            </>
        )
    }
}
