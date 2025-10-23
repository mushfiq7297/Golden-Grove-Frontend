import App from "@/App";
import ProductShowcase from "@/components/ui/ProductShowCase";

import About from "@/pages/About";
import FAQ from "@/pages/FAQ";
import Home from "@/pages/Home";
import Testimonials from "@/pages/testimonials";


import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
        index: true, 
        Component: Home,
      },
            
            {
            Component: About,
            path: "about",
            },
            {
            Component: ProductShowcase,
            path: "products",
            },
            {
            Component: Testimonials,
            path: "reviews",
            },
            {
            Component: FAQ,
            path: "faq",
            },

        ]
    },
    
    
])
