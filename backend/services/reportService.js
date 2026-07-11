import { getFinanceData } from "./financeService.js";
import { getCompanyInfo } from "./companyService.js";
import { getCompanyNews } from "./newsService.js";
import { generateAIReport } from "./aiService.js";

export const generateReport = async (companyName) => {
  try {
    // Step 1: Fetch financial data first (required to get the stock symbol)
    const finance = await getFinanceData(companyName);

    // Step 2: Fetch company info and news concurrently
    const [company, news] = await Promise.all([
      getCompanyInfo(companyName),
      getCompanyNews(companyName, finance.symbol),
    ]);

    // Step 3: Build research object
    const researchData = {
      company,
      finance,
      news,
    };

    // Step 4: Generate AI analysis
    const aiGeneratedReport = await generateAIReport(researchData);

    // Step 5: Return final report
    return {
      status: "success",
      researchData,
      aiGeneratedReport,
      metadata: {
        generatedAt: new Date().toISOString(),
        dataSources: ["Yahoo Finance", "Wikidata", "NewsAPI"],
        requestedCompany: companyName,
        resolvedSymbol: finance.symbol,
      },
    };
  } catch (error) {
    console.error("Report generation failed:", error);
    throw error;
  }
};