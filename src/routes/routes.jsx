import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page from '../components/navigation/page'
import BreedIndex from '../pages/breeds';
import BreedTitle2Container from '../pages/breeds/index2';
import PageNotFound from '../pages/page_not_found';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={(
                        <Page title="Breed Lists">
                            <BreedIndex />
                        </Page>
                    )}

                />
                <Route
                    path='/title2'
                    element={(
                        <Page title="Breed Lists 2">
                            <BreedTitle2Container />
                        </Page>
                    )}

                />

                {/* If page not found or try to access admin pages send to the page not found */}

                <Route path='*' element={(<Page title="Error">
                    <PageNotFound />
                </Page>)} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router