import { portfolioData, type PortfolioData } from '../data/portfolioData';

export const usePortfolioData = () => {
  return { data: portfolioData as PortfolioData, loading: false, error: null };
};
