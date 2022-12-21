import Styled from 'styled-components'
import Picture11 from "./../../Images/1.jpg"
export const HomeSection=Styled.div`
height: 500px;
background-image:url(${Picture11});
background-size: cover;
background-position: center;
position:relative;
@media (max-width:991px){
    height: auto; 
}

` 