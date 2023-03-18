import ActivityCard from './ActivityCard';

export default function ActivitiesCards({ activities, locals }) {
  return (
    <>
      {activities.map((activity, index) => {
        return <ActivityCard locals={locals} key={index} activity={activity} />;
      })}
    </>
  );
}
