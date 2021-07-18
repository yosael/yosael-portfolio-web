import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  return (
        <BaseLayout>
            <BasePage>
            { user ?
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
            :
            <div>
                <p>You need to login</p>
            </div>
            }
            </BasePage>
        </BaseLayout>
  );
}