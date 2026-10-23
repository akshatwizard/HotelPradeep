import React from 'react'

export default function Menu() {
    return (
        <section id="menu" className="restaurant-menu menu section-padding bg-darkgray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-subtitle"><span>Hotel Pradeep</span></div>
                        <div className="section-title text-white">Poonam Restaurant Menu</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="tabs-icon col-md-10 offset-md-1 text-center">
                                <div className="owl-carousel owl-theme">
                                    <div id="tab-1" className="active item">
                                        <h6>Starters</h6>
                                    </div>
                                    <div id="tab-2" className="item">
                                        <h6>Mains</h6>
                                    </div>
                                    <div id="tab-3" className="item">
                                        <h6>Salads</h6>
                                    </div>
                                    <div id="tab-4" className="item">
                                        <h6>Wine</h6>
                                    </div>
                                    <div id="tab-5" className="item">
                                        <h6>Breakfast</h6>
                                    </div>
                                    <div id="tab-6" className="item">
                                        <h6>Dessert</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="restaurant-menu-content col-md-12">

                                <div id="tab-1-content" className="cont active">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="menu-info">
                                                <h5>Mozzarella Dippers <span className="price">27$</span></h5>
                                                <p>Fried mozzarella sticks, marinara sauce</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Onion Rings <span className="price">32$</span></h5>
                                                <p>Fried onion rings, smoked aioli</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Fried Jalapeno <span className="price">52$</span></h5>
                                                <p>Fried jalapeno pickles, cheddar sauce</p>
                                            </div>
                                        </div>
                                        <div className="col-md-5 offset-md-2">
                                            <div className="menu-info">
                                                <h5>Buffalo Wings <span className="price">37$</span></h5>
                                                <p>Spicy chicken wings, blue cheese sauce, carrot, celery</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Chilli Con Carne <span className="price">32$</span></h5>
                                                <p>Spicy ground beef, bacon, kidney beans</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Potato Skins <span className="price">42$</span></h5>
                                                <p>Crispy potato skins; bacon & cheddar or vegetables</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab-2-content" className="cont">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="menu-info">
                                                <h5>Rusty’s Burger <span className="price">27$</span></h5>
                                                <p>Smoked pulled beef ribs, bbq sauce, cheddar, crispy onion</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Cajun Fish Steak <span className="price">32$</span></h5>
                                                <p>Cajun spicied seabass, deep fried baby potatoes, side salad</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Southern Fried Chicken <span className="price">52$</span></h5>
                                                <p>Cajun coated chicken breast, fries and honey mustard</p>
                                            </div>
                                        </div>
                                        <div className="col-md-5 offset-md-2">
                                            <div className="menu-info">
                                                <h5>Crab Cake <span className="price">37$</span></h5>
                                                <p>Breaded crab cakes, tartar sauce, apple and fennel salad</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Baby Back Ribs <span className="price">32$</span></h5>
                                                <p>Bbq glazed baby pork ribs, coleslaw, fries</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Smokehouse Combo <span className="price">42$</span></h5>
                                                <p>Smoked beef brisket, rib and sausage, coleslaw, cornbread</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab-3-content" className="cont">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="menu-info">
                                                <h5>Ceaser Salad <span className="price">47$</span></h5>
                                                <p>Romaine lettuce, croutons, parmigiano, Ceaser dressing.</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Waldorf Salad <span className="price">52$</span></h5>
                                                <p>Lettuce, celery, apple, grape, walnut, waldorf sauce</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Quinoa & Avocado Salad <span className="price">52$</span></h5>
                                                <p>Quinoa, avocado, mixed greens. Nuts, dried and fresh fruits</p>
                                            </div>
                                        </div>
                                        <div className="col-md-5 offset-md-2">
                                            <div className="menu-info">
                                                <h5>Grilled Salmon Salad <span className="price">37$</span></h5>
                                                <p>Grilled salmon, mixed greens, capers, orange slices</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Chicken Cobb Salad <span className="price">32$</span></h5>
                                                <p>Iceberg lettuce, cherry tomatoes, blue cheese, avocado, bacon</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Salad Chicken <span className="price">42$</span></h5>
                                                <p> Ceaser dressing. Optional grilled chicken breast</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab-4-content" className="cont">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="menu-info">
                                                <h5>Château d'Yquem 2011 <span className="price">400$</span></h5>
                                                <p>Dessert Wine, Bordeaux, Graves, Sauternes</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Alvear Cream NV <span className="price">30$</span></h5>
                                                <p>Dessert, Fortified Wine, Andalucia</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Chateau D'yquem 1990 <span className="price">900$</span></h5>
                                                <p>Dessert Wine, Bordeaux, Graves, Sauternes</p>
                                            </div>
                                        </div>
                                        <div className="col-md-5 offset-md-2">
                                            <div className="menu-info">
                                                <h5>La Grande Année 2007 <span className="price">400$</span></h5>
                                                <p>Rosé, Champagne</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Sine Qua Non 2012 <span className="price">520$</span></h5>
                                                <p>Syrah, Shiraz & Blends, California</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>W.S. Keyes Winery 2006 <span className="price">240$</span></h5>
                                                <p>Merlot, California, Napa, Howell Mountain</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab-5-content" className="cont">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="menu-info">
                                                <h5>Egg Benedict <span className="price">60$</span></h5>
                                                <p>English muffin, beef, hollandaise sauce, poached egg.</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Texas Benedict <span className="price">30$</span></h5>
                                                <p>English muffin, short ribs, bbq sauce, poached egg.</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Rusty’s Omlette <span className="price">22$</span></h5>
                                                <p>Mozzarella, cheddar, caramelized onion, black beans.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-5 offset-md-2">
                                            <div className="menu-info">
                                                <h5>Salmon Bagel <span className="price">30$</span></h5>
                                                <p>Smoked salmon, cream cheese, dill, rocket, red onion.</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Breakfast Bagel <span className="price">33$</span></h5>
                                                <p>Chocolate, marshmallow, biscuit bar</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Rusty’s Pancake <span className="price">40$</span></h5>
                                                <p>Strawberry, white chocolate, dark chocolate, crispearls</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab-6-content" className="cont">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="menu-info">
                                                <h5>Bourbon Pecan Pie <span className="price">67$</span></h5>
                                                <p>Bourbon pecan stuffed pie, vanilla ice-cream</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>New York Cheesecake <span className="price">50$</span></h5>
                                                <p>Cheesecake, strawberry & lime salad</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Rusty’s ice-cream <span className="price">32$</span></h5>
                                                <p>Vanilla, bourbon, cookie, chocolate ice-cream</p>
                                            </div>
                                        </div>
                                        <div className="col-md-5 offset-md-2">
                                            <div className="menu-info">
                                                <h5>S’mores <span className="price">40$</span></h5>
                                                <p>Chocolate chip cookies, marshmallow, chocolate</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Rocky Road <span className="price">42$</span></h5>
                                                <p>Chocolate, marshmallow, biscuit bar</p>
                                            </div>
                                            <div className="menu-info">
                                                <h5>Apple & Pear Crumble <span className="price">42$</span></h5>
                                                <p>Caramelized pear and apple, oat crumble, vanilla ice-cream</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
