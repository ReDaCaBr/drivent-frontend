import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useHotel from '../../hooks/api/useHotel';

export default function Hotels() {
  const { getHotels } = useHotel();
  const [hotels, setHotels] = useState([]);
  //console.log(hotel);

  useEffect(async() => {
    const data = await getHotels();
    setHotels(data);
  }, []);

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <HotelBrowser>
        <HotelContainer>
          <img alt="hotel" />
          <div className="hotel-name">nome</div>
          <div className="hotel-info">
            <div className="accommodation">
              <h3>Tipos de acomodação</h3>
              <p>tipo</p>
            </div>
            <div className="available-rooms">
              <h3>Vagas Disponíveis</h3>
              <p>vagas</p>
            </div>
          </div>
        </HotelContainer>
      </HotelBrowser>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const HotelBrowser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 19px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
`;

export const HotelContainer = styled.div`
  background-color: #ebebeb;
  border-radius: 10px;
  width: 196px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 14px;
  cursor: pointer;

  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .hotel-name {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .hotel-info {
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: 12px;
    
    .accommodation,
    .available-rooms {
      h3 {
        font-weight: 700;
        line-height: 14.06px;
        margin-bottom: 3px;
      }
      p {
        line-height: 14.06px;
      }
    }
  }
`;
