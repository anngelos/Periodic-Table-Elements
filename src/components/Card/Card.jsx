import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Card.css'

export default function SimpleCard(props) {
  function OpenModal() {
    props.searchElement()   
  }

function setValue(e) {
  props.setSearch(e.target.value)
}

  return (    
    <Card>
        <h1>{props.title}</h1>
        <TextField value={props.search} onChange={e => {setValue(e)}} id="outlined-basic" label="Digite o nome do elemento a ser encontrado" size="small" variant="standard"/>
        <br/>
        <Button variant="contained" color="primary" size="small" onClick={OpenModal} disableElevation>Procurar</Button>
    </Card>
  );
}
