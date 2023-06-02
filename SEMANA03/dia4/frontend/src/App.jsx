import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Table} from 'react-bootstrap'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = ({
      tareas:[]
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

  render(){
    return(
      <div>
        <Container>
          <h1>Lista de Tareas</h1>
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Tarea</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tareas.map((tarea)=>{
                return(
                  <tr key={tarea.id}>
                    <td>{tarea.id}</td>
                    <td>{tarea.descripcion}</td>
                    <td>{tarea.estado}</td>
                    <td>
                      ...
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
