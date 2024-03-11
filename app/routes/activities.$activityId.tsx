import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import { db } from '~/infra/db.server';

import * as activityStyles from '../Activity.css'; // Note that `.ts` is omitted here

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');

  const contacts = await db.contacts.findMany({
    where: {
      OR: [
        {
          first: {
            contains: q ?? '',
          },
        },
        {
          last: {
            contains: q ?? '',
          },
        },
      ],
    },
  });

  const activities = await db.activity.findMany({
    include: {
      images: true,
    },
  });

  return json({ contacts, q, activities });
};

export default function App() {
  const { activities } = useLoaderData<typeof loader>();

  return (
    <div id="universities">
      <h2>アクティビティ一覧</h2>
      <ul className={activityStyles.wrapper}>
        {activities.map((activity) => (
          <li key={activity.id} className={activityStyles.item}>
            <Link to={`/activities/${activity.id}`}>
              <div>
                {activity.images.length > 0 && (
                  <img
                    className={activityStyles.image}
                    src={activity.images[0].imageUrl}
                    alt={activity.name}
                  />
                )}
                <div className={activityStyles.content}>
                  <p>{activity.name}</p>
                  <p>{activity.description}</p>
                  <p>￥{activity.minPrice}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
