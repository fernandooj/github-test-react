import axios from 'axios'
 
///////////////////////////////////////////////////////////
////////////			OBTIENE TODOS LOS REPOSITORIOS
///////////////////////////////////////////////////////////
const getGits = () =>{
	return dispatch =>{
		return axios.get(`https://api.github.com/gists/public`)
		.then(res=>{
			dispatch({
				type:'GET_GITS',
				gits:res.data
			})
		})
		.catch(err=>{
			console.log(err)
		})
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////			DEVUELVE SOLO UN REPOSITIORIO, PARAMETOR ID== IDENTIFICADOR DEL REPO
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const getDetail = (id) =>{
	return dispatch =>{
		return axios.get(`https://api.github.com/gists/${id}`)
		.then(res=>{
			dispatch({
				type:'GET_GITS_DETAIL',
				git:res.data
			})
		})
		.catch(err=>{
			console.log(err)
		})
	}
}

export { getGits, getDetail }



