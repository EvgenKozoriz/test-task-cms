import React, { lazy, Suspense } from 'react';

function LazyLoadedComponent({ path }) {
    const LazyComponent = lazy(() => import(`../${path}`));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    );
}

export default LazyLoadedComponent;