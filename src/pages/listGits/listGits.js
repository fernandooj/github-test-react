import React  from "react"
import {  Row, Col } from 'antd';
import { Link }       from 'react-router-dom';
import {ContainerList, Titulo, Texto, Avatar, Fecha } from './style.js'
 


export const ListGits =(props)=>{
    const {created_at, description, owner, id} = props
    return(
        <ContainerList>
            <Link to={`/detail/${id}`}>
                <Row>
                    <Col span={12}>
                        <Avatar src={owner.avatar_url} />
                        <Titulo>{owner.login}</Titulo>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Texto>{description ?description.substring(0,100) :"" }</Texto>
                        <Fecha>{created_at}</Fecha>
                    </Col>
                </Row>
            </Link>
        </ContainerList>
    )
}
 
   