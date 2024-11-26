import React, { Suspense } from "react";

import Front from "./Front";
import Specification from "./Specification";

const Ingredients = React.lazy(() => import("./Ingredients"));
const GridLayout = React.lazy(() => import("./Grid"));
const Footer = React.lazy(() => import("./Footer"));

export default function Main(){
  return(
      <div className="container">
        <Front />
        <Specification />
        <Suspense fallback={<p>Loading Ingredients...</p>}>
          <Ingredients />
        </Suspense>
        <p className="blog">OUR BLOG</p>
        <p className="latest">Latest News</p>
        <Suspense fallback={<p>Loading GridLayout...</p>}>
          <GridLayout />
        </Suspense>
        <Suspense fallback={<p>Loading Footer...</p>}>
          <Footer />
        </Suspense>
      </div>
  )
}
