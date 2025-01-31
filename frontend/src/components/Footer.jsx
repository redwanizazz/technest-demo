import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear() //JS function to get current year

  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                <p>Technest &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer