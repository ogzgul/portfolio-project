import React, { useState, useEffect } from "react";
import PortfolioService from "../services/portfolioService";
import { Image } from 'semantic-ui-react'

export default function PortfolioList() {

    const [portfolios, setPortfolio] = useState([]);

    useEffect(() => {
      let portfolioService = new PortfolioService();
      portfolioService.getPortfolio().then((result) => setPortfolio(result.data.data));
    }, []);
  return (
    <div>
        {portfolios.map((portfolio) => (
             <Image
             src={portfolio.imageUrl}
             as='a'
             size='medium'
             href={portfolio.projectUrl}
             target='_blank'
           />
        ))}
    </div>
  )
}
