import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Table,Form,Button} from 'react-bootstrap'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = ({
      tareas:[],
      descripcion:'',
      estado:'pendiente',
      id:0,
      pos:null,
      tituloBoton:'Agregar Tarea'
    })
    this.cambioDescripcion = this.cambioDescripcion.bind(this)
    this.guardar = this.guardar.bind(this)
  }

  cambioDescripcion(e){
    console.log(e.target.value)
    this.setState({
      descripcion : e.target.value
    })
  }

  componentDidMount(){
    console.log("cargando tareas...")
    axios.get('http://localhost:5000/tarea')
    .then(res=>{
      console.log(res.data.content)
      this.setState({
        tareas : res.data.content
      })
    })
  }

  guardar(e){
    e.preventDefault()
    const dataTarea = {
      descripcion : this.state.descripcion,
      estado : this.state.estado
    }

    axios.post('http://localhost:5000/tarea',dataTarea)
    .then(res=>{
        console.log(res.data.content)
        this.state.tareas.push(res.data.content)
        var temp = this.state.tareas
        this.setState({
          descripcion:'',
          tareas:temp,
          tituloBoton:'Agregar Tarea',
          pos:null,
          id:0
        }).catch((error)=>{
          alert(error.toString())
        })
      }
    )
  }

  mostrar(cod,index){
    axios.get('http://localhost:5000/tarea/'+cod)
    .then(res=>{
      this.setState({
        pos:index,
        descripcion:res.data.content.descripcion,
        id:res.data.content.id,
        tituloBoton:'Actualizar Tarea'
      })
    })
  }

  render(){
    return(
      <div>
        <Container>
          <h1>Lista de Tareas</h1>
          <Form onSubmit={this.guardar}>
            <Form.Group className="mb-3">
              <Form.Control type="text"
                value={this.state.descripcion}
                onChange={this.cambioDescripcion}
              />
              <Button variant="primary" type="submit">
                {this.state.tituloBoton}
              </Button>
            </Form.Group>
          </Form>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Tarea</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tareas.map((tarea,index)=>{
                return(
                  <tr key={tarea.id}>
                    <td>{tarea.id}</td>
                    <td>{tarea.descripcion}</td>
                    <td>{tarea.estado}</td>
                    <td>
                      <Button variant="success" onClick={()=>this.mostrar(tarea.id,index)}>
                        Editar
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
}

export default App
