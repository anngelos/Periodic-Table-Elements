import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import './Modal.css'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog open={props.open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
        <DialogTitle id="alert-dialog-slide-title">[DADO ENCONTRADO]</DialogTitle>
        <DialogContent>
            <strong>Nome:</strong> {props.dataelement.name} <br/>
            <strong>Símbolo:</strong> {props.dataelement.symbol} <br/>
            <strong>Número Atômico:</strong> {props.dataelement.atomic_number} <br/>  
            <strong>Massa:</strong> {props.dataelement.atomic_weight}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
