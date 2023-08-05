import { Box, Button, Typography} from '@mui/material';
import { Link, } from 'react-router-dom';
import Lichniynav from "../LichniyNav/Lichniynav"
const Lichniy = () => {
   
 return (
        <Box>
            <Box className="lichniy" sx={{display: 'flex',gap: '30px'}}mt={5}>
                    <Box  sx={{width: '75%',display:"flex",flexWrap: 'wrap',gap: '20px'}}>
                    <Box className="lichniy_text" sx={{width: '48%',}}mt={2}>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '700',fontSize: '24px',lineHeight: '32px',color: '#23262F'}}>Личная информация</Typography><br />
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#979C9E'}}>ФИО</Typography>
                        <input type="text" style={{width: '100%',height: '40px',border: '2px solid #E3E5E5',fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: 'black'}}/> <br /><br />
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#979C9E'}}>E-mail</Typography>
                        <input type='number' style={{width: '100%',height: '40px',border: '2px solid #E3E5E5',fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: 'black'}}/>
                    </Box>
                    <Box className="lichniy_text" sx={{width: '48%'}}mt={9}>
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#979C9E'}}>Номер телефона</Typography>
                        <input className='inputtex' type="text" style={{width: '100%',height: '40px',border: '2px solid #E3E5E5',fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: 'black'}}/> <br /><br />
                        <Typography style={{fontFamily: 'Inter',fontWeight: '500',fontSize: '14px',lineHeight: '20px',color: '#979C9E'}}>Пароль</Typography>
                        <input className='inputtex' type='number' style={{width: '100%',height: '40px',border: '2px solid #E3E5E5',fontFamily: 'Inter',fontWeight: '400',fontSize: '16px',lineHeight: '16px',color: 'black'}}/>
                    </Box>
                    <hr style={{border: '1px solid black',width: '98%'}}/>
                    <Link style={{width: '100%'}} to={'/menu/Треккинг'}>
                    <Button className="lichniy_text" style={{fontWeight: '700',fontSize: '15px',lineHeight: '16px',color: 'white',backgroundColor: '#EA412B',height: '40px',width: '19%',padding: '10px'}}>Обновить данные</Button>
                    </Link>
                    </Box>
            </Box>
        </Box>
    );
}

export default Lichniy;
