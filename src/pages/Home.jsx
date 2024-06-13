import { Col, Container, Row } from "react-bootstrap"
import HomeBanner from "../components/HomeBanner"
import { useEffect } from "react"
import SingleProduct from "../components/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productSlice";

function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.data);

    useEffect(() => {
        fetch('./products.json')
            .then((data) => data.json())
            .then((res) => dispatch(getProducts(res.products)));
    }, [dispatch]);
    console.log(products);

    return (
        <>
            <HomeBanner />
            <Container className="d-flex flex-column align-items-center">
                <Row>
                    <Col className="my-3">
                        <h2>
                            Latest Products
                        </h2>
                    </Col>
                </Row>
                <Row>

                    {products.map((product, id) => (
                        <SingleProduct key={id} product={product} /> // Props - Unidirectional - parent to child only
                        // props drilling
                    ))}
                </Row>
            </Container>
        </>

    )

}

export default Home