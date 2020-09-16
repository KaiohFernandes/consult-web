import { Link } from './styles';
import whatsapp from '../../assets/images/whatsapp-white.svg';

function Whatsapp() {
  return (
    <Link href="https://api.whatsapp.com/send?phone=5547991424263&text=Olá Consult" target="_blank">
      <img src={whatsapp} alt="Whatsapp" title="Whatsapp" />
    </Link>
  )
}

export default Whatsapp;
