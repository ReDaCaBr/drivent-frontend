import styled from 'styled-components';
import ActivitiesCards from './ActivitiesCards';

export default function LocationCard({ locals }) {
  return (
    <>
      {locals.map((local, index) => {
        return (
          <Container>
            <Title key={index}>{local.name}</Title>
            <StyledLocal>
              <ActivitiesCards locals={locals} activities={local.Activity} />
            </StyledLocal>
          </Container>
        );
      })}
    </>
  );
}

const Container = styled.div`
  width: 288px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h4`
  font-size: 17px;
  color: #7b7b7b;
  line-height: 19.92px;
  font-weight: 400;
  margin-bottom: 13px;
`;

const StyledLocal = styled.div`
  width: 288px;
  height: 391px;
  border: 1px solid #d7d7d7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 9px;
`;
