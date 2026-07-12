import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import CompanyOverview from "../components/CompanyOverview";
import FinancialAnalysis from "../components/FinancialAnalysis";
import NewsAnalysis from "../components/NewsAnalysis";
import SWOT from "../components/SWOT";
import Recommendation from "../components/Recommendation";
import Footer from "../components/Footer";
import { analyzeCompany } from "../services/api";

function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reportData, setReportData] = useState(null);

  const handleSearch = async (company) => {
    setLoading(true);
    setError(false);
    setReportData(null);

    try {
      const response = await analyzeCompany(company);
      if (response.status === "success") {
        setReportData(response);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      <Navbar />

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-6 py-12">
        {!reportData && !loading && (
          <div className="text-center max-w-2xl mx-auto py-20">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">AI Investment Research Agent</h2>
            <p className="text-xl text-gray-600 mb-8">Analyze publicly listed companies using Artificial Intelligence.</p>
          </div>
        )}

        <SearchBar onSearch={handleSearch} isLoading={loading} />

        {error && (
          <div className="mt-12 text-center text-red-600 bg-red-50 p-6 rounded-xl border border-red-200">
            <p className="text-lg font-medium">Unable to generate report.</p>
            <p>Please try again.</p>
          </div>
        )}

        {loading && <Loading />}

        {reportData && !loading && (
          <div className="mt-12">
            <Recommendation 
              recommendation={reportData.aiGeneratedReport.recommendation}
              confidence={reportData.aiGeneratedReport.confidence}
              reasoning={reportData.aiGeneratedReport.reasoning}
            />
            
            <CompanyOverview 
              data={reportData.aiGeneratedReport.companyOverview} 
              companyName={reportData.researchData?.company?.shortName || reportData.metadata?.requestedCompany} 
            />
            
            <FinancialAnalysis 
              data={reportData.aiGeneratedReport.financialAnalysis} 
            />
            
            <NewsAnalysis 
              data={reportData.aiGeneratedReport.newsAnalysis} 
            />
            
            <SWOT 
              strengths={reportData.aiGeneratedReport.strengths}
              weaknesses={reportData.aiGeneratedReport.weaknesses}
              opportunities={reportData.aiGeneratedReport.opportunities}
              risks={reportData.aiGeneratedReport.risks}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Home;