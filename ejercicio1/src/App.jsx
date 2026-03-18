import { useState } from 'react'
import './App.css'

import Accordion from './components/Accordion'
import Alert from './components/Alert'
import Badge from './components/Badge'
import Breadcrumb from './components/Breadcrumb'
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'
import Card from './components/Card'
import Carousel from './components/Carousel'
import CloseButton from './components/CloseButton'
import Collapse from './components/Collapse'
import Dropdown from './components/Dropdown'
import ListGroup from './components/ListGroup'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import Offcanvas from './components/Offcanvas'
import Pagination from './components/Pagination'
import Placeholder from './components/Placeholder'
import Popover from './components/Popover'
import Spinner from './components/Spinner'
import Toast from './components/Toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
        
        <Accordion/>

        <Alert/>

        <Badge/>

        <Breadcrumb/>

        <Button/>

        <ButtonGroup/>

        <Card/>

        <Carousel/>

        <CloseButton/>

        <Collapse/>

        <Dropdown/>

        <ListGroup/>

        <Modal/>

        <Navbar/>

        <Offcanvas/>

        <Pagination/>

        <Placeholder/>

        <Popover/>

        <Spinner/>

        <Toast/>
        
      </div>
    </>
  )
}

export default App