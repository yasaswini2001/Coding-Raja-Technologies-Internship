import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
function Personal(){
    return(
        <Form style={{margin:'10px'}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter Name</Form.Label>
                            <Form.Control type="text" placeholder="ex : Gonthuna. yasaswini" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="ex : +91 1234567890" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example Address</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Address"/>
                    </Form.Group>
                    <InputGroup className="mb-3">
                        <InputGroup.Text style={{margin:'10px'}}>District And State</InputGroup.Text>
                            <Form.Control aria-label="First name" style={{margin:'10px'}}/>
                            <Form.Control aria-label="Last name" style={{margin:'10px'}}/>
                    </InputGroup>
                    <Form.Select aria-label="Default select example">
                        <option disabled selected value>Payment</option>
                        <option value="1">CreditCard</option>
                        <option value="2">DebitCard</option>
                        <option value="3">Cash On delivery</option>
                        </Form.Select><br></br>
                        <Button variant="primary">Proceed to Payment</Button>
                </Form>
    )
}
export default Personal;