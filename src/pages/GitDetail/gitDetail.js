import React , {useEffect}  from "react"
import {Row, Col, Empty} from 'antd';
import {connect}  	 from 'react-redux'
import {getDetail} 	 from '../../redux/actionCreator' 
import store  	     from '../../redux/store.js' 
import {ContainerList, H1, Titulo, Avatar, Texto, Fecha} from './style.js'
import { Link }      from 'react-router-dom';

 
const GitDetail =(props)=>{
    let {owner, description, html_url, created_at} = props.git
    
    ///////////////////////////////////////////////////////
    ////////////////////////   funcion del detalle del repo
    ///////////////////////////////////////////////////////
    useEffect(() => {
        props.getDetail(props.match.params.id)
    })
    return(
        <Row>
            {
                Object.keys(props.git).length===0
                ?<Col span={8} offset={8}>
                    <ContainerList>
                        <H1>
                            <Link to="/">Regresar</Link>
                        </H1>
                        <Empty description="No existe este repositorio" />
                    </ContainerList>
                </Col>
                :<Col span={8} offset={8}>
                    <ContainerList>
                        <H1>
                            <Link to="/">Regresar</Link>
                        </H1>
                        <Avatar src={owner &&owner.avatar_url} />
                        <Titulo>Nombre: {owner &&owner.login}</Titulo>    
                        <Texto>Descripción: {description}</Texto>    
                        <Fecha>Creado: {created_at}</Fecha>    
                        <a href={html_url} target="blank">Url Github</a>    
                    </ContainerList>
                </Col>
            }
        </Row>
    )
}

const mapStatetoPros =(state) =>{
    let git = state.git ?state.git :{}
	return{
		git,
	}
}
const mapsDispatchToProps = (dispatch) =>{
	return{
		getDetail(cust_id){
			store.dispatch(getDetail(cust_id))
		}
	}
}
 
 
GitDetail.defaultProps={
	git:{}
}
export default connect(mapStatetoPros, mapsDispatchToProps)(GitDetail)