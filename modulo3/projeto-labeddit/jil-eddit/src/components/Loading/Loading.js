import React from 'react'
/* import CircularProgress from '@material-ui/core/CircularProgress' */
import LoadingImg from '../../assets/img/loading.gif'
import { LoadingContainer, LoadingImgStyle, PLoading } from './styled'

const Loading = () => {
  return (
    <LoadingContainer>
      <PLoading>Loading</PLoading>
      <LoadingImgStyle src={LoadingImg} alt='logovirando'/>
    </LoadingContainer>
  )
}

export default Loading