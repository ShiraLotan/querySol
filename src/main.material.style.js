import { styled } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

export const CustomTextField = styled(TextField)({
  position:'relative',
  right:'10px',
  borderRadius: '8px',
  width: '700px',
  textAlign: 'right',
  backgroundColor:'white',
  borderColor: 'grey'
});
export const CustomFab = styled(Fab)({
  backgroundColor: '#3bb2e0 ',
  height: '30px',
  color: 'white',
  margin: 'auto 5px',
  position:'relative',
  top: '13px'

 
});


