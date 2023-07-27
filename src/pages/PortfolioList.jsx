import React, { useState, useEffect } from "react";
import PortfolioService from "../services/portfolioService";
import { Divider, Image } from 'semantic-ui-react';


export default function PortfolioList() {

    const [portfolios, setPortfolio] = useState([]);

    useEffect(() => {
      let portfolioService = new PortfolioService();
      portfolioService.getPortfolio().then((result) => setPortfolio(result.data.data));
    }, []);
  return (
    <div>
      <h1>My Projects</h1>
        {portfolios.map((portfolio) => (
             <Image
             key={portfolio.portfolioID}
             src={portfolio.imageUrl}
             as='a'
             size='medium'
             href={portfolio.projectUrl}
             target='_blank'
           />
        ))}
        <Divider/>
        <br></br>
    </div>
  )
}
