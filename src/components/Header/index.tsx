import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { Cart, HeaderContainer, Location, MapCartContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="Coffee DevLivery" />
      </div>
      <MapCartContainer>
        <Location>
          <MapPin size={25} weight="fill" />
          <span>Torino, TO</span>
        </Location>
        <Cart>
          <ShoppingCart size={25} weight="fill" />
        </Cart>
      </MapCartContainer>
    </HeaderContainer>
  )
}
