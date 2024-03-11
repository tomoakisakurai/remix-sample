import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { db } from '~/infra/db.server';

import invariant from 'tiny-invariant';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.activityId, 'Missing activityId');
  const activity = await db.activity.findUnique({
    where: {
      id: Number(params.activityId),
    },
    include: {
      images: true,
      ActivityDetail: true,
    },
  });
  return json({ activity });
};

export default function ActivityDetail() {
  const { activity } = useLoaderData<typeof loader>();
  console.log(activity);

  if (!activity) {
    return <div>Activity Detail not found</div>;
  }

  return (
    <div id="activity">
      <h1>{activity?.name}</h1>
      <img src={activity?.images[0].imageUrl} alt={activity?.name} />
      <p>{activity?.description}</p>
      <p>￥{activity?.minPrice}</p>
      <p>￥{activity?.maxPrice}</p>
      <p>{activity?.ActivityDetail?.notes}</p>
    </div>
  );
}
