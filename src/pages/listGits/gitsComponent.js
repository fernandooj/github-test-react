import React , {useState, Fragment}  from "react"
import {Row, Col, Input, Empty, Pagination} from 'antd';
import {connect}  		   from 'react-redux'
import { createFilter}     from 'react-search-input';
import {H1}            from './style.js'
import {ListGits}          from './listGits'

const { Search } = Input;
const KEYS_TO_FILTERS = ["description", "owner.login"]

const GitComponent =(props)=>{
    let {gits, gitsFilter} = props
    const [terminoBuscador, setTerminoBuscador] = useState("")           /// edita el valor del buscador
    const [inicio, setInicio] = useState(0)                              /// edita el valor inicial para la paginacion
    const [final,  setFinal] = useState(10)                              /// edita el valor final para la paginacion
    gits = gits.slice(inicio, final)                                     /// limita el numero de resultados a mostrar
    gits = gits.filter(createFilter(terminoBuscador, KEYS_TO_FILTERS))   ///// filtra cuando se hace una busqueda en el input
    

    return(
        <Row>
            <Col span={8} offset={8}>
                <H1>Test Playusmedia</H1>
                <Search 
                    onChange={value => setTerminoBuscador(value.target.value) }
                    placeholder="Search Git" 
                    allowClear
                    enterButton 
                /> 
                {
                    gits.length===0
                    ?<Empty description="No hemos encontrados repositorios"/>
                    :<Fragment>
                        {
                            gits.map((item, index)=>{
                                return  <ListGits {...item} key={index} />
                            })
                        }
                        {
                            gits.length>=10
                            &&<Pagination 
                                defaultCurrent={1} 
                                total={gitsFilter.length} 
                                onChange={(value) => {setInicio(inicio===0 ?10 :(value*10)-10); setFinal(value*10) } } />
                        }
                    </Fragment>
                }
            </Col>
        </Row>
    )
}

const mapStatetoPros =(state) =>{
	return{
		gits:state.gits,
		gitsFilter:state.gits,
	}
}
 
 
GitComponent.defaultProps={
	gits:[]
}
export default connect(mapStatetoPros)(GitComponent)