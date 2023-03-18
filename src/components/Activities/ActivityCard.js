import styled from 'styled-components';
import { useState, useEffect } from 'react';
import useNumberOfUsersByActivity from '../../hooks/api/useNumberOfUsersByActivity';

export default function ActivityCard({ activity, locals }) {
  const startTime = activity.startTime.substr(11, 5);
  const endTime = activity.endTime.substr(11, 5);
  const msDuration = new Date(activity.endTime) - new Date(activity.startTime);
  const hour = 60;
  const msToHour = 60000;
  let heightHr = 79;
  const duration = msDuration / msToHour;

  const [availableCapacity, setAvailableCapacity] = useState(activity.capacity);

  if (duration > 60) {
    heightHr = 82;
  }

  const height = ((duration / hour) * heightHr).toString();

  const { getNumberOfUsersByActivity } = useNumberOfUsersByActivity(activity.id);

  // eslint-disable-next-line space-before-function-paren
  useEffect(async () => {
    const result = await getNumberOfUsersByActivity();
    setAvailableCapacity(activity.capacity - result.numberOfUsers);
  }, [locals, availableCapacity]);

  return (
    <Card height={height}>
      <ActivityInfo>
        <ActivityName>{activity.name}</ActivityName>
        <Time>
          {startTime} - {endTime}
        </Time>
      </ActivityInfo>
    </Card>
  );
}

const Card = styled.div`
  background-color: #f1f1f1;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  width: 265px;
  height: ${(props) => props.height + 'px;'};
  display: flex;
  padding: 9px;
  padding-right: 0px;
  margin-bottom: 6px;
`;

const ActivityInfo = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-right: 1px solid #cfcfcf;
  padding-right: 9px;
`;

const ActivityName = styled.h5`
  color: #343434;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
`;

const Time = styled.h6`
  color: #343434;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
`;
