import { redirect, type ActionFunctionArgs } from '@remix-run/node';
import invariant from 'tiny-invariant';
// import { deleteContact } from '~/data';
import { db } from '~/infra/db.server';

export const action = async ({ params }: ActionFunctionArgs) => {
  invariant(params.contactId, 'Missing contactId param');
  // await deleteContact(params.contactId);
  await db.contacts.delete({
    where: {
      id: params.contactId,
    },
  });
  return redirect('/');
};
