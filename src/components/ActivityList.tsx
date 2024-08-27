import { Activity } from '../types';

type ActivityListProps = {
  activities: Activity[];
};

export default function ActivityList({ activities }: ActivityListProps) {
  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comida y actividades
      </h2>

      {activities.map((activity) => (
        <div
          className="px-5 py-10 bg-white mt-5 flex justify-between"
          key={activity.id}
        >
          <div className="space-y-2 relative">
            <p className="">{activity.category}</p>
            <p className="text-2xl font-bold pt-5">{activity.name}</p>
            <p className="font-black text-4xl text-lime-500">
              {activity.calories} <span>Calorías</span>
            </p>
            {activity.name}
          </div>
          <div className=""></div>
        </div>
      ))}
    </>
  );
}
