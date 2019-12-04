import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import { user$ } from '../src/firebase';
import { useObservable } from 'rxjs-hooks';

export const withAuth = <P extends {}, IP = P>(Page: NextPage<P, IP>) => (props: P) => {
    // If we won't use this, then until the check in `useEffect` hook
    // will take action, the user will have a glimpse to the page.
    // This prevent the display of Page until the check in `useEffect` will 
    const [isReady, setIsReady] = useState(false);
    const user = useObservable(() => user$);
    const router = useRouter();

    useEffect(() => {
        const sub = user$.subscribe(
            user => {
                if (!user) {
                    Router.replace(`/?returnUrl=${router.route}`, '/')
                } else {
                    console.log('user name is', user.displayName)
                    setIsReady(true)
                }
            },
            error => {
                console.error(error);
                Router.replace('/');
            }
        );

        return () => sub.unsubscribe();
    }, [user$]);

    return (
        isReady
        ? <Page {...props} user={user} />
        : null
    );
}