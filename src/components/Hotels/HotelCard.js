import styled from 'styled-components';

function getNumberOfAvailableSpaces(rooms) {
  return rooms.reduce((acc, curr) => acc + (curr.capacity - curr.bookingCount), 0);
}

function getAccommodationType(rooms) {
  let capacitySingle = false;
  let capacityDouble = false;
  let capacityTriple = false;

  let accommodationType = '';

  if (rooms.length === 0) return '';

  let i = 0;
  while (!(capacitySingle && capacityDouble && capacityTriple)) {
    if (i === rooms.length) break;
    const room = rooms[i];
    if (room.capacity === 1) {
      capacitySingle = true;
    }
    if (room.capacity === 2) {
      capacityDouble = true;
    }
    if (room.capacity >= 3) {
      capacityTriple = true;
    }
    i += 1;
  }

  const capacities = [
    { name: 'Single', available: capacitySingle },
    { name: 'Double', available: capacityDouble },
    { name: 'Triple', available: capacityTriple },
  ];

  const availableCapacities = capacities.filter((e) => e.available).map((e) => e.name);

  if (availableCapacities.length === 3) {
    accommodationType = `${availableCapacities[0]}, ${availableCapacities[1]} e ${availableCapacities[2]}`;
  } else if (availableCapacities.length === 2) {
    accommodationType = `${availableCapacities[0]} e ${availableCapacities[1]}`;
  } else if (availableCapacities.length === 1) {
    accommodationType = `${availableCapacities[0]}`;
  }

  return accommodationType;
}

export default function Hotel({ index, name, image, rooms, selected, handleSelectHotel }) {
  const accommodationType = getAccommodationType(rooms);
  const numberAvailableSpaces = getNumberOfAvailableSpaces(rooms);

  return (
    <hotelPage>
      <Container selected={selected} index={index} onClick={handleSelectHotel}>
        <img src={image} alt="hotel" />
        <div className="name">{name}</div>
        <div className="info">
          <div className="accommodation">
            <h3>Tipos de acomodação</h3>
            <p>{accommodationType}</p>
          </div>
          <div className="availableRooms">
            <h3>Vagas Disponíveis</h3>
            <p>{numberAvailableSpaces}</p>
          </div>
        </div>
      </Container>
    </hotelPage>
  );
}

export const hotelPage = styled.div`
  display: flex;
`;

export const Container = styled.div`
  background-color: #ebebeb;
  border-radius: 10px;
  width: 196px;
  height: 264px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? '#FFEED2' : '#ccc')};
    transform: scale(1.02);
  }

  background-color: ${(props) => (props.selected ? '#FFEED2' : '#ebebeb')};

  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .name {
    font-size: 20px;
    margin-bottom: 14px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: 12px;

    .accommodation,
    .availableRooms {
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
