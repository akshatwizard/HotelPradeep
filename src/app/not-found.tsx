import { headers } from 'next/headers'

export default async function NotFound() {
    const headersList = await headers()
    const domain = headersList.get('host')
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed" data-overlay-dark="5" data-background="img/banner/19.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="subtitle">404 Error Page</div>
                            <div className="title">Page not found!</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="not-found section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-12 text-center">
                            <h1>404</h1>
                            <h3>Sorry, We can't find that page!</h3>
                            <p>The page you are looking for was moved, removed, renamed or never existed.</p>
                            <a href="/" className="button-3 mb-15">Home</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}