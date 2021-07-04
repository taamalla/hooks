import {useState} from 'react'
import {Modal,Button} from 'react-bootstrap'

function AddMovie({handleAdd}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,settitle]=useState('')
    const [desciption,setdescription]=useState('')
    const [posterUrl,setposteUrl]=useState('')
    const [rate,setrate]=useState(0)
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div style={{display:'flex', flexDirection:'column'}}>
              <label> Title </label>
              <input type='text' onChange={(e)=>settitle(e.target.value)} value={title}/>
              <label> Desciption </label>
              <input type='text' onChange={(e)=>setdescription(e.target.value)} value={desciption}/>
              <label> URL </label>
              <input type='text' onChange={(e)=>setposteUrl(e.target.value)} value={posterUrl}/>
              <label> Rate </label>
              <input type='text' onChange={(e)=>setrate(e.target.value)} value={rate}/>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>handleAdd({id:Math.random(), title, desciption, posterUrl, rate})}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default AddMovie