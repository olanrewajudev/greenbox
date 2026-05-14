import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('./Layouts/general-layout.tsx', [
        index("routes/home.tsx"),
        route('about-us', './routes/about-us.tsx'),
        route('contact-us', './routes/contact-us.tsx'),
        route('offers', './routes/offer.tsx'),
        route('single-product/:id', './routes/products/single-product.tsx'),
    ]),
    layout('./Layouts/admin-layout.tsx', [

    ])
] satisfies RouteConfig;
