import { useEffect } from 'react';

import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useSubmit,
} from '@remix-run/react';
import { cssBundleHref } from '@remix-run/css-bundle';

import { db } from './infra/db.server';

// import appStylesHref from './app.css';
import { createEmptyContact, getContacts } from './data';

import './global.css';
import { root as styles } from './Text.css'; // Note that `.ts` is omitted here
import * as activityStyles from './Activity.css'; // Note that `.ts` is omitted here

import {
  sidebar,
  sidebarDiv,
  sidebarHeading,
  sidebarNav,
  sidebarNavLink,
} from './Sidebar.css';
import { detail, detailLoading } from './Detail.css';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

// export const links: LinksFunction = () => [
//   { rel: 'stylesheet', href: appStylesHref },
// ];

interface ApiResponse {
  message: null; // このフィールドが常にnullであるか、もしくは他の値も取りうるかによって、型をnull | string等に変更することも考えられます
  results: AddressInfo[];
  status: number;
}

interface AddressInfo {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string; // このフィールドが数値のコードである場合はnumber型に変更することも可能ですが、例のデータでは文字列として提供されています
  zipcode: string;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  // const contacts = await getContacts(q);

  // const response = await fetch(
  //   'https://zipcloud.ibsnet.co.jp/api/search?zipcode=0790177'
  // );
  // console.log(response);
  // const res: ApiResponse = await response.json();

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

export const action = async () => {
  const contact = await createEmptyContact();
  return redirect(`/contacts/${contact.id}/edit`);
  // return json({ contact });
};

export default function App() {
  const { contacts, q, activities } = useLoaderData<typeof loader>();
  console.log(activities);

  const navigation = useNavigation();
  const submit = useSubmit();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');

  useEffect(() => {
    const searchField = document.getElementById('q');
    if (searchField instanceof HTMLInputElement) {
      searchField.value = q || '';
    }
  }, [q]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar" className={sidebar}>
          <h1 className={sidebarHeading}>Remix Contacts</h1>
          <div className={sidebarDiv}>
            <Form
              id="search-form"
              role="search"
              onChange={(e) => {
                const isFirstSearch = q === null;
                submit(e.currentTarget, { replace: !isFirstSearch });
              }}
            >
              <input
                id="q"
                className={searching ? 'loading' : ''}
                aria-label="Search contacts"
                defaultValue={q || ''}
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={!searching} />
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav className={sidebarNav}>
            {/* <ul>
              <li>
                <a href={`/contacts/1`}>Your Name</a>
                <Link to={`/contacts/1`}>Your Name</Link>
              </li>
              <li>
                <a href={`/contacts/2`}>Your Friend</a>
                <Link to={`/contacts/2`}>Your Friend</Link>
              </li>
            </ul> */}
            {contacts.length ? (
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        `${
                          isActive ? 'active' : isPending ? 'pending' : ''
                        } ${sidebarNavLink}`
                      }
                      to={`contacts/${contact.id}`}
                    >
                      <Link to={`contacts/${contact.id}`}>
                        {contact.first || contact.last ? (
                          <>
                            {contact.first} {contact.last}
                          </>
                        ) : (
                          <i>No Name</i>
                        )}{' '}
                        {contact.favorite ? <span>★</span> : null}
                      </Link>
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No contacts</i>
              </p>
            )}
          </nav>
        </div>
        <div
          className={`
            ${detail} ${
            navigation.state === 'loading' && !searching ? detailLoading : ''
          }
          `}
          id="detail"
        >
          <Outlet />
          <div id="universities">
            {/* <h2>zip code(API fetch)</h2> */}
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
              {/* {res.results.map((zip, index) => (
                <li key={index} className={styles}>
                  <a href={`https://${zip.zipcode}`}>
                    {zip.zipcode} {zip.address1} {zip.address2} {zip.address3}
                  </a>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
